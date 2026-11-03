const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  const p=(window.scrollY/h)*100;
  if(progress) progress.style.width=p+'%';
});
const antipasti=[
{n:'Fagioli Con Bruschetta',d:'',p:''},
{n:'Prosciutto',d:'',p:''},
{n:'Antipasto Misto',d:'Prosciutto, lonza, salame, formaggio',p:''},
{n:'Antipasto Contadino',d:'Olive, carciofi, sottolio, salumi, formaggio',p:''},
{n:'Insalata Nizzarda',d:'',p:''},
{n:'Prosciutto E Melone',d:'',p:''},
{n:'Bresaola, Rucola E Grana',d:'',p:''},
{n:'Caprese',d:'',p:''},
{n:'Grande Antipasto',d:'Salumi, formaggi, sott\'olio',p:'10,00 €'},
];
const primi=[
{n:'Tagliatelle Al Ragù O Funghi',d:'',p:'9,00 €'},
{n:'Tagliatelle Bianche Con Funghi Misti E Porcini',d:'',p:'12,00 €'},
{n:'Gnocchi All\'anatra',d:'',p:'10,00 €'},
{n:'Pappardelle Alla Lepre',d:'',p:'10,00 €'},
{n:'Tortellini Al Ragù O Pasticciati',d:'',p:'12,00 €'},
{n:'Penne All\'arrabbiata',d:'',p:''},
{n:'Tagliatelle Con Fagioli',d:'Piatto simbolo',p:''},
{n:'Tagliatelle Al Ragù',d:'',p:''},
{n:'Tagliatelle Con Piselli',d:'',p:''},
{n:'Tagliatelle Ai Funghi',d:'',p:''},
{n:'Passatello Alla Campagnola',d:'',p:''},
{n:'Ravioli Burro E Salvia',d:'',p:''},
{n:'Ravioli Al Ragù',d:'',p:''},
{n:'Ravioli Pasticciati',d:'',p:''},
{n:'Ravioli Boscaiola',d:'',p:''},
{n:'Tortellini Alla Boscaiola',d:'',p:''},
{n:'Strozzapreti All\' Antica Trattoria',d:'Pasticciati, funghi e salsiccia',p:''},
{n:'Penne Alla Vodka',d:'',p:''},
];
const secondi=[
{n:'Carne Al Forno',d:'Coniglio, pollo, faraona',p:'13,00 €'},
{n:'Carne Alla Brace',d:'Salsiccia, costine, spiedini, coppa di maiale',p:'12,00 €'},
{n:'Tagliata Di Manzo',d:'400/450 g',p:'20,00 €'},
{n:'Bistecca Di Manzo',d:'400/500 g',p:'18,00 €'},
{n:'Agnello Alla Brace',d:'',p:'13,00 €'},
{n:'Misto Di Carne Alla Brace',d:'Salsiccia, costine, spiedino, maiale',p:''},
{n:'Misto Di Carne Al Forno',d:'Coniglio in porchetta, pollo, faraona',p:''},
{n:'Salsiccia',d:'N. 3 pezzi',p:''},
{n:'Braciola Di Maiale',d:'',p:''},
{n:'Costarelle',d:'N. 4 pezzi',p:''},
{n:'Formaggi Misti',d:'',p:''},
{n:'Pecorino Nostrano',d:'',p:''},
];
const contorni=[
{n:'Insalata',d:'',p:'4,00 €'},
{n:'Gratin',d:'Pomodori, melanzane, zucchine, peperoni, cipolle',p:'5,00 €'},
{n:'Patate Al Forno E Fritte',d:'',p:'4,50 €'},
{n:'Verdura Cotta',d:'Bietola',p:'4,50 €'},
];
const dolci=[
{n:'Tiramisù',d:'',p:'4,50 €'},
{n:'Ciambellone',d:'',p:'4,50 €'},
{n:'Crostata',d:'',p:'4,50 €'},
{n:'Tartufo Bianco/Nero',d:'',p:'4,50 €'},
{n:'Sorbetto',d:'Al caffè, limone, pistacchio o mascarpone',p:'4,00 €'},
{n:'Panna Cotta',d:'',p:'4,50 €'},
{n:'Semifreddo Al Torroncino E Scaglie Di Cioccolato',d:'',p:'5,00 €'},
];
const speciali=[
{n:'Trippa',d:'Solo Giovedì',p:''},
{n:'Oca Al Forno',d:'Solo Giovedì',p:''},
{n:'Polenta Con Funghi O Fagioli',d:'Solo Giovedì',p:''},
{n:'Baccalà',d:'Venerdì e Sabato',p:''},
{n:'Fegatello Di Maiale Alla Griglia',d:'Venerdì e Sabato',p:''},
];
const extra=[
{n:'Solo Piada',d:'',p:'1,50 €'},
{n:'Coperto',d:'Con piada e pizza rustica',p:''},
];
const bibite=[
{n:'Acqua 1L / 1/2 L',d:'',p:''},
{n:'Coca Cola Media / Piccola / Alla Spina Da 1 L',d:'',p:''},
{n:'Bibite In Lattina',d:'Coca cola, fanta, sprite',p:''},
{n:'The Pesca O Limone Da 1/2 L',d:'',p:''},
{n:'Caffè / Moretta',d:'',p:''},
];
const birre=[
{n:'Birra Heineken Media / Piccola / Alla Spina Da 1 L',d:'',p:''},
];
const rossi=[
{n:'Sangiovese Doc La Ripe - Lucarelli',d:'cl.75',p:''},
{n:'Sangiovese Doc Terrazze - Morelli',d:'cl.75',p:''},
{n:'Sangiovese Sirio - Fiorini',d:'cl.75',p:''},
{n:'Sangiovese Doc Villa Alta - Vitali',d:'cl.75',p:''},
{n:'Rosso Piceno Sup. Doc Brecciarolo - Veronesi',d:'cl.75',p:''},
{n:'Rosso Conero Piancarda - Garofoli',d:'cl.75',p:''},
{n:'Rosso Conero Doc Yiulius - Strologo',d:'cl.75',p:''},
{n:'Lacrima Moro D\'alba Doc - Landi',d:'cl.75',p:''},
{n:'Sangiovese Doc Colli Pesaresi - Guerrieri',d:'cl.75 / cl.50',p:''},
{n:'Galileo Sangiovese Riserva Doc - Guerrieri',d:'cl.75',p:''},
{n:'Guerriero Nero Marche Rosso Igt - Guerrieri',d:'cl.75',p:''},
{n:'Mandy Marche Rosso Igt Syrah - Vitali',d:'',p:''},
];
const bianchi=[
{n:'Gessara Bianchello Superiore - Vitali',d:'',p:''},
{n:'Bianchello La Ripe - Lucarelli',d:'cl.75',p:''},
{n:'Bianchello Campioli - Fiorini',d:'cl.75',p:''},
{n:'Bianchello S. Ilario - Fiorini',d:'cl.75',p:''},
{n:'Bianchello Metauro Terrazze - Morelli',d:'cl.75',p:''},
{n:'Verdicchio Ca\'ruptae - Iesi',d:'cl.75',p:''},
{n:'Bianchello Del Metauro Doc - Guerrieri',d:'cl.50',p:''},
{n:'Celso Bianchello Del Metauro Sup. Doc - Guerrieri',d:'cl.75',p:''},
{n:'Guerriero Bianco Igt - Guerrieri',d:'cl.75',p:''},
{n:'Moss Vino Frizzante - Guerrieri',d:'cl.75',p:''},
];
const spina=[
{n:'Bianchello - Sangiovese 1/2 L / 1/4 L',d:'In Bottiglia',p:''},
{n:'Bianco Frizzante Alla Spina 1 L / 1/2 L',d:'',p:''},
{n:'Bianchello / Sangiovese 3/4 L Bottiglia',d:'',p:''},
];
const reviews=[
{t:'★★★★★',p:'Cucina casalinga vera, porzioni abbondanti. Tagliatelle al ragù come le faceva mia nonna.',a:'Marco R.'},
{t:'★★★★★',p:'20 anni che vengo qui. Carne alla brace spettacolare.',a:'Laura B.'},
{t:'★★★★☆',p:'Locale semplice ma si mangia benissimo. Gnocchi all\'anatra da urlo.',a:'Giovanni P.'},
{t:'★★★★★',p:'Pranzo domenica perfetto. Antipasto misto enorme.',a:'Sara M.'},
{t:'★★★★★',p:'Cucina marchigiana autentica. Trippa del giovedì.',a:'Andrea F.'},
{t:'★★★★★',p:'Grande antipasto 10€ vale il viaggio.',a:'Paolo C.'},
];
function renderList(id, data){
  const el=document.getElementById(id);
  if(!el) return;
  el.innerHTML=data.map(d=>{
    const priceClass = d.p ? '' : 'empty';
    return `<div class="item"><div class="item-left"><b>${d.n}</b>${d.d ? `<small>${d.d}</small>` : ''}</div><div class="item-right ${priceClass}">${d.p}</div></div>`;
  }).join('');
}
function renderAll(){
  renderList('list-antipasti', antipasti);
  renderList('list-primi', primi);
  renderList('list-secondi', secondi);
  renderList('list-contorni', contorni);
  renderList('list-dolci', dolci);
  renderList('list-speciali', speciali);
  renderList('list-extra', extra);
  renderList('list-bibite', bibite);
  renderList('list-birre', birre);
  renderList('list-rossi', rossi);
  renderList('list-bianchi', bianchi);
  renderList('list-spina', spina);
  const marquee=document.getElementById('reviewsMarquee');
  const double=[...reviews,...reviews];
  marquee.innerHTML=double.map(r=>`<div class="review-card"><div class="stars">${r.t}</div><p>"${r.p}"</p><small>${r.a}</small></div>`).join('');
}
renderAll();
