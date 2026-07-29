document.addEventListener('DOMContentLoaded', () => {
  // === MENU MOBILE ===
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('nav-overlay');

  function openMenu() {
    nav.classList.add('active');
    overlay.classList.add('active');
    toggle.classList.add('active');
    document.body.classList.add('no-scroll');
  }
  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  if (toggle && nav && overlay) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.contains('active') ? closeMenu() : openMenu();
    });
    overlay.addEventListener('click', closeMenu);
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) closeMenu();
    });
  }

  // === ANO DINÂMICO ===
  document.querySelectorAll('#year, #year2').forEach(el => {
    if (el) el.textContent = new Date().getFullYear();
  });

  // === ANIMAÇÕES AO ROLAR (SCROLL) ===
  const animatedEls = document.querySelectorAll('[data-animate]');
  if (animatedEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    animatedEls.forEach(el => observer.observe(el));
  }

  // === FILTRO DE PROJETOS ===
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // === FORMULÁRIO DE FEEDBACK ===
  const form = document.getElementById('feedback-form');
  const result = document.getElementById('feedback-result');
  if (form && result) {
    form.addEventListener('submit', function (e) {
      const nome = this.querySelector('[name="nome"]').value;
      const email = this.querySelector('[name="email"]').value;
      const avaliacao = this.querySelector('[name="avaliacao"]').value;
      if (!nome || !email || !avaliacao) {
        e.preventDefault();
        result.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        result.style.color = '#f87171';
        return;
      }
      result.textContent = 'Enviando avaliação...';
      result.style.color = '#4ade80';
    });
  }
});