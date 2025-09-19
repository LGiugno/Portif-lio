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

  const feedbackSelect = document.querySelector('.page-feedback select');
  
  if (feedbackSelect) {
    feedbackSelect.addEventListener('mousedown', function() {
      const options = this.options;
      for (let i = 0; i < options.length; i++) {
        options[i].style.color = '#000000';
        options[i].style.backgroundColor = '#ffffff';
      }
    });
    
    feedbackSelect.addEventListener('change', function() {
      this.style.color = '#ffffff';
      this.style.backgroundColor = '#2a2a2a';
    });
    
    feedbackSelect.addEventListener('focus', function() {
      this.style.color = '#000000';
      this.style.backgroundColor = '#ffffff';
      
      const options = this.options;
      for (let i = 0; i < options.length; i++) {
        options[i].style.color = '#000000';
        options[i].style.backgroundColor = '#ffffff';
      }
    });
    
    feedbackSelect.addEventListener('blur', function() {
      this.style.color = '#ffffff';
      this.style.backgroundColor = '#2a2a2a';
    });
    
    setTimeout(() => {
      const options = feedbackSelect.options;
      for (let i = 0; i < options.length; i++) {
        options[i].style.color = '#000000';
      }
    }, 100);
  }
});
