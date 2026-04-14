function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

function abrirLink(url) {
  window.open(url, '_blank');
}

// animação ao aparecer na tela
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(30px)';
  observer.observe(card);
});

// resumo "Leia mais" no texto de apresentação (mobile)
const heroDescription = document.getElementById('hero-description');
const heroReadMoreBtn = document.getElementById('hero-read-more');

if (heroDescription && heroReadMoreBtn) {
  heroReadMoreBtn.addEventListener('click', () => {
    const isExpanded = heroDescription.classList.toggle('expanded');
    heroReadMoreBtn.textContent = isExpanded ? 'Ler menos' : 'Leia mais';
    heroReadMoreBtn.setAttribute('aria-expanded', String(isExpanded));
  });
}