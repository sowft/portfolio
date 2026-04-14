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

// resumo "Leia mais" (mobile — ver CSS max-width 820px)
function setupReadMore(textEl, btnEl) {
  if (!textEl || !btnEl) return;
  btnEl.addEventListener('click', () => {
    const isExpanded = textEl.classList.toggle('expanded');
    btnEl.textContent = isExpanded ? 'Ler menos' : 'Leia mais';
    btnEl.setAttribute('aria-expanded', String(isExpanded));
  });
}

setupReadMore(
  document.getElementById('hero-description'),
  document.getElementById('hero-read-more')
);

setupReadMore(
  document.getElementById('sobre-text'),
  document.getElementById('sobre-read-more')
);