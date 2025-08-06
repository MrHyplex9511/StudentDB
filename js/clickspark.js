// js/clickspark.js
document.addEventListener('click', function (e) {
  const count = 8; // number of sparks
  for (let i = 0; i < count; i++) {
    createSpark(e.clientX, e.clientY);
  }
});

function createSpark(x, y) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  const size = Math.random() * 8 + 6; // 6–14px
  sparkle.style.width = sparkle.style.height = size + 'px';
  sparkle.style.left = x - size / 2 + 'px';
  sparkle.style.top = y - size / 2 + 'px';
  document.body.appendChild(sparkle);
  
  // random velocity
  const angle = Math.random() * 2 * Math.PI;
  const dist = Math.random() * 60 + 20;
  sparkle.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;

  sparkle.addEventListener('animationend', () => sparkle.remove());
}
