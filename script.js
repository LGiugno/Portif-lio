document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{ 
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; 
    });
  }
  const y = new Date().getFullYear(); document.querySelectorAll('#year, #year2').forEach(el=>{ if(el) el.textContent = y; });
});