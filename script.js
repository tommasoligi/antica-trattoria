const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  const p=(window.scrollY/h)*100;
  if(progress) progress.style.width=p+'%';
  const hero=document.getElementById('heroImg');
  if(hero) hero.style.transform=`scale(1.05) translateY(${window.scrollY*0.08}px)`;
});
const menuData=[
{c:'antipasti',n:'Fagioli Con Bruschetta',p:'',d:'Antipasti'},
{c:'antipasti',n:'Prosciutto',p:'',d:''},
{c:'antipasti',n:'Antipasto Misto',p:'',d:'Prosciutto, lonza, salame, formaggio'},
{c:'antipasti',n:'Antipasto Contadino',p:'',d:'Olive, carciofi, sottolio, salumi, formaggio'},
{c:'antipasti',n:'Insalata Nizzarda',p:'',d:''},
{c:'antipasti',n:'Prosciutto E Melone',p:'',d:''},
{c:'antipasti',n:'Bresaola, Rucola E Grana',p:'',d:''},
{c:'antipasti',n:'Caprese',p:'',d:''},
{c:'antipasti',n:'Grande Antipasto',p:'10,00 €',d:'Salumi, formaggi, sott\'olio'},
{c:'primi',n:'Tagliatelle Al Ragù O Funghi',p:'9,00 €',d:'Primi'},
{c:'primi',n:'Tagliatelle Bianche Con Funghi Misti E Porcini',p:'12,00 €',d:''},
{c:'primi',n:'Gnocchi All\'anatra',p:'10,00 €',d:''},
{c:'primi',n:'Pappardelle Alla Lepre',p:'10,00 €',d:''},
{c:'primi',n:'Tortellini Al Ragù O Pasticciati',p:'12,00 €',d:''},
{c:'primi',n:'Penne All\'arrabbiata',p:'',d:''},
{c:'primi',n:'Tagliatelle Con Fagioli',p:'',d:'Piatto simbolo'},
{c:'primi',n:'Tagliatelle Al Ragù',p:'',d:''},
{c:'primi',n:'Tagliatelle Con Piselli',p:'',d:''},
{c:'primi',n:'Tagliatelle Ai Funghi',p:'',d:''},
{c:'primi',n:'Passatello Alla Campagnola',p:'',d:''},
{c:'primi',n:'Ravioli Burro E Salvia / Al Ragù / Pasticciati / Boscaiola',p:'',d:''},
{c:'primi',n:'Tortellini Alla Boscaiola',p:'',d:''},
{c:'primi',n:'Strozzapreti All\' Antica Trattoria',p:'',d:'Pasticciati, funghi e salsiccia'},
{c:'primi',n:'Penne Alla Vodka',p:'',d:''},
{c:'secondi',n:'Carne Al Forno',p:'13,00 €',d:'Coniglio, pollo, faraona'},
{c:'secondi',n:'Carne Alla Brace',p:'12,00 €',d:'Salsiccia, costine, spiedini, coppa di maiale'},
{c:'secondi',n:'Tagliata Di Manzo 400/450g',p:'20,00 €',d:''},
{c:'secondi',n:'Bistecca Di Manzo 400/500g',p:'18,00 €',d:''},
{c:'secondi',n:'Agnello Alla Brace',p:'13,00 €',d:''},
{c:'secondi',n:'Misto Di Carne Alla Brace',p:'',d:'Salsiccia, costine, spiedino, maiale'},
{c:'secondi',n:'Misto Di Carne Al Forno',p:'',d:'Coniglio in porchetta, pollo, faraona'},
{c:'secondi',n:'Salsiccia N.3 pezzi / Braciola / Costarelle N.4',p:'',d:''},
{c:'secondi',n:'Formaggi Misti / Pecorino Nostrano',p:'',d:'Formaggi'},
{c:'contorni',n:'Insalata',p:'4,00 €',d:''},
{c:'contorni',n:'Gratin',p:'5,00 €',d:'Pomodori, melanzane, zucchine, peperoni, cipolle'},
{c:'contorni',n:'Patate Al Forno E Fritte',p:'4,50 €',d:''},
{c:'contorni',n:'Verdura Cotta (Bietola)',p:'4,50 €',d:''},
{c:'dolci',n:'Tiramisù',p:'4,50 €',d:''},
{c:'dolci',n:'Ciambellone',p:'4,50 €',d:''},
{c:'dolci',n:'Crostata',p:'4,50 €',d:''},
{c:'dolci',n:'Tartufo Bianco/Nero',p:'4,50 €',d:''},
{c:'dolci',n:'Sorbetto',p:'4,00 €',d:'Caffè, limone, pistacchio o mascarpone'},
{c:'dolci',n:'Panna Cotta',p:'4,50 €',d:''},
{c:'dolci',n:'Semifreddo Al Torroncino E Scaglie Di Cioccolato',p:'5,00 €',d:''},
{c:'speciali',n:'Trippa',p:'Giovedì',d:'Speciale Giovedì'},
{c:'speciali',n:'Oca Al Forno',p:'Giovedì',d:''},
{c:'speciali',n:'Polenta Con Funghi O Fagioli',p:'Giovedì',d:''},
{c:'speciali',n:'Baccalà',p:'Ven / Sab',d:'Venerdì e Sabato'},
{c:'speciali',n:'Fegatello Di Maiale Alla Griglia',p:'Ven / Sab',d:''},
{c:'speciali',n:'Solo Piada',p:'1,50 €',d:'Coperto con piada e pizza rustica'},
];
const reviews=[
{t:'★★★★★',p:'Cucina casalinga vera, porzioni abbondanti e prezzi onesti. Le tagliatelle al ragù sono come le faceva mia nonna.',a:'Marco R. • 2 settimane fa'},
{t:'★★★★★',p:'Sono 20 anni che vengo qui a Sant\'Andrea. Carne alla brace spettacolare, tagliata morbidissima.',a:'Laura B. • 1 mese fa'},
{t:'★★★★☆',p:'Locale semplice, senza fronzoli, ma si mangia benissimo. Gnocchi all\'anatra da urlo.',a:'Giovanni P. • 3 settimane fa'},
{t:'★★★★★',p:'Pranzo della domenica perfetto. Antipasto misto enorme, pappardelle alla lepre super. Conto 25€ a testa.',a:'Sara M. • 1 settimana fa'},
{t:'★★★★★',p:'Se cercate cucina marchigiana autentica, è qui. Trippa del giovedì da non perdere.',a:'Andrea F. • 2 mesi fa'},
{t:'★★★★☆',p:'Trattoria di una volta, travi in legno, tovaglie a quadri. Baccalà del venerdì ottimo.',a:'Elisa T. • 1 mese fa'},
{t:'★★★★★',p:'Grande antipasto da 10€ vale da solo il viaggio. Salumi nostrani, formaggi, sottoli.',a:'Paolo C. • 3 giorni fa'},
{t:'★★★★★',p:'Posto tranquillo sulle colline di Fano, vista bellissima. Ideale per pranzi in famiglia.',a:'Francesca L. • 5 giorni fa'},
];
function makeCard(d){
  const price = d.p ? `<span>${d.p}</span>` : '<span></span>';
  return `<div class="dish" data-cat="${d.c}"><div><div class="top"><span>${d.c}</span>${price}</div><h3>${d.n}</h3><p>${d.d}</p></div><div class="price">${d.p}</div></div>`;
}
function renderMenu(filter='all'){
  const grid=document.getElementById('menuGrid');
  grid.innerHTML=menuData.filter(d=>filter==='all'||d.c===filter).map(makeCard).join('');
}
function renderReviews(){
  const marquee=document.getElementById('reviewsMarquee');
  const double=[...reviews,...reviews];
  marquee.innerHTML=double.map(r=>`<div class="review-card"><div class="stars">${r.t}</div><p>"${r.p}"</p><small>${r.a}</small></div>`).join('');
}
renderMenu();renderReviews();
document.querySelectorAll('#menu .tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('#menu .tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');renderMenu(t.dataset.filter);
  if(navigator.vibrate) navigator.vibrate(10);
}));
function fakeBook(e){
e.preventDefault();
document.getElementById('bookMsg').style.display='block';
window.location.href='tel:+390721885138';
return false;
}
