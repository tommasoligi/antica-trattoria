const cur=document.getElementById('cursor');
let mx=0,my=0,cx=0,cy=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function loop(){cx+=(mx-cx)*0.15;cy+=(my-cy)*0.15;cur.style.transform=`translate(${cx-12}px,${cy-12}px)`;requestAnimationFrame(loop)})();
document.querySelectorAll('a,.tab,.dish,.btn').forEach(el=>{
el.addEventListener('mouseenter',()=>cur.classList.add('active'));
el.addEventListener('mouseleave',()=>cur.classList.remove('active'));
});
window.addEventListener('scroll',()=>{
const y=window.scrollY;
const h=document.getElementById('heroImg');
const hi=document.getElementById('hillsImg');
if(h) h.style.transform=`scale(1.1) translateY(${y*0.15}px)`;
if(hi) hi.style.transform=`translateY(${(y-2000)*0.1}px) scale(1.1)`;
});
const dishes=[
{n:'Tagliatelle coi fagioli di Novilara',d:'De.Co. di Pesaro, fagiolo Solfì, pomodorino confit',p:'14€',c:'primi',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=400'},
{n:'Piadina calda & Porchetta',d:'Piadina tirata a mano, porchetta di Monte',p:'9€',c:'secondi',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400'},
{n:'Passatelli al brodo',d:'Passatelli romagnoli, brodo di cappone',p:'13€',c:'primi',img:'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400'},
{n:'Pappardelle al cinghiale',d:'Cinghiale del Catria, ginepro',p:'16€',c:'primi',img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400'},
{n:'Grigliata mista',d:'Salsiccia, costine, bombette, brace di quercia',p:'18€',c:'secondi',img:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400'},
{n:'Zuppa Inglese della Maria',d:'Ricetta originale 1972, alchermes',p:'6€',c:'dolci',img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400'},
{n:'Brodetto di Pesaro',d:'13 pesci, pomodoro, pane abbrustolito',p:'22€',c:'secondi',img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400'},
{n:'Crescia & salumi',d:'Crescia calda, salame di Fabriano',p:'12€',c:'secondi',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400'},
{n:'Tiramisù in tazza',d:'Mascarpone, caffè della moka',p:'6€',c:'dolci',img:'https://images.unsplash.com/photo-1571877222312-a5b6a7d0c6b4?q=80&w=400'},
];
function render(filter='all'){
const grid=document.getElementById('menuGrid');
grid.innerHTML=dishes.filter(d=>filter==='all'||d.c===filter).map(d=>`
<div class="dish"><div><div class="top"><span>${d.c}</span><span>De.Co.</span></div><h3>${d.n}</h3><p>${d.d}</p></div><div><div class="price">${d.p}</div><div class="img-hover" style="background-image:url('${d.img}')"></div></div></div>`).join('');
}
render();
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
t.classList.add('active');render(t.dataset.filter);
}));
function fakeBook(e){e.preventDefault();document.getElementById('bookMsg').style.display='block';return false;}
