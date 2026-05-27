const fs = require('fs');

const radioHtml = `
<!-- FLOATING RADIO WIDGET -->
<div id="radio-widget" class="fixed bottom-6 right-6 w-[340px] glass-panel glass-amber p-4 flex flex-col font-mono relative overflow-hidden z-50 shadow-2xl" style="backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);">
    <div id="yt-player-container" class="hidden"></div>
    <div class="flex items-center justify-between mb-4 z-10">
        <div class="section-label">130AM FM</div>
        <div class="flex items-center gap-2">
            <span class="live-dot bg-amber-500" id="radio-dot" style="animation-play-state: paused;"></span>
            <span class="text-[9px] text-amber-500 uppercase tracking-widest" id="radio-status">Offline</span>
        </div>
    </div>
    <div class="flex items-center justify-between z-10">
        <div class="flex flex-col">
            <div class="text-[8px] text-zinc-400 tracking-[0.2em] uppercase mb-1">Now Playing</div>
            <div class="text-[10px] font-bold text-amber-400 tracking-widest glitch-hover line-clamp-1 w-40" id="radio-title">Loading...</div>
        </div>
        <div class="flex items-center gap-2">
            <div class="flex items-end gap-0.5 h-4 opacity-80 mr-2" id="visualizer">
                <div class="w-1 bg-amber-500 h-1 transition-all duration-100 bar"></div>
                <div class="w-1 bg-amber-500 h-2 transition-all duration-100 bar"></div>
                <div class="w-1 bg-amber-500 h-1 transition-all duration-100 bar"></div>
                <div class="w-1 bg-amber-500 h-3 transition-all duration-100 bar"></div>
            </div>
            <button id="radio-prev" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-zinc-400 hover:text-white"><i class="fas fa-backward-step text-[9px]"></i></button>
            <button id="radio-play" class="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(255,176,0,0.3)] text-black"><i class="fas fa-play text-[10px] ml-0.5" id="play-icon"></i></button>
            <button id="radio-next" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-zinc-400 hover:text-white"><i class="fas fa-forward-step text-[9px]"></i></button>
        </div>
    </div>
    <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/[0.08] rounded-full blur-2xl pointer-events-none"></div>
</div>

<!-- SWUP & RADIO SCRIPTS -->
<script src="https://unpkg.com/swup@4"></script>
<script src="https://unpkg.com/@swup/scripts-plugin@3"></script>
<script>
    const swup = new Swup({ plugins: [new SwupScriptsPlugin()] });
</script>

<script src="https://www.youtube.com/iframe_api"></script>
<script>
    let player;
    let isPlaying = false;
    let visualizerInterval;

    const playBtn = document.getElementById('radio-play');
    const playIcon = document.getElementById('play-icon');
    const nextBtn = document.getElementById('radio-next');
    const prevBtn = document.getElementById('radio-prev');
    const titleEl = document.getElementById('radio-title');
    const statusEl = document.getElementById('radio-status');
    const dotEl = document.getElementById('radio-dot');
    const bars = document.querySelectorAll('.bar');

    function animateVisualizer() {
        if(!isPlaying) { bars.forEach(bar => bar.style.height = '4px'); return; }
        bars.forEach(bar => { bar.style.height = (Math.floor(Math.random() * 12) + 4) + 'px'; });
    }

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player-container', {
            height: '0', width: '0',
            playerVars: { listType: 'playlist', list: 'PL5AZJ4fMfrhPkxjJMxa7OZZxRK-frkIX7', loop: 1, autoplay: 0, controls: 0, showinfo: 0, rel: 0 },
            events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
        });
    }

    function onPlayerReady(event) {
        titleEl.textContent = "PRESS PLAY TO STREAM";
        statusEl.textContent = "Ready";
        player.setShuffle(true);
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            isPlaying = true;
            playIcon.className = "fas fa-pause text-xs";
            statusEl.textContent = "Streaming";
            dotEl.style.animationPlayState = "running";
            setTimeout(() => {
                try {
                    const data = player.getVideoData();
                    if(data && data.title) titleEl.textContent = data.title.toUpperCase();
                    else titleEl.textContent = "STREAMING...";
                } catch(e) {}
            }, 500);
            if(!visualizerInterval) visualizerInterval = setInterval(animateVisualizer, 150);
        } else {
            isPlaying = false;
            playIcon.className = "fas fa-play text-xs ml-0.5";
            statusEl.textContent = event.data == YT.PlayerState.PAUSED ? "Paused" : "Buffering";
            dotEl.style.animationPlayState = "paused";
            clearInterval(visualizerInterval);
            visualizerInterval = null;
            animateVisualizer();
        }
    }

    playBtn.addEventListener('click', () => {
        if(!player || !player.getPlayerState) return;
        if(player.getPlayerState() == YT.PlayerState.PLAYING) player.pauseVideo();
        else {
            if (titleEl.textContent === "PRESS PLAY TO STREAM") player.playVideoAt(0);
            else player.playVideo();
        }
    });
    nextBtn.addEventListener('click', () => { if(player && player.nextVideo) player.nextVideo(); });
    prevBtn.addEventListener('click', () => { if(player && player.previousVideo) player.previousVideo(); });
</script>
</body>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove old YT script block
    const ytIndex = content.indexOf('<!-- YOUTUBE IFRAME API & RADIO LOGIC -->');
    if (ytIndex !== -1) {
        const bodyIndex = content.indexOf('</body>', ytIndex);
        if (bodyIndex !== -1) {
            content = content.substring(0, ytIndex) + content.substring(bodyIndex);
        }
    }

    // Remove old widget if it exists
    const fwIndex = content.indexOf('<!-- FLOATING RADIO WIDGET -->');
    if (fwIndex !== -1) {
        const bodyIndex = content.indexOf('</body>', fwIndex);
        if (bodyIndex !== -1) {
            content = content.substring(0, fwIndex) + content.substring(bodyIndex);
        }
    }

    // Remove old inline radio widget
    const rStart = content.indexOf('<!-- 130AM FM RADIO -->');
    if (rStart !== -1) {
        const gbStart = content.indexOf('<!-- GUESTBOOK -->');
        if (gbStart !== -1) {
            content = content.substring(0, rStart) + content.substring(gbStart);
        }
    }

    // Expand guestbook width
    content = content.replace('<div class="glass-panel md:col-span-7 flex flex-col font-mono relative overflow-hidden', '<div class="glass-panel md:col-span-12 flex flex-col font-mono relative overflow-hidden');

    // Add Swup ID to main
    if (!content.includes('id="swup"')) {
        content = content.replace(/<main([^>]*)>/, '<main id="swup" class="transition-fade $1">');
        content = content.replace('class="transition-fade class="', 'class="transition-fade ');
    }

    // Add CSS
    if (!content.includes('.transition-fade')) {
        const styleClose = content.indexOf('</style>');
        if (styleClose !== -1) {
            const css = `
        /* ── SWUP FADE ── */
        html.is-animating .transition-fade { opacity: 0; }
        .transition-fade { transition: opacity 0.3s; opacity: 1; }
    `;
            content = content.substring(0, styleClose) + css + content.substring(styleClose);
        }
    }

    // Replace </body> with the widget + </body>
    content = content.replace(/<\/body>/, radioHtml);

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Patched ${file}`);
}
