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

// Snacks mapping (1-Nov to 15-Nov) - some filled, others placeholders for Abdul Rahim PDF
const snacks = {
  "2025-11-01":"Samosa",
  "2025-11-02":"Vada Pav",
  "2025-11-03":"Spring Roll",
  "2025-11-04":"Paneer Pakora",
  "2025-11-05":"Fruit Salad",
  "2025-11-06":"TBD (Abdul Rahim PDF)",
  "2025-11-07":"TBD (Abdul Rahim PDF)",
  "2025-11-08":"TBD (Abdul Rahim PDF)",
  "2025-11-09":"TBD (Abdul Rahim PDF)",
  "2025-11-10":"TBD (Abdul Rahim PDF)",
  "2025-11-11":"TBD (Abdul Rahim PDF)",
  "2025-11-12":"TBD (Abdul Rahim PDF)",
  "2025-11-13":"TBD (Abdul Rahim PDF)",
  "2025-11-14":"TBD (Abdul Rahim PDF)",
  "2025-11-15":"TBD (Abdul Rahim PDF)"
};

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
  toggleThemeBtn.addEventListener('click',toggleTheme);
  surpriseBtn.addEventListener('click',surpriseMe);
  initTheme();
  initTypewriter();
  initRevealOnScroll();
  initSearch();
  wireDishClicks();
  // animate greeting every minute to update if crosses window
  setInterval(renderGreeting, 60_000);
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
    card.className = 'meal-card animate-slide-up';
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
        item.className = 'meal-item';
        item.innerHTML = `<strong>${formatKey(k)}</strong><span>${v || '—'}</span>`;
        list.appendChild(item);
        // staggered reveal
        setTimeout(()=>item.classList.add('show'), 80*(i+1));
      });
    }
    mealsContainer.appendChild(card);
  });
}

function hasMealData(obj){
  if(!obj) return false;
  return Object.values(obj).some(v=>v && String(v).trim() !== '');
}

function formatKey(k){
  return k.replace(/([A-Z])/g, ' $1').replace(/^./,s=>s.toUpperCase());
}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1)}

// Theme toggle
function toggleTheme(){
  const root = document.documentElement;
  if(root.classList.contains('dark')){
    root.classList.remove('dark');
    toggleThemeBtn.textContent = '🌙';
    localStorage.setItem('dnf-theme','light');
  } else {
    root.classList.add('dark');
    toggleThemeBtn.textContent = '☀️';
    localStorage.setItem('dnf-theme','dark');
  }
}

function initTheme(){
  const pref = localStorage.getItem('dnf-theme');
  if(pref === 'dark'){
    document.documentElement.classList.add('dark');
    toggleThemeBtn.textContent = '☀️';
  }
}

// Typewriter effect for title (adds class)
function initTypewriter(){
  const title = document.querySelector('.brand h1');
  title.classList.add('typewriter');
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
function confettiBurst(x,y){
  const count=24;const colors=['#ff3d81','#ffd100','#00e5ff','#7cffb2'];
  for(let i=0;i<count;i++){
    const el=document.createElement('div');
    el.className='confetti';
    el.style.position='fixed';el.style.left=`${x}px`;el.style.top=`${y}px`;
    el.style.width='8px';el.style.height='12px';el.style.background=colors[i%colors.length];el.style.opacity='0.95';el.style.zIndex=9999;
    document.body.appendChild(el);
    const dx=(Math.random()-0.5)*300;const dy=(Math.random()*-300)-60;const rot=(Math.random()*360);
    el.animate([{transform:`translate(0,0) rotate(0deg)`,opacity:1},{transform:`translate(${dx}px,${dy}px) rotate(${rot}deg)`,opacity:0}],{duration:1200+Math.random()*600,easing:'cubic-bezier(.2,.9,.3,1)'});
    setTimeout(()=>el.remove(),2000);
  }
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
  if(e.key.toLowerCase() === 't') toggleTheme();
});

// Add styles for confetti and modal dynamically (small convenience)
const styleNode = document.createElement('style');
styleNode.textContent = `
.confetti{border-radius:2px;will-change:transform,opacity}
.dnf-modal{position:fixed;inset:0;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;z-index:10000}
.dnf-modal .modal-card{background:var(--panel);padding:18px;border-radius:12px;min-width:260px;max-width:80%;box-shadow:0 20px 60px rgba(0,0,0,0.2)}
.dnf-modal .modal-close{position:absolute;right:18px;top:12px;border:0;background:transparent;font-size:22px;cursor:pointer}
`;
document.head.appendChild(styleNode);
