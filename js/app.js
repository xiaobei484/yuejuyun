const $ = id => document.getElementById(id);

const novelList = $('novelList');
const dramaList = $('dramaList');
const modal = $('modal');
const modalBody = $('modalBody');
const reader = $('reader');
const readerBody = $('readerBody');
const readerTitle = $('readerTitle');

function renderNovels(list){
  novelList.innerHTML = list.map(n=>`
    <div class="card" onclick="openNovel(${n.id})">
      <h3>${n.title}</h3>
      <p>👤 ${n.author} · ⭐ ${n.score}</p>
      <p>📈 ${n.popularity}</p>
      <span class="tag">${n.tag}</span>
    </div>
  `).join('');
}

function renderDramas(list){
  dramaList.innerHTML = list.map(d=>`
    <div class="card" onclick="openDrama(${d.id})">
      <h3>${d.title}</h3>
      <p>⭐ ${d.score} · 📈 ${d.popularity}</p>
      <span class="tag">${d.tag}</span>
    </div>
  `).join('');
}

function openNovel(id){
  const n = NOVELS.find(x=>x.id===id);
  modalBody.innerHTML = `
    <h2>${n.title}</h2>
    <p><b>作者：</b>${n.author}</p>
    <p><b>评分：</b>${n.score}</p>
    <p><b>简介：</b>${n.desc}</p>
    <button onclick="startRead(${id})" style="margin-top:12px;padding:8px 16px;background:#4f46e5;color:#fff;border:none;border-radius:8px;cursor:pointer">📖 开始阅读</button>
  `;
  modal.style.display = 'flex';
}

function openDrama(id){
  const d = DRAMAS.find(x=>x.id===id);
  modalBody.innerHTML = `
    <h2>${d.title}</h2>
    <p><b>评分：</b>${d.score}</p>
    <p><b>简介：</b>${d.desc}</p>
    <a href="${d.link}" target="_blank" style="display:inline-block;margin-top:12px;padding:8px 16px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none">▶️ 立即观看</a>
  `;
  modal.style.display = 'flex';
}

function startRead(id){
  const n = NOVELS.find(x=>x.id===id);
  readerTitle.innerText = n.title;
  readerBody.innerText = n.content;
  modal.style.display = 'none';
  reader.style.display = 'flex';
}

$('modalClose').onclick = ()=>modal.style.display='none';
$('readerClose').onclick = ()=>reader.style.display='none';

$('searchInput').oninput = e=>{
  const k = e.target.value.toLowerCase();
  renderNovels(NOVELS.filter(n=>n.title.toLowerCase().includes(k)||n.author.toLowerCase().includes(k)));
  renderDramas(DRAMAS.filter(d=>d.title.toLowerCase().includes(k)));
};

$('menuBtn').onclick = ()=>{
  const m = $('navMenu');
  m.style.display = m.style.display==='flex'?'none':'flex';
};

renderNovels(NOVELS);
renderDramas(DRAMAS);

// 排行榜
const novelRank = $('novelRank');
const dramaRank = $('dramaRank');
novelRank.innerHTML = NOVELS.sort((a,b)=>b.score-a.score).slice(0,10).map(n=>`<li>${n.title}（${n.score}）</li>`).join('');
dramaRank.innerHTML = DRAMAS.sort((a,b)=>b.score-a.score).slice(0,10).map(d=>`<li>${d.title}（${d.score}）</li>`).join('');
