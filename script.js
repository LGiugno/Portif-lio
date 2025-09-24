document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');
  const body = document.body;
  
  function toggleMenu() {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    if (nav.classList.contains('active')) {
      btn.innerHTML = '✕';
    } else {
      btn.innerHTML = '☰';
    }
  }
  
  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
    btn.innerHTML = '☰';
  }
  
  if (btn && nav && overlay) {
    btn.addEventListener('click', toggleMenu);
    
    overlay.addEventListener('click', closeMenu);
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
  
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('#year, #year2').forEach(el => {
    if (el) el.textContent = currentYear;
  });
  
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackResult = document.getElementById('feedback-result');
  
  if (feedbackForm && feedbackResult) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      feedbackResult.textContent = 'Avaliação enviada com sucesso! Obrigado.';
      feedbackResult.style.color = '#4CAF50';
      
      setTimeout(() => {
        feedbackForm.reset();
        feedbackResult.textContent = '';
      }, 3000);
    });
  }
  
  const feedbackSelect = document.querySelector('.page-feedback select');
  
  if (feedbackSelect) {
    feedbackSelect.addEventListener('focus', function() {
      this.style.backgroundColor = '#2a2a2a';
      this.style.color = '#ffffff';
    });
    
    feedbackSelect.addEventListener('blur', function() {
      this.style.backgroundColor = '';
      this.style.color = '';
    });
  }
  
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      const fallbackSrc = this.getAttribute('onerror').match(/this\.src='([^']+)'/);
      if (fallbackSrc && fallbackSrc[1]) {
        this.src = fallbackSrc[1];
      } else {
        this.alt = 'Imagem não disponível';
        this.style.backgroundColor = '#f0f0f0';
        this.style.minHeight = '150px';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.color = '#666';
        this.innerHTML = 'Imagem não disponível';
      }
    });
  });
});
