window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader').classList.add('hide'),700));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const header=document.querySelector('.site-header'),menu=document.querySelector('.menu');
menu.addEventListener('click',()=>{const o=header.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
const filterBtns=document.querySelectorAll('.filters button'),items=document.querySelectorAll('.portfolio button');
filterBtns.forEach(b=>b.addEventListener('click',()=>{filterBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;items.forEach(i=>i.classList.toggle('hide',f!=='all'&&i.dataset.category!==f))}));
const lb=document.querySelector('.lightbox'),lbi=lb.querySelector('img');
items.forEach(i=>i.addEventListener('click',()=>{lbi.src=i.dataset.src;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));
function close(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbi.src=''}
lb.querySelector('button').addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
