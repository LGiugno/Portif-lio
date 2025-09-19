document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');
  
  if (!overlay && btn) {
    const newOverlay = document.createElement('div');
    newOverlay.className = 'nav-overlay';
    btn.parentNode.appendChild(newOverlay);
  }
  
  if (btn && nav) {
    btn.addEventListener('click', () => { 
      nav.classList.toggle('active');
      const currentOverlay = document.querySelector('.nav-overlay');
      if (currentOverlay) {
        currentOverlay.classList.toggle('active');
      }
      btn.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    });
    
    const currentOverlay = document.querySelector('.nav-overlay');
    if (currentOverlay) {
      currentOverlay.addEventListener('click', () => {
        nav.classList.remove('active');
        currentOverlay.classList.remove('active');
        if (btn) {
          btn.innerHTML = '☰';
        }
      });
    }
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        const currentOverlay = document.querySelector('.nav-overlay');
        if (currentOverlay) {
          currentOverlay.classList.remove('active');
        }
        if (btn) {
          btn.innerHTML = '☰';
        }
      });
    });
  }
  
  const y = new Date().getFullYear(); 
  document.querySelectorAll('#year, #year2').forEach(el => { 
    if (el) el.textContent = y; 
  });
});
