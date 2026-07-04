const fs = require('fs');
const path = require('path');

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

const trades = [];
let idCounter = 1;

for (const key in grouped) {
  const { buys, sells } = grouped[key];
  // Simple matching: total buy qty vs total sell qty. Usually it's 1 buy 1 sell.
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
      session: 'NY', // Assume NY for all 0DTE options
      entry: parseFloat(avgEntry.toFixed(2)),
      exit: parseFloat(avgExit.toFixed(2)),
      contracts: totalBuyQty,
      outcome,
      pnl,
      note: 'Parsed from Webull export.',
      tags: [buys[0].instrument, '0DTE', outcome],
    };
    trades.push(trade);
  }
}

// Sort by date descending
trades.sort((a, b) => new Date(b.date) - new Date(a.date));

// Limit to the most recent 50 trades to not overwhelm the UI, or just export all?
// Let's export all.
console.log(JSON.stringify(trades, null, 2));
