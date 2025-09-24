document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const body = document.body;

  function toggleMenu() {
    const isActive = mainNav.classList.contains('active');
    
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    mainNav.classList.add('active');
    navOverlay.classList.add('active');
    body.classList.add('no-scroll');
    menuToggle.innerHTML = '✕';
    menuToggle.style.color = '#fff';
  }

  function closeMenu() {
    mainNav.classList.remove('active');
    navOverlay.classList.remove('active');
    body.classList.remove('no-scroll');
    menuToggle.innerHTML = '☰';
    menuToggle.style.color = '';
  }

  if (menuToggle && mainNav && navOverlay) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(e) {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && mainNav.classList.contains('active')) {
        closeMenu();
      }
    });

    mainNav.addEventListener('click', function(e) {
      e.stopPropagation();
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
      const nome = this.querySelector('[name="nome"]').value;
      const email = this.querySelector('[name="email"]').value;
      const avaliacao = this.querySelector('[name="avaliacao"]').value;
      
      if (!nome || !email || !avaliacao) {
        e.preventDefault(); 
        feedbackResult.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        feedbackResult.style.color = '#ff6b6b';
        return;
      }
      
      feedbackResult.textContent = 'Enviando avaliação...';
      feedbackResult.style.color = '#4ecdc4';
      
      
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
      const fallbackSrc = this.getAttribute('onerror')?.match(/this\.src='([^']+)'/);
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

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
      closeMenu();
    }
  });

  console.log('Site carregado com sucesso! Menu mobile ativo e FormSubmit funcional.');
});
