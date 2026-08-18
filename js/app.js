const novelList=document.getElementById("novelList");
const dramaList=document.getElementById("dramaList");
const modal=document.getElementById("modal");
const modalBody=document.getElementById("modalBody");
const reader=document.getElementById("reader");
const readerBody=document.getElementById("readerBody");
const readerTitle=document.getElementById("readerTitle");

function renderNovels(list){
  novelList.innerHTML=list.map(n=>`
    <div class="card" onclick="openNovel(${n.id})">
      <h3>${n.title}</h3>
      <p>👤 ${n.author} · ⭐ ${n.score}</p>
      <p>📈 ${n.popularity}</p>
      <span class="tag">${n.tag}</span>
    </div>
  `).join("");
}
function renderDramas(list){
  dramaList.innerHTML=list.map(d=>`
    <div class="card" onclick="openDrama(${d.id})">
      <h3>${d.title}</h3>
      <p>⭐ ${d.score} · 📈 ${d.popularity}</p>
      <span class="tag">${d.tag}</span>
    </div>
  `).join("");
}
function openNovel(id){
  const n=NOVELS.find(x=>x.id===id);
  modalBody.innerHTML=`<h2>${n.title}</h2><p><b>作者：</b>${n.author}</p><p><b>简介：</b>${n.desc}</p><button onclick="startRead(${id})" style="margin-top:12px;padding:8px 16px;background:#4f46e5;color:#fff;border:none;border-radius:8px;cursor:pointer">📖 开始阅读</button>`;
  modal.style.display="flex";
}
function openDrama(id){
  const d=DRAMAS.find(x=>x.id===id);
  modalBody.innerHTML=`<h2>${d.title}</h2><p><b>简介：</b>${d.desc}</p><a href="${d.link}" target="_blank" style="display:inline-block;margin-top:12px;padding:8px 16px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none">▶️ 立即观看</a>`;
  modal.style.display="flex";
}
function startRead(id){
  const n=NOVELS.find(x=>x.id===id);
  readerTitle.innerText=n.title;
  readerBody.innerText=n.content;
  modal.style.display="none";
  reader.style.display="flex";
}
document.getElementById("modalClose").onclick=()=>modal.style.display="none";
document.getElementById("readerClose").onclick=()=>reader.style.display="none";

document.getElementById("searchInput").oninput=e=>{
  const k=e.target.value.toLowerCase();
  renderNovels(NOVELS.filter(n=>n.title.toLowerCase().includes(k)||n.author.toLowerCase().includes(k)));
  renderDramas(DRAMAS.filter(d=>d.title.toLowerCase().includes(k)));
};

document.getElementById("menuBtn").onclick=()=>{
  const m=document.getElementById("navMenu");
  m.style.display=m.style.display==="flex"?"none":"flex";
};

renderNovels(NOVELS);
renderDramas(DRAMAS);

document.getElementById("novelRank").innerHTML=NOVELS.sort((a,b)=>b.score-a.score).slice(0,10).map(n=>`<li>${n.title}（${n.score}）</li>`).join('');
document.getElementById("dramaRank").innerHTML=DRAMAS.sort((a,b)=>b.score-a.score).slice(0,10).map(d=>`<li>${d.title}（${d.score}）</li>`).join('');

const observer=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    document.getElementById("novelCount").innerText=NOVELS.length;
    document.getElementById("dramaCount").innerText=DRAMAS.length;
    document.getElementById("tagCount").innerText=TAGS.length;
  }
});
observer.observe(document.querySelector(".stats"));
