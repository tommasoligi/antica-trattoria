const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  const p=(window.scrollY/h)*100;
  if(progress) progress.style.width=p+'%';
  const hero=document.getElementById('heroImg');
  const hills=document.getElementById('hillsImg');
  if(hero) hero.style.transform=`scale(1.08) translateY(${window.scrollY*0.12}px)`;
  if(hills) hills.style.transform=`translateY(${(window.scrollY-1800)*0.08}px) scale(1.1)`;
});
if(window.innerWidth>900){
  const cur=document.getElementById('cursor');
  let mx=0,my=0,cx=0,cy=0;
  window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  (function loop(){cx+=(mx-cx)*0.15;cy+=(my-cy)*0.15;if(cur)cur.style.transform=`translate(${cx-14}px,${cy-14}px)`;requestAnimationFrame(loop)})();
  document.querySelectorAll('a,.tab,.dish,.btn').forEach(el=>{
    el.addEventListener('mouseenter',()=>cur.classList.add('active'));
    el.addEventListener('mouseleave',()=>cur.classList.remove('active'));
  });
}
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.2}px,${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave',()=>btn.style.transform='translate(0,0)');
});
const dishes=[
{n:'Tagliatelle coi fagioli di Novilara De.Co.',d:'VERO - Piatto simbolo, fagiolo Solfì, pomodorino',p:'14€',c:'primi',badge:'DE.CO.',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=400'},
{n:'Piadina & Porchetta di Montefeltro',d:'Piadina tirata a mano, porchetta 6h',p:'9€',c:'secondi',badge:'FORNO',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400'},
{n:'Passatelli al brodo di cappone',d:'Tradizione romagnolo-marchigiana',p:'13€',c:'primi',badge:'BRODO',img:'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400'},
{n:'Pappardelle al cinghiale del Catria',d:'Cinghiale locale, ginepro',p:'16€',c:'primi',badge:'BRACE',img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400'},
{n:'Grigliata mista alla quercia',d:'Salsiccia, bombette, costine',p:'18€',c:'secondi',badge:'BRACE',img:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400'},
{n:'Zuppa Inglese della Maria 1972',d:'VERO - Ricetta originale',p:'6€',c:'dolci',badge:'1972',img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400'},
{n:'Brodetto di Pesaro',d:'13 pesci Adriatico',p:'22€',c:'secondi',badge:'MARE',img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400'},
{n:'Crescia & salumi',d:'Crescia calda, salame Fabriano',p:'12€',c:'secondi',badge:'TAGLIERE',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400'},
{n:'Tiramisù in tazza',d:'Mascarpone, caffè moka',p:'6€',c:'dolci',badge:'CASA',img:'https://images.unsplash.com/photo-1571877222312-a5b6a7d0c6b4?q=80&w=400'},
];
function render(filter='all'){
const grid=document.getElementById('menuGrid');
grid.innerHTML=dishes.filter(d=>filter==='all'||d.c===filter).map(d=>`
<div class="dish"><div><div class="top"><span>${d.badge} • ${d.c}</span><span>${d.p}</span></div><h3>${d.n}</h3><p>${d.d}</p></div><div class="price">${d.p}</div><div class="img-hover" style="background-image:url('${d.img}')"></div></div>`).join('');
}
render();
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
t.classList.add('active');render(t.dataset.filter);
if(navigator.vibrate) navigator.vibrate(10);
}));
window.addEventListener('scroll',()=>{
  let cur='';
  ['storia','menu','prenota'].forEach(id=>{
    const el=document.getElementById(id);
    if(el && window.scrollY>=el.offsetTop-200) cur=id;
  });
  document.querySelectorAll('nav.bottom a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur);
  });
});
function fakeBook(e){
e.preventDefault();
document.getElementById('bookMsg').style.display='block';
if(navigator.vibrate) navigator.vibrate([20,30,20]);
const wa=`Ciao Antica Trattoria, vorrei prenotare: ${document.querySelector('input[type=date]').value} - ${document.querySelector('select').value} - ${document.querySelectorAll('input')[0].value}`;
setTimeout(()=>window.open('https://wa.me/390721287210?text='+encodeURIComponent(wa),'_blank'),800);
return false;
}
