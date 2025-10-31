// Menu data from 2025-10-16 to 2025-10-31
const menu = {
  "2025-10-16":{
    breakfast:{hot:"Chole Bhature",acco:"",beverage:"Tea",cereals:"BANANA"},
    lunch:{roti:"Phulka",vegPrep:"CHANA MASALA",ricePrep:"Plain Rice",dal:"Dal Adrakhi"},
    dinner:{roti:"Phulka",vegPrep:"MIX VEG",ricePrep:"jeera rice",dal:"Tomato dal"}
  },
  "2025-10-17":{
    breakfast:{hot:"Allo Parataha",acco:"curd/pickel",beverage:"Tea",cereals:"Chocos"},
    lunch:{roti:"Phulka",vegPrep:"DRY CHANADAL SABJI",ricePrep:"",dal:"SAMBAR"},
    dinner:{roti:"Phulka",vegPrep:"GINGER PANEER",nonVegPrep:"GINGER EGG CURRY",ricePrep:"Plain Rice",dal:"Drumstrik Sambar"}
  },
  "2025-10-18":{
    breakfast:{hot:"Pancakes",acco:"Maple Syrup",beverage:"Coffee",cereals:"Cornflakes"},
    lunch:{roti:"Missi Roti",vegPrep:"Aloo Jeera",ricePrep:"Jeera Rice",dal:"Dal Tadka"},
    dinner:{roti:"Naan",vegPrep:"Paneer Butter Masala",ricePrep:"Peas Pulao",dal:""}
  },
  "2025-10-19":{
    breakfast:{hot:"Poha",acco:"Lemon",beverage:"Tea",cereals:"Fruit"},
    lunch:{roti:"Phulka",vegPrep:"Matar Paneer",ricePrep:"Plain Rice",dal:"Dal Makhani"},
    dinner:{roti:"Phulka",vegPrep:"Mix Sabzi",ricePrep:"Veg Biryani",dal:"Rasam"}
  },
  "2025-10-20":{
    breakfast:{hot:"Idli Sambhar",acco:"Chutney",beverage:"Filter Coffee",cereals:"Banana"},
    lunch:{roti:"Tawa Roti",vegPrep:"Bhindi Masala",ricePrep:"Lemon Rice",dal:"Toor Dal"},
    dinner:{roti:"Phulka",vegPrep:"Aloo Gobi",ricePrep:"Plain Rice",dal:"Tomato Dal"}
  },
  "2025-10-21":{
    breakfast:{hot:"French Toast",acco:"Syrup",beverage:"Tea",cereals:"Granola"},
    lunch:{roti:"Phulka",vegPrep:"Chole",ricePrep:"Pulao",dal:"Dal Palak"},
    dinner:{roti:"Phulka",vegPrep:"Soya Chaap",ricePrep:"Jeera Rice",dal:"Dal Fry"}
  },
  "2025-10-22":{
    breakfast:{hot:"Upma",acco:"Coconut Chutney",beverage:"Tea",cereals:"Fruit"},
    lunch:{roti:"Phulka",vegPrep:"Aloo Matar",ricePrep:"Steamed Rice",dal:"Dal"},
    dinner:{roti:"Paratha",vegPrep:"Baingan Bharta",ricePrep:"Plain Rice",dal:"Sambar"}
  },
  "2025-10-23":{
    breakfast:{hot:"Masala Omelette",acco:"Toast",beverage:"Coffee",cereals:"Muesli"},
    lunch:{roti:"Phulka",vegPrep:"Kadai Paneer",ricePrep:"Peas Pulao",dal:"Dal Tadka"},
    dinner:{roti:"Phulka",vegPrep:"Gobi Manchurian",ricePrep:"Fried Rice",dal:""}
  },
  "2025-10-24":{
    breakfast:{hot:"Dosa",acco:"Sambar",beverage:"Filter Coffee",cereals:"Banana"},
    lunch:{roti:"Naan",vegPrep:"Palak Paneer",ricePrep:"Jeera Rice",dal:"Dal Makhani"},
    dinner:{roti:"Phulka",vegPrep:"Mixed Veg Curry",ricePrep:"Lemon Rice",dal:"Tomato Dal"}
  },
  "2025-10-25":{
    breakfast:{hot:"Bagel & Cream Cheese",acco:"Jam",beverage:"Espresso",cereals:"Granola"},
    lunch:{roti:"Phulka",vegPrep:"Sambar Veg",ricePrep:"Plain Rice",dal:"Sambar"},
    dinner:{roti:"Phulka",vegPrep:"Chili Paneer",ricePrep:"Fried Rice",dal:""}
  },
  "2025-10-26":{
    breakfast:{hot:"Aloo Paratha",acco:"Yogurt",beverage:"Tea",cereals:"Mango"},
    lunch:{roti:"Phulka",vegPrep:"Dal Palak",ricePrep:"Jeera Rice",dal:"Dal"},
    dinner:{roti:"Naan",vegPrep:"Butter Chicken",nonVegPrep:"Chicken Curry",ricePrep:"Peas Pulao",dal:""}
  },
  "2025-10-27":{
    breakfast:{hot:"Waffles",acco:"Berries",beverage:"Coffee",cereals:"Cornflakes"},
    lunch:{roti:"Phulka",vegPrep:"Rajma",ricePrep:"Steamed Rice",dal:""},
    dinner:{roti:"Phulka",vegPrep:"Methi Malai Paneer",ricePrep:"Jeera Rice",dal:"Dal Tadka"}
  },
  "2025-10-28":{
    breakfast:{hot:"Idli",acco:"Chutney",beverage:"Tea",cereals:"Papaya"},
    lunch:{roti:"Phulka",vegPrep:"Bhindi Fry",ricePrep:"Lemon Rice",dal:"Toor Dal"},
    dinner:{roti:"Paratha",vegPrep:"Aloo Palak",ricePrep:"Jeera Rice",dal:"Rasam"}
  },
  "2025-10-29":{
    breakfast:{hot:"Cheese Omelette",acco:"Toast",beverage:"Coffee",cereals:"Apple"},
    lunch:{roti:"Phulka",vegPrep:"Egg Curry",ricePrep:"Plain Rice",dal:"Sambar"},
    dinner:{roti:"Phulka",vegPrep:"Paneer Do Pyaza",ricePrep:"Peas Pulao",dal:"Dal Makhani"}
  },
  "2025-10-30":{
    breakfast:{hot:"Porridge",acco:"Honey",beverage:"Green Tea",cereals:"Oats"},
    lunch:{roti:"Phulka",vegPrep:"Mixed Veg",ricePrep:"Veg Biryani",dal:"Dal"},
    dinner:{roti:"Phulka",vegPrep:"Soya Masala",ricePrep:"Jeera Rice",dal:"Tomato Dal"}
  },
  "2025-10-31":{
    breakfast:{hot:"Halloween Pancakes",acco:"Candy",beverage:"Chocolate",cereals:"TrickCereal"},
    lunch:{roti:"Phulka",vegPrep:"Spooky Stew",ricePrep:"Pumpkin Rice",dal:"Lentil Brew"},
    dinner:{roti:"Phulka",vegPrep:"Ghostly Curry",ricePrep:"Jeera Rice",dal:"Mysterious Dal"}
  }
};
// Nov 1 - Nov 15 menu (breakfast + lunch + dinner + snacks)
const novMenu = {
  "2025-11-01":{
    breakfast:{hot:"Aloo Paratha",acco:"Curd & Pickle",beverage:"Coffee",cereals:"Chocos"},
    lunch:{roti:"Phulka",vegPrep:"Punjabi Chole",nonVegPrep:"Goan Egg Curry",ricePrep:"Soya Pulao",dal:""},
    dinner:{roti:"Phulka",vegPrep:"Punjabi Chole",ricePrep:"Soya Pulao",dal:""},
    snacks:"Samosa"
  },
  "2025-11-02":{
    breakfast:{hot:"Idli Wada",acco:"Coconut Chutney / Sambar",beverage:"Tea",cereals:"Cornflakes"},
    lunch:{roti:"Tinkoni Partha",vegPrep:"—",nonVegPrep:"Chicken Biryani",ricePrep:"Paneer Biryani",dal:""},
    dinner:{roti:"Phulka",vegPrep:"—",ricePrep:"Paneer Biryani",dal:""},
    snacks:"Vada Pav"
  },
  "2025-11-03":{
    breakfast:{hot:"Masala Dosa",acco:"Tomato Chutney and Sambar",beverage:"Tea",cereals:"Cornflakes"},
    lunch:{roti:"Phulka",vegPrep:"Bhendi Masala",nonVegPrep:"—",ricePrep:"Coriander Rice",dal:""},
    dinner:{roti:"Phulka",vegPrep:"Bhendi Masala",ricePrep:"Coriander Rice",dal:""},
    snacks:"Spring Roll"
  },
  "2025-11-04":{
    breakfast:{hot:"Veg & Palli Poha",acco:"—",beverage:"Tea",cereals:"Watermelon"},
    lunch:{roti:"Phulka",vegPrep:"Baigan Masala (Bhgar a Bainga)",nonVegPrep:"Bhurji Masala",ricePrep:"Herbal Pilaf",dal:""},
    dinner:{roti:"Phulka",vegPrep:"Baigan Masala",ricePrep:"Herbal Pilaf",dal:""},
    snacks:"Paneer Pakora"
  },
  "2025-11-05":{
    breakfast:{hot:"Carrot Mint Uttapam",acco:"Tomato Chutney & Sambar",beverage:"Tea",cereals:"Cornflakes"},
    lunch:{roti:"Phulka",vegPrep:"Kadla Curry (Kerala Style)",nonVegPrep:"—",ricePrep:"Veg Biryani",dal:""},
    dinner:{roti:"Phulka",vegPrep:"Kadla Curry",ricePrep:"Veg Biryani",dal:""},
    snacks:"Fruit Salad"
  },
  // 6-15 placeholders — fill from Abdul Rahim PDF when available
  "2025-11-06":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{roti:"TBD",vegPrep:"TBD",nonVegPrep:"TBD",ricePrep:"TBD",dal:"TBD"},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-07":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-08":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-09":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-10":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-11":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-12":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-13":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-14":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"},
  "2025-11-15":{breakfast:{hot:"TBD (Abdul Rahim)",acco:"TBD",beverage:"TBD",cereals:"TBD"},lunch:{},dinner:{},snacks:"TBD (Abdul Rahim)"}
};

// merge novMenu into main menu
Object.assign(menu, novMenu);

// Meal windows
const windows = {
  breakfast: {start:6, end:10},
  lunch: {start:12, end:14},
  dinner: {start:19, end:21}
};

// DOM refs
const datePicker = document.getElementById('datePicker');
const mealsContainer = document.getElementById('meals');
const greetingEl = document.getElementById('greeting');
const toggleThemeBtn = document.getElementById('toggleTheme');
const surpriseBtn = document.getElementById('surpriseBtn');

// Init
function init(){
  const today = new Date();
  const iso = toISODate(today);
  if(!menu[datePicker.value]) datePicker.value = iso in menu ? iso : Object.keys(menu)[0];
  renderForDate(datePicker.value);
  renderGreeting();
  datePicker.addEventListener('change',()=>renderForDate(datePicker.value));
  // theme wiring handled in initTheme(); also wire CTA button
  surpriseBtn.addEventListener('click',surpriseMe);
  initTheme();
  const themeCTABtn = document.getElementById('themeCTA');
  if(themeCTABtn) themeCTABtn.addEventListener('click', cycleTheme);
  initTypewriter();
  initRevealOnScroll();
  initSearch();
  wireDishClicks();
  // animate greeting every minute to update if crosses window
  setInterval(renderGreeting, 60_000);
}

// Attach tilt handlers to meal cards (call after render)
function attachCardTilt(){
  if(!mealsContainer) return;
  if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const cards = mealsContainer.querySelectorAll('.meal-card');
  cards.forEach(card=>{
    if(card.dataset.tiltAttached) return;
    card.dataset.tiltAttached = '1';
    card.addEventListener('mousemove',(ev)=>{
      const r = card.getBoundingClientRect();
      const cx = r.left + r.width/2; const cy = r.top + r.height/2;
      const dx = (ev.clientX - cx) / (r.width/2); const dy = (ev.clientY - cy) / (r.height/2);
      const ry = (-dx * 6).toFixed(2); const rx = (dy * 6).toFixed(2);
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave',()=>{ card.style.transform = 'none'; });
  });
}

function toISODate(d){
  const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

function renderGreeting(){
  const now = new Date();
  const hour = now.getHours();
  const isWithin = (w)=> hour >= w.start && hour < w.end;
  let msg = '';
  if(isWithin(windows.breakfast)){
    msg = `🥞 Good morning! It\'s time for breakfast!`;
  } else if(isWithin(windows.lunch)){
    msg = `🍛 It\'s lunchtime! Here\'s what\'s cooking today:`;
  } else if(isWithin(windows.dinner)){
    msg = `🍽 Dinner is served! Enjoy your meal!`;
  } else {
    msg = `⏰ No meal right now. Come back later!`;
  }
  greetingEl.innerHTML = `<div class=\"greet-msg animate-pop\"><span class=\"emoji\">${msg.split(' ')[0]}</span><span>${msg}</span></div>`;
}

function renderForDate(dateStr){
  const dayMenu = menu[dateStr];
  mealsContainer.innerHTML = '';
  if(!dayMenu){
    mealsContainer.innerHTML = `<div class=\"meal-empty\">No menu for this date</div>`;
    return;
  }
  ['breakfast','lunch','dinner'].forEach((meal, idx)=>{
    const data = dayMenu[meal] || {};
  const card = document.createElement('article');
  card.className = 'meal-card animate-slide-up reveal-on-scroll';
    if(idx%2===0) card.classList.add('animate-fade');
    card.innerHTML = `
      <h3>${capitalize(meal)}</h3>
      <div class=\"kicker\">${meal} menu for ${dateStr}</div>
      <div class=\"meal-list\"></div>
      <div class=\"plate\"></div>
    `;
    const list = card.querySelector('.meal-list');
    // If object empty or all values empty -> show No meal planned
    if(!hasMealData(data)){
      const em = document.createElement('div');
      em.className = 'meal-empty';
      em.textContent = 'No meal planned today';
      list.appendChild(em);
    } else {
      Object.entries(data).forEach(([k,v],i)=>{
        const item = document.createElement('div');
        item.className = 'meal-item ripple-wrap';
        // add shimmer-ready dish name
        item.innerHTML = `<strong class="dish-name">${formatKey(k)}</strong><span>${v || '—'}</span>`;
        list.appendChild(item);
        // staggered reveal
        setTimeout(()=>item.classList.add('show'), 80*(i+1));
      });
    }
    mealsContainer.appendChild(card);
  });
  // attach tilt interactions after cards are rendered
  attachCardTilt();
}

function hasMealData(obj){
  if(!obj) return false;
  return Object.values(obj).some(v=>v && String(v).trim() !== '');
}

function formatKey(k){
  return k.replace(/([A-Z])/g, ' $1').replace(/^./,s=>s.toUpperCase());
}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1)}

// Theme management: multiple presets
const themeSelect = document.getElementById('themeSelect');
const THEMES = ['magical','light','dark','forest','ocean','retro'];

function applyTheme(name){
  if(!name) name = 'magical';
  // apply via data-theme attribute for CSS to pick up
  document.documentElement.setAttribute('data-theme', name);
  // update selector UI
  if(themeSelect) themeSelect.value = name;
  // persist
  try{ localStorage.setItem('dnf-theme', name); }catch(e){}
  // update quote for this theme
  updateThemeQuote(name);
}

function cycleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'magical';
  const idx = THEMES.indexOf(current);
  const next = THEMES[(idx+1) % THEMES.length];
  applyTheme(next);
}

function initTheme(){
  // wire selector if present
  if(themeSelect){
    themeSelect.addEventListener('change',(e)=>applyTheme(e.target.value));
  }
  if(toggleThemeBtn){
    toggleThemeBtn.addEventListener('click',cycleTheme);
  }
  // load persisted
  const pref = localStorage.getItem('dnf-theme');
  applyTheme(pref || 'magical');
}

/* Theme quotes - rotate per-theme */
const THEME_QUOTES = {
  magical: ["May your plate be ever full.", "A little sprinkle of magic in every bite."],
  light: ["Bright mornings and warm breakfasts.", "Savor the day, one bite at a time."],
  dark: ["Dinner whispers in candlelight.", "Good food, quiet evenings."],
  forest: ["Freshness from the heart of the forest.", "Leaf, root, and herb—nature's kitchen."],
  ocean: ["Waves on the plate, calm in the soul.", "Sea-kissed flavors to brighten the day."],
  retro: ["Classic flavors, timeless comfort.", "A taste that takes you back."],
  book: ["Pages and porridge: comfort for the mind.", "Brew a story, taste the tale."]
};

const quoteEl = document.getElementById('themeQuote');
let _quoteTimer = null;

function updateThemeQuote(theme){
  const arr = THEME_QUOTES[theme] || THEME_QUOTES['magical'];
  const text = arr[Math.floor(Math.random()*arr.length)];
  if(quoteEl){
    quoteEl.textContent = `"${text}"`;
    quoteEl.classList.add('animate-pop');
    setTimeout(()=>quoteEl.classList.remove('animate-pop'),700);
  }
  // rotate quotes every 6s
  if(_quoteTimer) clearInterval(_quoteTimer);
  _quoteTimer = setInterval(()=>{
    const tarr = THEME_QUOTES[document.documentElement.getAttribute('data-theme')] || THEME_QUOTES['magical'];
    const txt = tarr[Math.floor(Math.random()*tarr.length)];
    if(quoteEl) quoteEl.textContent = `"${txt}"`;
  }, 6000);
}

// Typewriter effect for title (adds class)
function initTypewriter(){
  const title = document.querySelector('.brand h1');
  title.classList.add('typewriter');
  // small bounce/stretch on load for polish
  title.classList.add('load-bounce');
  setTimeout(()=>title.classList.remove('load-bounce'), 1200);
}

// IntersectionObserver reveal helper
function initRevealOnScroll(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal-on-scroll').forEach(el=>obs.observe(el));
}

// Wire dish-click to show modal & confetti
function wireDishClicks(){
  // delegate clicks for dish-cells in tables
  document.body.addEventListener('click', (ev)=>{
    const td = ev.target.closest('.dish-cell');
    if(!td) return;
    // show modal with full details
    showDishModal(td.textContent || td.innerText || 'Dish');
    // small confetti effect
    confettiBurst(ev.clientX, ev.clientY);
  });
}

// simple confetti (vanilla)
// canvas-based confetti emitter (better performance)
let _confetti = {
  inited: false,
  canvas: null,
  ctx: null,
  particles: [],
  raf: null,
  maxParticles: 600,
};

function _initConfettiCanvas(){
  if(_confetti.inited) return;
  const c = document.createElement('canvas');
  c.id = 'dnf-confetti-canvas';
  c.style.position = 'fixed';
  c.style.left = '0';
  c.style.top = '0';
  c.style.width = '100%';
  c.style.height = '100%';
  c.style.pointerEvents = 'none';
  c.style.zIndex = 9998;
  document.body.appendChild(c);
  const ctx = c.getContext('2d');
  function resize(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  _confetti.canvas = c; _confetti.ctx = ctx; _confetti.inited = true;
}

function _spawnConfetti(x,y,count=28,colors=['#ff3d81','#ffd100','#00e5ff','#7cffb2']){
  _initConfettiCanvas();
  const now = Date.now();
  for(let i=0;i<count;i++){
    if(_confetti.particles.length >= _confetti.maxParticles) break;
    const angle = (Math.random() * Math.PI) - (Math.PI/2);
    const speed = (Math.random() * 6) + 2;
    const vx = Math.cos(angle) * speed * (Math.random()*1.2 + 0.2);
    const vy = Math.sin(angle) * speed * (Math.random()*1.2 + 0.2) - (Math.random()*4);
    const size = (Math.random() * 8) + 6;
    const color = colors[Math.floor(Math.random()*colors.length)];
    _confetti.particles.push({
      x: x, y: y,
      vx: vx, vy: vy,
      size: size,
      color: color,
      rot: Math.random()*360,
      vr: (Math.random()-0.5)*12,
      ttl: 1600 + Math.random()*900,
      born: now,
      drag: 0.995 + Math.random()*0.003,
      gravity: 0.06 + Math.random()*0.08,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }
  if(!_confetti.raf) _confetti.raf = requestAnimationFrame(_runConfetti);
}

function _runConfetti(){
  const ctx = _confetti.ctx; const canvas = _confetti.canvas; if(!ctx) return;
  const now = Date.now();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const p = _confetti.particles;
  for(let i=p.length-1;i>=0;i--){
    const part = p[i];
    const age = now - part.born;
    if(age > part.ttl){ p.splice(i,1); continue; }
    // physics
    part.vx *= part.drag; part.vy *= part.drag; part.vy += part.gravity;
    part.x += part.vx; part.y += part.vy; part.rot += part.vr;
    const lifeRatio = 1 - (age / part.ttl);
    ctx.save();
    ctx.translate(part.x, part.y);
    ctx.rotate((part.rot * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, lifeRatio);
    ctx.fillStyle = part.color;
    if(part.shape === 'rect'){
      ctx.fillRect(-part.size/2, -part.size/2, part.size, part.size*1.4);
    } else {
      ctx.beginPath(); ctx.arc(0,0, part.size*0.6, 0, Math.PI*2); ctx.fill();
    }
    ctx.restore();
  }
  if(p.length){
    _confetti.raf = requestAnimationFrame(_runConfetti);
  } else {
    cancelAnimationFrame(_confetti.raf); _confetti.raf = null;
  }
}

function confettiBurst(x,y){
  // x,y should be client coordinates; spawn a few bursts with small randomization
  const rect = document.documentElement.getBoundingClientRect();
  const cx = Math.max(0, Math.min(window.innerWidth, x || (rect.width/2)));
  const cy = Math.max(0, Math.min(window.innerHeight, y || (rect.height/3)));
  _spawnConfetti(cx, cy, 28);
  // a follow-up smaller burst for fullness
  setTimeout(()=>_spawnConfetti(cx + (Math.random()-0.5)*40, cy + (Math.random()-0.5)*40, 16), 80);
}

// Simple modal for dish details
function showDishModal(text){
  let modal = document.getElementById('dnf-modal');
  if(!modal){
    modal = document.createElement('div');modal.id='dnf-modal';modal.className='dnf-modal';
    modal.innerHTML='<div class="modal-card"><button class="modal-close">×</button><div class="modal-body"></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click',()=>modal.remove());
    modal.addEventListener('click',(e)=>{ if(e.target===modal) modal.remove(); });
  }
  modal.querySelector('.modal-body').textContent = text;
}

// Search filter
function initSearch(){
  const input = document.getElementById('searchInput');
  if(!input) return;
  input.addEventListener('input',(e)=>{
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll('.dish-cell').forEach(td=>{
      const txt = (td.textContent||td.innerText||'').toLowerCase();
      td.style.display = q && !txt.includes(q) ? 'none' : '';
    });
  });
}

// Surprise me
function surpriseMe(){
  // pick random date -> random meal -> random property
  const dates = Object.keys(menu);
  const d = menu[dates[Math.floor(Math.random()*dates.length)]];
  const meals = ['breakfast','lunch','dinner'];
  const mealKey = meals[Math.floor(Math.random()*meals.length)];
  const meal = d[mealKey] || {};
  const props = Object.keys(meal).filter(k=>meal[k] && meal[k].trim() !== '');
  if(props.length===0){
    showSurprise('No planned dish to surprise with');
    return;
  }
  const p = props[Math.floor(Math.random()*props.length)];
  const text = `${capitalize(mealKey)} — ${formatKey(p)}: ${meal[p]}`;
  showSurprise(text);
}

function showSurprise(text){
  const node = document.createElement('div');
  node.className='surprise animate-pop';
  node.textContent = text;
  document.body.appendChild(node);
  setTimeout(()=>node.classList.add('animate-pop'),10);
  setTimeout(()=>node.remove(),3000);
}

// On load
document.addEventListener('DOMContentLoaded', init);

// Accessibility: keyboard for surprise (S) and theme (T)
document.addEventListener('keydown',(e)=>{
  if(e.key.toLowerCase() === 's') surpriseMe();
  if(e.key.toLowerCase() === 't') cycleTheme();
});

/* Scroll progress, header shrink, FAB and ripple/parallax interactions */
const scrollProgress = document.getElementById('scrollProgress');
const headerEl = document.querySelector('.site-header');
const toTopBtn = document.getElementById('toTop');
const mealsEl = document.getElementById('meals');

function onScrollUpdate(){
  const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  const winH = window.innerHeight;
  const sc = window.scrollY || window.pageYOffset;
  const pct = Math.min(100, Math.max(0, (sc / (docH - winH)) * 100));
  if(scrollProgress) scrollProgress.style.width = pct + '%';
  // header shrink
  if(headerEl) headerEl.classList.toggle('scrolled', sc > 24);
  // show fab after some scroll
  if(toTopBtn){
    if(sc > (winH * 0.25)) toTopBtn.classList.add('show'); else toTopBtn.classList.remove('show');
  }
}
window.addEventListener('scroll', onScrollUpdate, {passive:true});
onScrollUpdate();

if(toTopBtn){
  toTopBtn.addEventListener('click', ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

// Ripple effect for buttons and meal items
document.body.addEventListener('click',(e)=>{
  const el = e.target.closest('.btn, .meal-item');
  if(!el) return;
  const rect = el.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const size = Math.max(rect.width, rect.height) * 0.6;
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
  el.appendChild(ripple);
  setTimeout(()=>ripple.remove(),700);
});

// Parallax tilt on meals container (desktop only)
if(mealsEl && window.matchMedia('(hover: hover) and (pointer: fine)').matches){
  mealsEl.addEventListener('mousemove',(ev)=>{
    const r = mealsEl.getBoundingClientRect();
    const cx = r.left + r.width/2; const cy = r.top + r.height/2;
    const dx = (ev.clientX - cx) / r.width; const dy = (ev.clientY - cy) / r.height;
    const rx = (dy * 4); const ry = (dx * -6);
    mealsEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  mealsEl.addEventListener('mouseleave',()=>{ mealsEl.style.transform = 'none'; });
}

// Add styles for confetti and modal dynamically (small convenience)
const styleNode = document.createElement('style');
styleNode.textContent = `
.confetti{border-radius:2px;will-change:transform,opacity}
.dnf-modal{position:fixed;inset:0;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;z-index:10000}
.dnf-modal .modal-card{background:var(--panel);padding:18px;border-radius:12px;min-width:260px;max-width:80%;box-shadow:0 20px 60px rgba(0,0,0,0.2)}
.dnf-modal .modal-close{position:absolute;right:18px;top:12px;border:0;background:transparent;font-size:22px;cursor:pointer}
`;
document.head.appendChild(styleNode);
