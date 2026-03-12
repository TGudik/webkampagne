const canvas = document.createElement("canvas");
canvas.id = "mouseCanvas";
const hero = document.querySelector(".hero");
hero.appendChild(canvas);

const ctx = canvas.getContext("2d");
let width, height;

function resize() {
  const rect = hero.getBoundingClientRect();
  width = canvas.width = rect.width;
  height = canvas.height = rect.height;
}
resize();
window.addEventListener("resize", resize);

const particles = [];

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  for (let i = 0; i < 3; i++) {
    particles.push({
      x,
      y,
      size: Math.random() * 8 + 3,
      alpha: 1,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      color: ["0, 103, 105", "255, 154, 54", "255, 102, 52"][Math.floor(Math.random() * 3)],
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.03;
    p.size *= 0.95;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = `rgba(${p.color}, 0.6)`;
    ctx.fill();
  }

  ctx.shadowBlur = 0;
  requestAnimationFrame(animate);
}

animate();
