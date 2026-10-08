'use strict';
// Catálogo inicial de exemplos. São identidades cromáticas ilustrativas,
// não uniformes oficiais. Qualquer camisa pode ser carregada em PNG/JPG/WEBP.
const DATA = `
Santos|Brasil|#f4f4f1|#151b23|plain
Flamengo|Brasil|#c51f29|#171b22|horizontal
Corinthians|Brasil|#f1f1eb|#151515|plain
Palmeiras|Brasil|#146342|#f0f5e9|plain
São Paulo|Brasil|#f4f3f0|#dc2832|center
Vasco da Gama|Brasil|#171c23|#f6f5ee|sash
Fluminense|Brasil|#7b183b|#196a53|vertical
Botafogo|Brasil|#e8e9e9|#171717|vertical
Grêmio|Brasil|#62a8d6|#161616|vertical
Internacional|Brasil|#bd1924|#f7f6ee|plain
Cruzeiro|Brasil|#1757ae|#f7f8fa|plain
Atlético Mineiro|Brasil|#f7f7f7|#151515|vertical
Bahia|Brasil|#f7f9f9|#e52b38|plain
Vitória|Brasil|#dc232c|#121212|horizontal
Fortaleza|Brasil|#1567b1|#e42432|horizontal
Ceará|Brasil|#f3f4f4|#111111|vertical
Sport Recife|Brasil|#b90f20|#1b1518|horizontal
Athletico Paranaense|Brasil|#c3232c|#171717|sash
Coritiba|Brasil|#f5f5f0|#196d40|horizontal
Bragantino|Brasil|#f0f1f3|#db2430|plain
Paysandu|Brasil|#1e76ad|#f7f7f7|vertical
Remo|Brasil|#142b59|#f6f6f4|plain
Real Madrid|Espanha|#f9f8f3|#c5a253|plain
Barcelona|Espanha|#9a1638|#173e86|vertical
Atlético de Madrid|Espanha|#fbf9f8|#c51f31|vertical
Sevilla|Espanha|#f7f7f7|#d51e31|plain
Athletic Bilbao|Espanha|#f4f5f4|#c9242f|vertical
Manchester United|Inglaterra|#c51c2e|#161616|plain
Manchester City|Inglaterra|#8fcbe9|#f7f7f7|plain
Liverpool|Inglaterra|#bd1729|#f7f6ee|plain
Arsenal|Inglaterra|#bf2739|#f9f8f3|plain
Chelsea|Inglaterra|#1856bc|#f6f6f6|plain
Tottenham|Inglaterra|#f8f9fa|#1b2e4e|plain
Newcastle|Inglaterra|#f9f9f9|#171717|vertical
Aston Villa|Inglaterra|#853049|#8fd0e6|plain
Bayern de Munique|Alemanha|#c71e37|#f9f8f7|plain
Borussia Dortmund|Alemanha|#f5d921|#151515|plain
Bayer Leverkusen|Alemanha|#c12b30|#101010|vertical
RB Leipzig|Alemanha|#f8f8f8|#d8212c|plain
Juventus|Itália|#f8f8f8|#151515|vertical
Inter de Milão|Itália|#2366af|#151515|vertical
Milan|Itália|#b5222d|#111111|vertical
Napoli|Itália|#4bb5e6|#f8f8f8|plain
Roma|Itália|#841b2e|#efb13e|plain
Lazio|Itália|#a7d6ed|#f5f8f8|plain
Paris Saint-Germain|França|#172951|#d02439|center
Olympique de Marseille|França|#f8f8f8|#46b8e9|plain
Lyon|França|#f9f9f9|#b92a3b|center
Monaco|França|#f6f6f6|#c82e37|half
Benfica|Portugal|#d92231|#f8f8f8|plain
Porto|Portugal|#1d58aa|#f8f8f8|vertical
Sporting|Portugal|#f5f6f5|#137548|horizontal
Ajax|Holanda|#f8f8f8|#ca1c2e|center
PSV|Holanda|#c91f30|#f7f8f8|vertical
Feyenoord|Holanda|#d31d30|#f7f7f7|half
Celtic|Escócia|#e9f7e8|#168552|horizontal
Rangers|Escócia|#1b4ea5|#f8f8f8|plain
Boca Juniors|Argentina|#143c8b|#e9bf22|horizontal
River Plate|Argentina|#f4f5f5|#d92132|sash
Racing|Argentina|#8ecdeb|#f9f9f9|vertical
Independiente|Argentina|#c51d27|#f8f8f8|plain
Peñarol|Uruguai|#e7bb20|#151515|vertical
Nacional|Uruguai|#f8f8f8|#23549d|plain
Colo-Colo|Chile|#f7f7f5|#151515|plain
Club América|México|#f0dd92|#173e84|plain
Chivas Guadalajara|México|#e9f3f8|#d22334|vertical
Cruz Azul|México|#1760b2|#f3f5f8|plain
Tigres UANL|México|#edcf28|#20449b|center
Inter Miami|Estados Unidos|#f1a2b8|#161616|plain
LA Galaxy|Estados Unidos|#f6f6f5|#183a7e|sash
Seattle Sounders|Estados Unidos|#3f8a56|#1f3964|plain
Al Nassr|Arábia Saudita|#e4ca26|#184da0|plain
Al Hilal|Arábia Saudita|#145eb5|#f4f5f5|plain
Al Ittihad|Arábia Saudita|#e5b931|#171717|vertical
Galatasaray|Turquia|#d02639|#dc9b26|half
Fenerbahçe|Turquia|#e2c331|#1c3879|vertical
Besiktas|Turquia|#f5f5f5|#161616|vertical
Olympiacos|Grécia|#df2939|#f5f5f5|vertical
Estrela Vermelha|Sérvia|#d92132|#f7f7f7|vertical
Al Ahly|Egito|#ba1d2f|#f8f7f5|plain
Zamalek|Egito|#f7f8f8|#d92433|horizontal
Mamelodi Sundowns|África do Sul|#e5cc30|#236f47|plain
Urawa Red Diamonds|Japão|#d12a34|#151515|plain
Vissel Kobe|Japão|#862536|#f3f3f2|plain
Kashima Antlers|Japão|#b21c38|#122744|plain
Jeonbuk Hyundai|Coreia do Sul|#26804e|#121a20|plain
Ulsan HD|Coreia do Sul|#1d64b6|#f1db2c|plain
Auckland City|Nova Zelândia|#1a589e|#f7f7f7|plain
`.trim().split('\n').map((line,i)=>{const [name,country,primary,secondary,pattern]=line.split('|');return {id:i,name,country,primary,secondary,pattern};});

const $ = id => document.getElementById(id);
const canvas = $('shirtCanvas');
const canvasHolder = canvas.parentElement;
// Camisa vazia aceita gestos nativos de rolagem. Apenas as marcas e suas alças
// usam superfícies separadas que capturam o toque para a edição.
const sponsorHitLayer = document.createElement('div');
sponsorHitLayer.className = 'sponsor-hit-layer';
canvasHolder.appendChild(sponsorHitLayer);
const sponsorHitNodes = new Map();
const ctx = canvas.getContext('2d', {alpha:false});
const W = canvas.width, H = canvas.height;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const POSITIONS = {
  center: {label:'Centro', x:512, y:530, size:32},
  leftChest: {label:'Peito esquerdo', x:403, y:402, size:13},
  rightChest: {label:'Peito direito', x:620, y:405, size:13},
  leftSleeve: {label:'Manga esquerda', x:238, y:437, size:13},
  rightSleeve: {label:'Manga direita', x:783, y:437, size:13},
  lower: {label:'Parte inferior', x:512, y:734, size:24}
};
const state = {team:DATA[0],shirtImage:null,activePosition:'center',sponsors:new Map()};
const pointers = new Map();
let dragging = false, dragPrev = null, pinch = null, interactionMode = null, transformOrigin = null;
function defaultSponsor(position) {
  const p = POSITIONS[position];
  return {position, type:'text', image:null, imageName:'', text:'SUA MARCA',font:'sport',weight:'900',
    x:p.x,y:p.y,size:p.size,rotation:0,opacity:100,tint:'original',customTint:'#ffad32',
    removeWhite:false,fabric:true,art:null};
}
function activeSponsor() { return state.sponsors.get(state.activePosition) || null; }
function ensureSponsor(type) {
  let s=activeSponsor();
  if(!s){s=defaultSponsor(state.activePosition);state.sponsors.set(state.activePosition,s);}
  if(type) s.type=type;
  return s;
}
function toPercentX(x){return Math.round(x/W*100);} 
function toPercentY(y){return Math.round(y/H*100);} 
function fromPercentX(p){return clamp(Math.round((p/100)*W),0,W);} 
function fromPercentY(p){return clamp(Math.round((p/100)*H),0,H);} 
function nudgeActive(dx,dy){
  const s=activeSponsor();if(!s)return;
  s.x=clamp(s.x+dx,0,W);s.y=clamp(s.y+dy,0,H);synchronizeUI();
}
function normalizeAngle(value){
  let v=Math.round(value)%360;
  if(v<0)v+=360;
  return v;
}
function rotateActive(delta){
  const s=activeSponsor();if(!s)return;
  s.rotation=normalizeAngle(s.rotation+delta);synchronizeUI();
}
function groupedTeams(filter='') {
  const countryOrder=['Brasil','Espanha','Inglaterra','Alemanha','Itália','França','Portugal','Holanda','Escócia','Argentina','Uruguai','Chile','México','Estados Unidos','Arábia Saudita','Turquia','Grécia','Sérvia','Egito','África do Sul','Japão','Coreia do Sul','Nova Zelândia'];
  const select=$('teamSelect'), retained=state.team.id;
  select.replaceChildren();let count=0;
  for(const country of countryOrder){
    const items=DATA.filter(t=>t.country===country && norm(`${t.name} ${t.country}`).includes(norm(filter)));
    if(!items.length)continue;
    const group=document.createElement('optgroup');group.label=country;
    for(const item of items){const option=document.createElement('option');option.value=String(item.id);option.textContent=item.name;group.append(option);count++;}
    select.append(group);
  }
  if(!count){const option=document.createElement('option');option.value='';option.textContent='Nenhum clube encontrado — envie uma foto';select.append(option);}
  if([...select.options].some(o=>o.value===String(retained)))select.value=String(retained);
  else if(count){select.selectedIndex=0;changeTeam(Number(select.value));}
  else select.value='';
}
function changeTeam(id){
  const found=DATA.find(t=>t.id===id);if(!found)return;
  state.team=found;state.shirtImage=null;
  $('shirtUpload').value='';$('clearShirt').hidden=true;
  $('primaryColor').value=found.primary;$('secondaryColor').value=found.secondary;
  $('shirtPattern').value=found.pattern;$('customName').value='';
  $('stageTitle').textContent=found.name+' — sua versão';
  $('teamInfo').textContent=`${found.country} · Prévia ilustrativa nas cores do clube. Envie a camisa real para uma montagem mais fiel.`;
  regenerateArtwork();render();
}
function hexRgb(s){const n=parseInt(s.slice(1),16);return [(n>>16)&255,(n>>8)&255,n&255];}
function lighten(s,n){const c=hexRgb(s);return `rgb(${c.map(v=>clamp(Math.round(v+(n>=0?(255-v)*n:v*n)),0,255)).join(',')})`;}
function shirtPath(c){c.beginPath();c.moveTo(393,246);c.lineTo(317,268);c.quadraticCurveTo(289,279,271,297);c.lineTo(160,430);c.lineTo(274,542);c.lineTo(311,503);c.lineTo(305,853);c.quadraticCurveTo(305,877,336,882);c.lineTo(687,882);c.quadraticCurveTo(718,876,718,853);c.lineTo(712,503);c.lineTo(751,542);c.lineTo(864,430);c.lineTo(753,297);c.quadraticCurveTo(731,276,706,268);c.lineTo(630,246);c.bezierCurveTo(609,280,574,304,512,304);c.bezierCurveTo(449,304,415,280,393,246);c.closePath();}
function drawPattern(c,t){const {secondary,pattern}=t;
  c.fillStyle=secondary;
  if(pattern==='vertical'){for(let x=275;x<755;x+=95)c.fillRect(x,215,49,725);}
  if(pattern==='pinstripes'){for(let x=300;x<730;x+=24)c.fillRect(x,215,5,725);}
  if(pattern==='horizontal'){for(let y=345;y<880;y+=112)c.fillRect(130,y,760,47);}
  if(pattern==='half'){c.fillRect(512,210,400,740);}
  if(pattern==='center'){c.fillRect(463,230,98,700);}
  if(pattern==='sash'){c.save();c.translate(512,510);c.rotate(-.65);c.fillRect(-90,-500,145,1000);c.restore();}
}
function drawShirt(c){const t={primary:$('primaryColor').value,secondary:$('secondaryColor').value,pattern:$('shirtPattern').value};
  c.save();c.shadowColor='#000c';c.shadowBlur=47;c.shadowOffsetY=20;shirtPath(c);c.fillStyle=t.primary;c.fill();c.restore();
  c.save();shirtPath(c);c.clip();c.fillStyle=t.primary;c.fillRect(80,210,870,730);drawPattern(c,t);
  const glaze=c.createLinearGradient(180,300,860,850);glaze.addColorStop(0,'#ffffff50');glaze.addColorStop(.20,'#ffffff0a');glaze.addColorStop(.46,'#00000018');glaze.addColorStop(.73,'#ffffff0d');glaze.addColorStop(1,'#00000052');c.fillStyle=glaze;c.fillRect(100,210,800,740);
  for(let i=0;i<12;i++){c.beginPath();c.moveTo(300+i*27,350);c.bezierCurveTo(321+i*24,500,290+i*30,680,310+i*28,874);c.lineWidth=(i%3===0)?9:4;c.strokeStyle=i%2===0?'#ffffff0c':'#0000000a';c.stroke();}
  c.restore();
  // Bordas, punhos, gola e costuras de um desenho genérico
  c.save();shirtPath(c);c.lineWidth=4;c.strokeStyle='#111a2280';c.stroke();c.restore();
  c.strokeStyle=t.secondary;c.lineWidth=16;c.lineCap='round';
  c.beginPath();c.moveTo(163,430);c.lineTo(268,536);c.moveTo(859,430);c.lineTo(756,536);c.stroke();
  c.beginPath();c.moveTo(403,259);c.bezierCurveTo(437,312,479,339,512,340);c.bezierCurveTo(554,340,600,308,620,259);
  c.strokeStyle='#101a24b3';c.lineWidth=29;c.stroke();c.strokeStyle=t.secondary;c.lineWidth=15;c.stroke();
  c.beginPath();c.moveTo(315,847);c.lineTo(709,847);c.strokeStyle='#00000019';c.lineWidth=5;c.stroke();
  c.setLineDash([7,8]);c.strokeStyle='#ffffff32';c.lineWidth=2;
  c.beginPath();c.moveTo(314,502);c.lineTo(328,844);c.moveTo(710,502);c.lineTo(693,844);c.stroke();c.setLineDash([]);
  c.save();c.fillStyle='#07121bb9';c.strokeStyle='#ffffff60';c.lineWidth=2;c.beginPath();c.moveTo(665,332);c.lineTo(705,345);c.lineTo(702,393);c.quadraticCurveTo(685,414,668,393);c.closePath();c.fill();c.stroke();c.fillStyle='#d3e8ee';c.font='800 15px Arial';c.textAlign='center';c.fillText('CL',686,376);c.restore();
}
function background(c){const g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,'#142838');g.addColorStop(.52,'#0c1b29');g.addColorStop(1,'#050e17');c.fillStyle=g;c.fillRect(0,0,W,H);
  c.strokeStyle='#ffffff07';c.lineWidth=2;for(let x=-1100;x<2200;x+=95){c.beginPath();c.moveTo(x,0);c.lineTo(x+840,1100);c.stroke();}
  const glow=c.createRadialGradient(512,435,90,512,460,600);glow.addColorStop(0,'#466a6c44');glow.addColorStop(1,'#01091400');c.fillStyle=glow;c.fillRect(0,0,W,H);
  c.font='800 19px Arial';c.textAlign='left';c.fillStyle='#afc4d188';c.fillText('CAMISALAB / CONCEPT STUDIO',60,77);
  c.font='800 14px Arial';c.textAlign='right';c.fillStyle='#adff4c';c.fillText('EST. 2026',965,77);
}
function coverFit(c,img){const scale=Math.min(W/img.width,H/img.height);const w=img.width*scale,h=img.height*scale;c.fillStyle='#f2f2f2';c.fillRect(0,0,W,H);c.drawImage(img,(W-w)/2,(H-h)/2,w,h);}

const FONTS = {
  sport: 'Impact, "Arial Narrow", sans-serif',
  modern: 'Arial, Helvetica, sans-serif',
  classic: 'Georgia, "Times New Roman", serif',
  tech: '"Courier New", monospace'
};
function makeArt(s){
  const art=document.createElement('canvas');
  const a=art.getContext('2d',{willReadFrequently:true});
  if(s.type==='logo'){
    if(!s.image){s.art=null;return;}
    const img=s.image;
    const scale=Math.min(1,1600/Math.max(img.naturalWidth||img.width,img.naturalHeight||img.height));
    art.width=Math.max(1,Math.round((img.naturalWidth||img.width)*scale));
    art.height=Math.max(1,Math.round((img.naturalHeight||img.height)*scale));
    a.drawImage(img,0,0,art.width,art.height);
    if(s.removeWhite){
      try {const d=a.getImageData(0,0,art.width,art.height),data=d.data;
        for(let i=0;i<data.length;i+=4){const min=Math.min(data[i],data[i+1],data[i+2]);const diff=Math.max(data[i],data[i+1],data[i+2])-min;
          if(min>195&&diff<25)data[i+3]=Math.round(data[i+3]*clamp((245-min)/50,0,1));
        }a.putImageData(d,0,0);
      }catch(err){console.warn('Não foi possível processar o fundo desta imagem.',err);}
    }
  } else {
    const txt=s.text.trim();if(!txt){s.art=null;return;}
    art.width=1400;art.height=270;
    const [r,g,b]=hexRgb($('primaryColor').value);
    const brightness=(.2126*r+.7152*g+.0722*b)/255;
    a.fillStyle=(!state.shirtImage&&brightness<.58)?'#ffffff':'#152331';
    a.textAlign='center';a.textBaseline='middle';
    a.font=`${s.weight} 116px ${FONTS[s.font]||FONTS.sport}`;
    a.fillText(txt,700,132,1350);
  }
  if(s.tint!=='original'){
    a.globalCompositeOperation='source-in';a.fillStyle=s.tint;a.fillRect(0,0,art.width,art.height);
    a.globalCompositeOperation='source-over';
  }
  if(s.fabric){
    a.globalCompositeOperation='source-atop';
    const gr=a.createLinearGradient(0,0,art.width,art.height);
    gr.addColorStop(0,'#0000000b');gr.addColorStop(.24,'#00000025');gr.addColorStop(.44,'#ffffff09');gr.addColorStop(.7,'#00000016');gr.addColorStop(1,'#00000032');
    a.fillStyle=gr;a.fillRect(0,0,art.width,art.height);a.globalCompositeOperation='source-over';
  }
  s.art=art;
}
function regenerateArtwork(){for(const s of state.sponsors.values())makeArt(s);}
function artDimensions(s){
  const aspect=s.art?s.art.width/s.art.height:2.5;
  const targetW=s.size/100*W;
  const h=clamp(targetW/aspect,1,280);
  return {w:h*aspect,h};
}
function localPoint(point,s){
  const a=-s.rotation*Math.PI/180;
  const dx=point.x-s.x,dy=point.y-s.y;
  return {x:dx*Math.cos(a)-dy*Math.sin(a),y:dx*Math.sin(a)+dy*Math.cos(a)};
}
function worldPoint(local,s){
  const a=s.rotation*Math.PI/180;
  return {x:s.x + local.x*Math.cos(a) - local.y*Math.sin(a), y:s.y + local.x*Math.sin(a) + local.y*Math.cos(a)};
}
function handleMetrics(w,h){
  // O canvas é escalado na tela: manter alças e área de toque legíveis no celular.
  const cssWidth=Math.max(canvas.getBoundingClientRect().width,1);
  const factor=clamp(W/cssWidth,1,4);
  const gap=23*factor;
  return {
    resize:{x:w/2+gap,y:h/2+gap},
    rotate:{x:0,y:-h/2-gap},
    radius:12*factor,
    hitRadius:21*factor,
    factor
  };
}
function getHandleInfo(point,s){
  if(!s||!s.art)return null;
  const {w,h}=artDimensions(s);
  const p=localPoint(point,s);
  const m=handleMetrics(w,h);
  if(Math.hypot(p.x-m.resize.x,p.y-m.resize.y)<=m.hitRadius) return {type:'resize',local:p,w,h};
  if(Math.hypot(p.x-m.rotate.x,p.y-m.rotate.y)<=m.hitRadius) return {type:'rotate',local:p,w,h};
  if(Math.abs(p.x)<Math.max(37,w/2+15)&&Math.abs(p.y)<Math.max(29,h/2+15)) return {type:'move',local:p,w,h};
  return null;
}
function drawSponsor(c,s){
  if(!s.art)return;
  const {w,h}=artDimensions(s);
  c.save();c.translate(s.x,s.y);c.rotate(s.rotation*Math.PI/180);
  c.globalAlpha=s.opacity/100;c.drawImage(s.art,-w/2,-h/2,w,h);c.restore();
}
function drawSelection(c){
  const s=activeSponsor();if(!s)return;
  const {w,h}=s.art?artDimensions(s):{w:230,h:90};
  const m=handleMetrics(w,h);
  c.save();c.translate(s.x,s.y);c.rotate(s.rotation*Math.PI/180);
  c.setLineDash([10,8]);c.lineWidth=2.5;c.strokeStyle='#b4ff43bc';
  c.strokeRect(-w/2-10,-h/2-10,w+20,h+20);c.setLineDash([]);
  c.beginPath();c.moveTo(0,-h/2-10);c.lineTo(m.rotate.x,m.rotate.y);
  c.strokeStyle='#b4ff43cc';c.lineWidth=2.5;c.stroke();
  for(const handle of [{...m.resize,kind:'resize'},{...m.rotate,kind:'rotate'}]){
    c.beginPath();c.arc(handle.x,handle.y,m.radius,0,Math.PI*2);
    c.fillStyle=handle.kind==='rotate' ? '#09121d' : '#b4ff43';
    c.strokeStyle='#b4ff43';c.lineWidth=3;c.fill();c.stroke();
    c.font=`bold ${Math.round(13*m.factor)}px Arial`;
    c.textAlign='center';c.textBaseline='middle';
    c.fillStyle=handle.kind==='rotate' ? '#b4ff43' : '#09121d';
    c.fillText(handle.kind==='rotate'?'↻':'↔',handle.x,handle.y+1);
  }
  if(s.type==='logo'&&!s.image){
    c.fillStyle='#b4ff43';c.textAlign='center';c.font='bold 19px Arial';c.fillText('ENVIE UMA LOGO',0,5);
  }
  c.restore();
}
// Marca do CamisaLab no canto superior direito, sem cobrir a foto com rodapés.
function drawBrandMark(c){
  c.save();
  const x=W-133,y=34,w=94,h=84,r=18;
  c.beginPath();
  c.moveTo(x+r,y);c.lineTo(x+w-r,y);c.quadraticCurveTo(x+w,y,x+w,y+r);
  c.lineTo(x+w,y+h-r);c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  c.lineTo(x+r,y+h);c.quadraticCurveTo(x,y+h,x,y+h-r);
  c.lineTo(x,y+r);c.quadraticCurveTo(x,y,x+r,y);c.closePath();
  c.fillStyle='rgba(9,18,29,.93)';c.fill();
  c.lineWidth=3;c.strokeStyle='#b4ff43';c.stroke();
  c.textAlign='center';c.textBaseline='middle';
  c.font='italic 900 39px Arial';c.fillStyle='#f5fafa';
  c.fillText('CL',x+44,y+43);
  c.fillStyle='#b4ff43';c.fillRect(x+67,y+58,8,8);
  c.restore();
}
function renderTo(c,showGuide){
  background(c);
  if(state.shirtImage)coverFit(c,state.shirtImage);else drawShirt(c);
  for(const s of state.sponsors.values())drawSponsor(c,s);
  if(showGuide)drawSelection(c);
  drawBrandMark(c);
}
function getHitNode(key, position, kind){
  if(!sponsorHitNodes.has(key)){
    const node=document.createElement('div');
    node.className='sponsor-hit-target'+(kind==='body'?'':' sponsor-hit-handle');
    node.dataset.sponsorPosition=position;
    node.dataset.handleType=kind;
    sponsorHitLayer.appendChild(node);
    sponsorHitNodes.set(key,node);
  }
  return sponsorHitNodes.get(key);
}
function updateTouchTargets(){
  // Em dispositivos móveis, o hitbox acompanha as coordenadas reais do canvas.
  const width=canvas.getBoundingClientRect().width;
  if(!width)return;
  const scale=width/W;
  const visible=new Set();
  for(const s of state.sponsors.values()){
    if(!s.art)continue;
    const {w,h}=artDimensions(s);
    const bodyKey=s.position+':body';
    const body=getHitNode(bodyKey,s.position,'body');
    visible.add(bodyKey);
    body.style.left=(s.x/W*100)+'%';
    body.style.top=(s.y/H*100)+'%';
    body.style.width=Math.max(40,(w+16)*scale)+'px';
    body.style.height=Math.max(34,(h+16)*scale)+'px';
    body.style.transform=`translate(-50%,-50%) rotate(${s.rotation}deg)`;
    body.style.zIndex=s.position===state.activePosition?'11':'10';
    if(s.position===state.activePosition){
      const m=handleMetrics(w,h);
      for(const kind of ['rotate','resize']){
        const k=s.position+':'+kind;
        const handle=getHitNode(k,s.position,kind);
        visible.add(k);
        const point=worldPoint(m[kind],s);
        handle.style.left=(point.x/W*100)+'%';
        handle.style.top=(point.y/H*100)+'%';
        handle.style.zIndex='12';
      }
    }
  }
  for(const [key,node] of sponsorHitNodes){node.hidden=!visible.has(key);}
}
function render(){renderTo(ctx,true);updateTouchTargets();}
function synchronizeUI(){
  const s=activeSponsor(), d=s||defaultSponsor(state.activePosition);
  document.querySelectorAll('[data-position]').forEach(b=>{
    const isActive=b.dataset.position===state.activePosition;
    b.classList.toggle('active',isActive);b.setAttribute('aria-pressed',String(isActive));
    b.dataset.filled=String(state.sponsors.has(b.dataset.position));
  });
  document.querySelectorAll('[data-kind]').forEach(b=>{
    const isActive=b.dataset.kind===d.type;
    b.classList.toggle('active',isActive);b.setAttribute('aria-pressed',String(isActive));
  });
  $('imageFields').hidden=d.type!=='logo';$('textFields').hidden=d.type!=='text';
  $('logoUploadLabel').textContent=d.imageName?d.imageName:'Escolher imagem da empresa';
  $('removeLogo').hidden=!d.image;
  if($('sponsorText').value!==d.text)$('sponsorText').value=d.text;
  $('fontFamily').value=d.font;
  $('fontWeight').value=d.weight;
  $('sizeRange').value=d.size;$('sizeValue').textContent=d.size+'%';
  const normalizedRotation=normalizeAngle(d.rotation);
  $('rotationRange').value=normalizedRotation;$('rotationValue').textContent=normalizedRotation+'°';
  $('opacityRange').value=d.opacity;$('opacityValue').textContent=d.opacity+'%';
  $('tintColor').value=d.customTint;
  $('removeWhite').checked=d.removeWhite;$('fabricEffect').checked=d.fabric;
  $('whiteOption').hidden=d.type!=='logo';
  document.querySelectorAll('[data-tint]').forEach(b=>b.classList.toggle('active',b.dataset.tint===d.tint));
  document.querySelector('.custom-swatch').classList.toggle('active',d.tint===d.customTint);
  const label=POSITIONS[state.activePosition].label;
  if(s){
    const what=s.type==='text'?`Texto: <b>${escapeHtml(s.text.trim()||'(vazio)')}</b>`:(s.image?`Imagem: <b>${escapeHtml(s.imageName)}</b>`:'<b>Imagem ainda não enviada</b>');
    $('areaStatus').innerHTML=`<b>${label}</b> · ${what}`;
  }else{
    $('areaStatus').innerHTML=`<b>${label}</b> · Espaço vazio. Adicione um patrocinador ou selecione Imagem/Texto acima.`;
  }
  $('addArea').hidden=!!s;$('clearArea').hidden=!s;
  $('resetBtn').disabled=!s;
  const moveDisabled=!s;
  const xPercent=toPercentX(d.x), yPercent=toPercentY(d.y);
  $('xRange').value=xPercent;$('xValue').textContent=xPercent+'%';
  $('yRange').value=yPercent;$('yValue').textContent=yPercent+'%';
  $('xRange').disabled=moveDisabled;$('yRange').disabled=moveDisabled;$('centerAreaBtn').disabled=moveDisabled;
  $('rotationRange').disabled=moveDisabled;$('resetRotationBtn').disabled=moveDisabled;
  document.querySelectorAll('[data-nudge]').forEach(btn=>btn.disabled=moveDisabled);
  document.querySelectorAll('[data-rotate-step]').forEach(btn=>btn.disabled=moveDisabled);
  render();
}
function escapeHtml(value){return value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function selectPosition(position){
  if(!(position in POSITIONS))return;
  state.activePosition=position;
  $('logoUpload').value='';
  synchronizeUI();
}
function setKind(kind){
  const s=ensureSponsor(kind);
  makeArt(s);synchronizeUI();
}
function modifyActive(change,needsArt=false){
  const s=ensureSponsor();change(s);
  if(needsArt)makeArt(s);
  synchronizeUI();
}
function resetActive(){
  const s=activeSponsor();if(!s)return;
  const p=POSITIONS[s.position];s.x=p.x;s.y=p.y;s.size=p.size;s.rotation=0;s.opacity=100;
  synchronizeUI();
}
async function loadFile(file,allowSvg){
  if(!file)return null;
  if(file.size>20*1024*1024){alert('Escolha uma imagem de até 20 MB.');return null;}
  const allowed=allowSvg?/^image\/(png|jpeg|webp|svg\+xml|avif)$/:/^image\/(png|jpeg|webp|avif)$/;
  if(!allowed.test(file.type)){alert('Formato de imagem inválido. Use PNG, JPG ou WEBP.');return null;}
  return new Promise(resolve=>{
    const url=URL.createObjectURL(file),img=new Image();
    img.onload=()=>{URL.revokeObjectURL(url);resolve(img);};
    img.onerror=()=>{URL.revokeObjectURL(url);alert('Não foi possível abrir a imagem.');resolve(null);};
    img.src=url;
  });
}
function coordinates(e){const r=canvas.getBoundingClientRect();return {x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};}
function hitSponsor(point,s){
  const info=getHandleInfo(point,s);
  return !!info;
}
function getPinch(){
  const [a,b]=[...pointers.values()];
  return {
    center:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},
    distance:Math.hypot(a.x-b.x,a.y-b.y),
    angle:Math.atan2(b.y-a.y,b.x-a.x)
  };
}
canvasHolder.addEventListener('pointerdown',e=>{
  if(e.button!==undefined&&e.button!==0)return;
  const hitTarget=e.target.closest('[data-sponsor-position]');
  // Toque em qualquer parte livre da camisa = rolagem normal da página.
  if(!hitTarget)return;
  const p=coordinates(e);
  pointers.set(e.pointerId,p);
  canvasHolder.setPointerCapture(e.pointerId);
  if(pointers.size===1){
    const preferred=state.sponsors.get(hitTarget.dataset.sponsorPosition);
    const candidates=[preferred,...[...state.sponsors.values()].reverse()].filter(Boolean);
    let found=null,hit=null;
    for(const candidate of candidates){
      const info=getHandleInfo(p,candidate);
      if(info || candidate===preferred){
        found=candidate;
        hit={type:candidate===preferred&&hitTarget.dataset.handleType!=='body'?
          hitTarget.dataset.handleType:(info?.type||'move')};
        break;
      }
    }
    if(found){
      state.activePosition=found.position;synchronizeUI();
      interactionMode=hit.type;
      dragging=hit.type==='move';
      dragPrev=p;
      const {w,h}=artDimensions(found);
      transformOrigin={startPoint:p,startSize:found.size,startRotation:found.rotation,startDistance:Math.hypot(p.x-found.x,p.y-found.y),startAngle:Math.atan2(p.y-found.y,p.x-found.x),box:{w,h}};
      canvasHolder.classList.add('is-transforming');
    }
  } else if(pointers.size===2){
    const active=activeSponsor(),g=getPinch();
    if(active){pinch={...g,origSize:active.size,origX:active.x,origY:active.y,origRotation:active.rotation};dragging=false;interactionMode='gesture';canvasHolder.classList.add('is-transforming');}
  }
  e.preventDefault();
});
canvasHolder.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId))return;
  const p=coordinates(e);pointers.set(e.pointerId,p);
  const s=activeSponsor();if(!s)return;
  if(pointers.size===2&&pinch){
    const next=getPinch();
    s.size=clamp(Math.round(pinch.origSize*next.distance/Math.max(pinch.distance,1)),5,80);
    s.x=clamp(pinch.origX+next.center.x-pinch.center.x,0,W);s.y=clamp(pinch.origY+next.center.y-pinch.center.y,0,H);
    const angleDelta=(next.angle-pinch.angle)*180/Math.PI;
    s.rotation=normalizeAngle(pinch.origRotation+angleDelta);
    $('sizeRange').value=s.size;$('sizeValue').textContent=s.size+'%';
    const rot=normalizeAngle(s.rotation);$('rotationRange').value=rot;$('rotationValue').textContent=rot+'°';
    $('xRange').value=toPercentX(s.x);$('xValue').textContent=toPercentX(s.x)+'%';
    $('yRange').value=toPercentY(s.y);$('yValue').textContent=toPercentY(s.y)+'%';
    canvas.parentElement.classList.add('is-transforming');
    render();
  }else if(interactionMode==='move'&&dragging&&dragPrev){
    s.x=clamp(s.x+p.x-dragPrev.x,0,W);s.y=clamp(s.y+p.y-dragPrev.y,0,H);dragPrev=p;
    $('xRange').value=toPercentX(s.x);$('xValue').textContent=toPercentX(s.x)+'%';
    $('yRange').value=toPercentY(s.y);$('yValue').textContent=toPercentY(s.y)+'%';
    render();
  }else if(interactionMode==='resize'&&transformOrigin){
    const currentDistance=Math.hypot(p.x-s.x,p.y-s.y);
    s.size=clamp(Math.round(transformOrigin.startSize * currentDistance/Math.max(transformOrigin.startDistance,1)),5,80);
    $('sizeRange').value=s.size;$('sizeValue').textContent=s.size+'%';
    render();
  }else if(interactionMode==='rotate'&&transformOrigin){
    const currentAngle=Math.atan2(p.y-s.y,p.x-s.x);
    s.rotation=normalizeAngle(transformOrigin.startRotation + (currentAngle-transformOrigin.startAngle)*180/Math.PI);
    const rot=normalizeAngle(s.rotation);$('rotationRange').value=rot;$('rotationValue').textContent=rot+'°';
    render();
  }
  e.preventDefault();
});
function finish(e){
  pointers.delete(e.pointerId);
  if(pointers.size<2) canvasHolder.classList.remove('is-transforming');
  dragging=false;dragPrev=null;pinch=null;interactionMode=null;transformOrigin=null;
}
canvasHolder.addEventListener('pointerup',finish);
canvasHolder.addEventListener('pointercancel',finish);
canvasHolder.addEventListener('lostpointercapture',finish);
canvasHolder.addEventListener('wheel',e=>{
  const s=activeSponsor();if(!s)return;
  const p=coordinates(e);
  if(!hitSponsor(p,s))return;
  e.preventDefault();
  const step=e.shiftKey?12:6;
  s.rotation=normalizeAngle(s.rotation + (e.deltaY>0?step:-step));
  const rot=normalizeAngle(s.rotation);
  $('rotationRange').value=rot;$('rotationValue').textContent=rot+'°';
  render();
},{passive:false});
function syncDock(targetId){
  document.querySelectorAll('.dock-app').forEach(btn=>{
    const active=btn.dataset.pageTarget===targetId;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',String(active));
  });
  resizePanelTo(document.getElementById(targetId));
}
const pageContainer=$('controlPages');
const panelPages=[...pageContainer.querySelectorAll('.control-page')];
function resizePanelTo(page){
  if(!page)return;
  const style=getComputedStyle(pageContainer);
  const padding=parseFloat(style.paddingTop)+parseFloat(style.paddingBottom);
  const height=Math.ceil(page.getBoundingClientRect().height+padding);
  pageContainer.style.height=height+'px';
}
function relativePageLeft(page){
  return page.getBoundingClientRect().left - pageContainer.getBoundingClientRect().left + pageContainer.scrollLeft - parseFloat(getComputedStyle(pageContainer).paddingLeft);
}
function nearestPage(){
  const left=pageContainer.scrollLeft;
  const best=panelPages.reduce((best,page)=>
    Math.abs(relativePageLeft(page)-left)<Math.abs(relativePageLeft(best)-left)?page:best, panelPages[0]);
  if(best)syncDock(best.id);
}
document.querySelectorAll('.dock-app').forEach(btn=>btn.addEventListener('click',()=>{
  const page=$(btn.dataset.pageTarget);if(!page)return;
  pageContainer.scrollTo({left:Math.max(0,relativePageLeft(page)),behavior:'smooth'});
  syncDock(page.id);
}));
let dockAnimationFrame=0;
pageContainer.addEventListener('scroll',()=>{
  if(dockAnimationFrame) cancelAnimationFrame(dockAnimationFrame);
  dockAnimationFrame=requestAnimationFrame(()=>{nearestPage();dockAnimationFrame=0;});
},{passive:true});
const panelSizeObserver=new ResizeObserver(()=>{
  const selected=document.querySelector('.dock-app.active');
  if(selected)resizePanelTo($(selected.dataset.pageTarget));
});
panelPages.forEach(page=>panelSizeObserver.observe(page));
window.addEventListener('resize',()=>{
  const selected=document.querySelector('.dock-app.active');
  if(selected)resizePanelTo($(selected.dataset.pageTarget));
});
resizePanelTo(panelPages[0]);
$('jumpToControls').addEventListener('click',()=>{
  document.querySelector('.controls').scrollIntoView({behavior:'smooth',block:'start'});
});
$('teamSearch').addEventListener('input',e=>groupedTeams(e.target.value));
$('teamSelect').addEventListener('change',e=>changeTeam(Number(e.target.value)));
for(const id of ['secondaryColor','shirtPattern','customName'])$(id).addEventListener('input',render);
$('primaryColor').addEventListener('input',()=>{regenerateArtwork();render();});
$('shirtUpload').addEventListener('change',async e=>{
  const file=e.target.files?.[0],img=await loadFile(file,false);if(!img)return;
  state.shirtImage=img;$('clearShirt').hidden=false;
  $('stageTitle').textContent='Camisa enviada — sua versão';regenerateArtwork();render();
});
$('clearShirt').addEventListener('click',()=>{
  state.shirtImage=null;$('shirtUpload').value='';$('clearShirt').hidden=true;
  $('stageTitle').textContent=state.team.name+' — sua versão';regenerateArtwork();render();
});
document.querySelectorAll('[data-kind]').forEach(b=>b.addEventListener('click',()=>setKind(b.dataset.kind)));
document.querySelectorAll('[data-position]').forEach(b=>b.addEventListener('click',()=>selectPosition(b.dataset.position)));
$('addArea').addEventListener('click',()=>{ensureSponsor('text');makeArt(activeSponsor());synchronizeUI();});
$('clearArea').addEventListener('click',()=>{state.sponsors.delete(state.activePosition);synchronizeUI();});
$('logoUpload').addEventListener('change',async e=>{
  const position=state.activePosition,file=e.target.files?.[0];
  const img=await loadFile(file,true);if(!img)return;
  let s=state.sponsors.get(position);if(!s){s=defaultSponsor(position);state.sponsors.set(position,s);}
  s.type='logo';s.image=img;s.imageName=file.name.slice(0,45);makeArt(s);synchronizeUI();
});
$('removeLogo').addEventListener('click',()=>{modifyActive(s=>{s.image=null;s.imageName='';},true);$('logoUpload').value='';});
$('sponsorText').addEventListener('input',e=>modifyActive(s=>{s.type='text';s.text=e.target.value;},true));
$('fontFamily').addEventListener('change',e=>modifyActive(s=>s.font=e.target.value,true));
$('fontWeight').addEventListener('change',e=>modifyActive(s=>s.weight=e.target.value,true));
document.querySelectorAll('[data-tint]').forEach(b=>b.addEventListener('click',()=>modifyActive(s=>s.tint=b.dataset.tint,true)));
$('tintColor').addEventListener('input',e=>modifyActive(s=>{s.tint=e.target.value;s.customTint=e.target.value;},true));
for(const id of ['size','opacity'])$(''+id+'Range').addEventListener('input',e=>modifyActive(s=>s[id]=Number(e.target.value)));
$('rotationRange').addEventListener('input',e=>modifyActive(s=>s.rotation=normalizeAngle(Number(e.target.value))));
$('xRange').addEventListener('input',e=>modifyActive(s=>s.x=fromPercentX(Number(e.target.value))));
$('yRange').addEventListener('input',e=>modifyActive(s=>s.y=fromPercentY(Number(e.target.value))));
document.querySelectorAll('[data-nudge]').forEach(btn=>btn.addEventListener('click',()=>{
  const map={up:[0,-12],down:[0,12],left:[-12,0],right:[12,0]};
  const [dx,dy]=map[btn.dataset.nudge]||[0,0];
  nudgeActive(dx,dy);
}));
$('centerAreaBtn').addEventListener('click',resetActive);
document.querySelectorAll('[data-rotate-step]').forEach(btn=>btn.addEventListener('click',()=>rotateActive(Number(btn.dataset.rotateStep)||0)));
$('resetRotationBtn').addEventListener('click',()=>modifyActive(s=>s.rotation=0));
$('removeWhite').addEventListener('change',e=>modifyActive(s=>s.removeWhite=e.target.checked,true));
$('fabricEffect').addEventListener('change',e=>modifyActive(s=>s.fabric=e.target.checked,true));
$('resetBtn').addEventListener('click',resetActive);
$('resetAllBtn').addEventListener('click',()=>{
  state.sponsors.clear();state.activePosition='center';
  state.sponsors.set('center',defaultSponsor('center'));
  state.shirtImage=null;
  $('teamSearch').value='';$('shirtUpload').value='';$('logoUpload').value='';
  $('clearShirt').hidden=true;groupedTeams();changeTeam(DATA[0].id);
  makeArt(activeSponsor());synchronizeUI();
});
$('downloadBtn').addEventListener('click',()=>{
  try{
    const output=document.createElement('canvas');output.width=W;output.height=H;
    renderTo(output.getContext('2d',{alpha:false}),false);
    output.toBlob(blob=>{
      if(!blob){alert('Não foi possível gerar o PNG.');return;}
      const u=URL.createObjectURL(blob),a=document.createElement('a');
      a.href=u;
      const name=($('customName').value.trim()||state.team.name).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      a.download=`camisalab-${name||'simulacao'}.png`;a.click();
      setTimeout(()=>URL.revokeObjectURL(u),30000);
    },'image/png');
  }catch(err){console.error(err);alert('Erro ao exportar. Tente uma imagem local em PNG ou JPG.');}
});
state.sponsors.set('center',defaultSponsor('center'));
groupedTeams();changeTeam(DATA[0].id);synchronizeUI();
