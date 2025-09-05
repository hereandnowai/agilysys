/* Kids gaming site interactions */
(function(){
  'use strict';

  // Utils
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
  // Brand palette (from branding.json)
  const BRAND = {
    primary: '#FFDF00',
    secondary: '#004040'
  };

  // Accessible confetti-like burst using CSS and minimal DOM nodes
  function confettiBurst(target){
    const colors = [BRAND.primary, '#00e5ff','#22e58b','#ff3ea5','#ffd12e'];
    const rect = target.getBoundingClientRect();
    const container = document.createElement('div');
    Object.assign(container.style, {
      position: 'fixed', left: `${rect.left + rect.width/2}px`, top: `${rect.top + rect.height/2}px`,
      width: '0px', height: '0px', pointerEvents: 'none', zIndex: 9999
    });
    document.body.appendChild(container);
    for (let i=0;i<24;i++){
      const dot = document.createElement('i');
      const angle = Math.random()*Math.PI*2;
      const dist = 80 + Math.random()*80;
      const size = 6 + Math.random()*8;
      const x = Math.cos(angle)*dist;
      const y = Math.sin(angle)*dist;
      const c = colors[i % colors.length];
      Object.assign(dot.style, {
        position:'absolute', width:`${size}px`, height:`${size}px`,
        background:c, borderRadius:'50%', transform:`translate(-50%,-50%)`,
        boxShadow:'0 0 12px rgba(0,0,0,.25)',
        transition:'transform .8s cubic-bezier(.18,.89,.32,1.28), opacity .8s ease',
        opacity:'1'
      });
      container.appendChild(dot);
      requestAnimationFrame(()=>{
        dot.style.transform = `translate(${x}px, ${y}px)`;
        dot.style.opacity = '0';
      });
    }
    setTimeout(()=>container.remove(), 900);
  }

  // Countdown Timer
  function startCountdown(el, seconds){
    const pad = n => String(n).padStart(2,'0');
    const render = (s) => {
      const d = Math.floor(s / 86400);
      s %= 86400;
      const h = Math.floor(s / 3600);
      s %= 3600;
      const m = Math.floor(s / 60);
      const sec = s % 60;
      el.innerHTML = `
        <div class="countdown">
          <div class="slot"><span>${pad(d)}</span><small>Days</small></div>
          <div class="slot"><span>${pad(h)}</span><small>Hours</small></div>
          <div class="slot"><span>${pad(m)}</span><small>Minutes</small></div>
          <div class="slot"><span>${pad(sec)}</span><small>Seconds</small></div>
        </div>`;
    };

    let remaining = seconds;
    render(remaining);
    const iv = setInterval(()=>{
      remaining -= 1;
      if (remaining <= 0){
        clearInterval(iv);
        render(0);
        const header = $('.site-title') || document.body;
        confettiBurst(header);
        const msg = document.createElement('p');
        msg.className = 'mt-2';
        msg.textContent = 'Time\'s up! Let\'s play!';
        el.appendChild(msg);
        return;
      }
      render(remaining);
    }, 1000);
  }

  // Game list rendering
  function renderGames(el, games){
    if (!el) return;
    el.innerHTML = '';
    for (const game of games){
      const card = document.createElement('article');
      card.className = 'game-card';
      card.innerHTML = `
        <div class="game-thumb" aria-hidden="true">🎮</div>
        <div class="game-info">
          <h3 class="game-title">${game.title}</h3>
          <p class="game-desc">${game.desc}</p>
          <div class="game-meta">
            <span class="badge">${game.genre}</span>
            <span class="badge">${game.age}+</span>
          </div>
          <div class="game-actions">
            <button class="btn btn-primary play-btn" type="button">Play</button>
            <button class="btn details-btn" type="button">Details</button>
          </div>
        </div>
      `;
      const playBtn = $('.play-btn', card);
      playBtn.addEventListener('click', ()=>{
        confettiBurst(playBtn);
      });
      const detailsBtn = $('.details-btn', card);
      detailsBtn.addEventListener('click', ()=>{
        alert(`${game.title}\n\n${game.desc}`);
      });
      el.appendChild(card);
    }
  }

  // Style hooks (only CSS classes, styles live in style.css)
  function injectStyleHooks(){
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Ensure countdown container has structure-ready class
    const cd = $('#countdown');
    if (cd) cd.classList.add('countdown-wrap');
  }

  // Default games data (age-appropriate)
  const GAMES = [
    { title: 'Galaxy Runner', desc: 'Dash through the stars and dodge asteroids!', genre: 'Arcade', age: 10 },
    { title: 'Puzzle Portal', desc: 'Solve mind-bending portals and save the lab.', genre: 'Puzzle', age: 11 },
    { title: 'Robo Rally', desc: 'Program your bot to win the rally challenge.', genre: 'Strategy', age: 12 },
    { title: 'Pixel Painter', desc: 'Create pixel art masterpieces with friends.', genre: 'Creative', age: 10 }
  ];

  // On DOM ready
  window.addEventListener('DOMContentLoaded', ()=>{
    injectStyleHooks();

    const cdEl = $('#countdown');
    if (cdEl){
      // Start a 2 minute fun countdown by default
      startCountdown(cdEl, 120);
    }

    const listEl = $('#game-list');
    if (listEl){
      renderGames(listEl, GAMES);
    }
  });

})();
