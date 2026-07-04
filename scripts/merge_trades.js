const fs = require('fs');

const csvPath = 'C:\\Users\\Owner\\Downloads\\Webull_Orders_Records_Options(1).csv';
const lines = fs.readFileSync(csvPath, 'utf-8').trim().split('\n');

const orders = [];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  const parts = line.split(',');
  if (parts.length < 11) continue;
  
  const symbol = parts[1];
  const side = parts[2];
  const status = parts[3];
  if (status !== 'Filled') continue; // Skip cancelled
  
  const qty = parseInt(parts[5], 10);
  let price = parts[6].replace('@', ''); // some prices have @ prefix
  price = parseFloat(price);
  
  const time = parts[9]; // Placed Time: 07/02/2026 09:36:25 EDT
  const dateParts = time.split(' ')[0].split('/');
  const date = `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;
  
  let instrument = symbol.substring(0, 3);
  if (symbol.startsWith('SOFI')) instrument = 'SOFI';
  if (symbol.startsWith('MARA')) instrument = 'MARA';
  if (symbol.startsWith('NVDA')) instrument = 'NVDA';
  if (symbol.startsWith('AAL')) instrument = 'AAL';
  
  const typeChar = symbol.includes('C00') ? 'Call' : 'Put';
  const type = `0DTE ${typeChar}`;
  
  orders.push({ symbol, side, qty, price, date, time, instrument, type });
}

// Group by symbol + date
const grouped = {};
for (const o of orders) {
  const key = `${o.symbol}_${o.date}`;
  if (!grouped[key]) grouped[key] = { buys: [], sells: [] };
  if (o.side === 'Buy') grouped[key].buys.push(o);
  else if (o.side === 'Sell') grouped[key].sells.push(o);
}

const parsed = [];
let idCounter = 1;

for (const key in grouped) {
  const { buys, sells } = grouped[key];
  if (buys.length > 0 && sells.length > 0) {
    let totalBuyCost = 0;
    let totalBuyQty = 0;
    for (const b of buys) {
      totalBuyCost += b.price * b.qty;
      totalBuyQty += b.qty;
    }
    const avgEntry = totalBuyCost / totalBuyQty;
    
    let totalSellCost = 0;
    let totalSellQty = 0;
    for (const s of sells) {
      totalSellCost += s.price * s.qty;
      totalSellQty += s.qty;
    }
    const avgExit = totalSellCost / totalSellQty;
    
    const pnl = Math.round((avgExit - avgEntry) * totalBuyQty * 100);
    let outcome = 'breakeven';
    if (pnl > 0) outcome = 'win';
    if (pnl < 0) outcome = 'loss';
    
    const trade = {
      id: `${buys[0].date}-${buys[0].instrument.toLowerCase()}-${buys[0].type.includes('Call') ? 'c' : 'p'}-${String(idCounter++).padStart(2, '0')}`,
      date: buys[0].date,
      instrument: buys[0].instrument,
      type: buys[0].type,
      session: 'NY', 
      entry: parseFloat(avgEntry.toFixed(2)),
      exit: parseFloat(avgExit.toFixed(2)),
      contracts: totalBuyQty,
      outcome,
      pnl,
      note: 'Parsed from Webull export.',
      tags: [buys[0].instrument, '0DTE', outcome],
    };
    parsed.push(trade);
  }
}

// Sort by date descending
parsed.sort((a, b) => new Date(b.date) - new Date(a.date));

const currentTradesContent = fs.readFileSync('C:\\Users\\Owner\\Downloads\\130afterm\\lib\\trades.ts', 'utf-8');

// Extract the TRADES array string from the current file
const tradesMatch = currentTradesContent.match(/export const TRADES: TradeEntry\[\] = (\[[\s\S]*?\]);/);
let currentTrades = [];
if (tradesMatch) {
  const code = tradesMatch[1];
  try {
    currentTrades = eval(`(${code})`);
  } catch(e) {
    console.error("Failed to eval old trades", e);
  }
}

// Map old trades to preserve notes
for (let newTrade of parsed) {
  const matchingOld = currentTrades.find(t => 
    t.date === newTrade.date && 
    t.instrument === newTrade.instrument &&
    t.type === newTrade.type &&
    t.outcome === newTrade.outcome &&
    Math.abs(t.pnl - newTrade.pnl) < 10
  );
  
  if (matchingOld) {
    newTrade.note = matchingOld.note;
    newTrade.tags = matchingOld.tags;
  }
}

// Now calculate monthly summaries based on all trades
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthlyMap = {};

for (const t of parsed) {
  const [year, monthStr] = t.date.split('-');
  const monthName = monthNames[parseInt(monthStr, 10) - 1];
  const key = `${monthName} ${year}`;
  
  if (!monthlyMap[key]) {
    monthlyMap[key] = {
      month: key,
      totalTrades: 0,
      wins: 0,
      losses: 0,
      breakevens: 0,
      totalPnl: 0,
      keyLesson: ""
    };
  }
  
  monthlyMap[key].totalTrades++;
  monthlyMap[key].totalPnl += t.pnl;
  if (t.outcome === 'win') monthlyMap[key].wins++;
  else if (t.outcome === 'loss') monthlyMap[key].losses++;
  else monthlyMap[key].breakevens++;
}

const summaries = Object.values(monthlyMap);
// Sort summaries descending
summaries.sort((a, b) => {
  const dA = new Date("01 " + a.month);
  const dB = new Date("01 " + b.month);
  return dB - dA;
});

const oldSummariesMatch = currentTradesContent.match(/export const MONTHLY_SUMMARIES: MonthlySummary\[\] = (\[[\s\S]*?\]);/);
if (oldSummariesMatch) {
  try {
    const oldSummaries = eval(`(${oldSummariesMatch[1]})`);
    for (const s of summaries) {
      const old = oldSummaries.find(o => o.month === s.month);
      if (old) s.keyLesson = old.keyLesson;
      else s.keyLesson = "Awaiting post-month review. Focus on execution and process.";
    }
  } catch(e) {
    for (const s of summaries) s.keyLesson = "Awaiting post-month review. Focus on execution and process.";
  }
}

const newFileContent = `export type TradeOutcome = "win" | "loss" | "breakeven";
export type TradeInstrument = "SPY" | "XAUUSD" | "IWM" | "SOFI" | "AAL" | "MARA" | "NVDA";
export type TradeSession = "NY" | "London" | "Asian" | "Pre-Market";

export interface TradeEntry {
  id: string;
  date: string;        // YYYY-MM-DD
  instrument: string;
  type: string;
  session: TradeSession;
  entry: number;       // price per share/contract
  exit: number;
  contracts: number;
  outcome: TradeOutcome;
  pnl: number;         // in dollars
  note: string;
  tags: string[];
}

// ─── Real trades from Webull export ──────────────────────────────
// Each entry represents a completed round-trip (buy → sell).
// Prices are per-share; multiply by 100 for actual P&L per contract.

export const TRADES: TradeEntry[] = ${JSON.stringify(parsed, null, 2)};

// ─── Monthly summaries ───────────────────────────────────────────────────────

export interface MonthlySummary {
  month: string;
  totalTrades: number;
  wins: number;
  losses: number;
  breakevens: number;
  totalPnl: number;
  keyLesson: string;
}

export const MONTHLY_SUMMARIES: MonthlySummary[] = ${JSON.stringify(summaries, null, 2)};

export function getTradeSummary(trades: TradeEntry[]) {
  const wins = trades.filter((t) => t.outcome === "win").length;
  const losses = trades.filter((t) => t.outcome === "loss").length;
  const totalPnl = trades.reduce((sum, t) => sum + t.pnl, 0);
  const winRate = trades.length > 0 ? Math.round((wins / trades.length) * 100) : 0;
  return { wins, losses, totalPnl, winRate, total: trades.length };
}
`;

fs.writeFileSync('C:\\Users\\Owner\\Downloads\\130afterm\\lib\\trades.ts', newFileContent, 'utf-8');
console.log("Updated lib/trades.ts successfully.");
