// Hotpantst12 - Flores y corazones mágicos

window.addEventListener('DOMContentLoaded', () => {
  // Iniciar animación de flores
  setTimeout(() => {
    document.body.classList.remove("container");
  }, 200);

  // Inicializar efectos de fondo y partículas
  initNightSky();
  initTouchInteractiveHearts();
});

/**
 * Crea estrellas titilantes y luciérnagas doradas en el cielo nocturno
 */
function initNightSky() {
  const starsContainer = document.querySelector('.stars-container');
  const firefliesContainer = document.querySelector('.fireflies-container');

  if (starsContainer) {
    const starCount = window.innerWidth < 768 ? 45 : 85;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 2.5 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 80; // Principalmente en los 4/5 superiores
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 4;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.setProperty('--duration', `${duration}s`);
      star.style.animationDelay = `${delay}s`;

      starsContainer.appendChild(star);
    }
  }

  if (firefliesContainer) {
    const fireflyCount = window.innerWidth < 768 ? 14 : 24;
    for (let i = 0; i < fireflyCount; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';

      const x = Math.random() * 95 + 2.5;
      const y = Math.random() * 60 + 35; // Alrededor de las flores
      const durationFloat = Math.random() * 5 + 6;
      const durationGlow = Math.random() * 2 + 1.5;
      const delay = Math.random() * 6;

      firefly.style.left = `${x}%`;
      firefly.style.top = `${y}%`;
      firefly.style.setProperty('--d-float', `${durationFloat}s`);
      firefly.style.setProperty('--d-glow', `${durationGlow}s`);
      firefly.style.animationDelay = `${delay}s`;

      firefliesContainer.appendChild(firefly);
    }
  }
}

/**
 * Genera corazones o destellos interactivos al tocar la pantalla o hacer clic
 */
function initTouchInteractiveHearts() {
  const heartIcons = [
    '💖', '✨', '💛', '🌸', '💕'
  ];

  function createHeartAt(x, y) {
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'touch-particle';
      particle.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];

      const fontSize = Math.random() * 14 + 16;
      const vx = (Math.random() - 0.5) * 120;
      const vy = -(Math.random() * 90 + 50);
      const rot = (Math.random() - 0.5) * 60;

      particle.style.fontSize = `${fontSize}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--vx', `${vx}px`);
      particle.style.setProperty('--vy', `${vy}px`);
      particle.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    }
  }

  window.addEventListener('pointerdown', (e) => {
    // Evita generar partículas múltiples en clicks dobles accidentales
    createHeartAt(e.clientX, e.clientY);
  });
}