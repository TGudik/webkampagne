const canvas = document.createElement("canvas");
canvas.id = "mouseCanvas";
const hero = document.querySelector(".hero");
hero.appendChild(canvas);

const ctx = canvas.getContext("2d");
let width, height;
let heroRect = hero.getBoundingClientRect();

function resize() {
  heroRect = hero.getBoundingClientRect();
  width = canvas.width = heroRect.width;
  height = canvas.height = heroRect.height;
}
resize();
window.addEventListener("resize", resize);

const particles = [];
const COLORS = ["0, 103, 105", "255, 154, 54", "255, 102, 52"];

let pendingX = null,
  pendingY = null;

hero.addEventListener("mousemove", (e) => {
  pendingX = e.clientX - heroRect.left;
  pendingY = e.clientY - heroRect.top;
});

function animate() {
  ctx.clearRect(0, 0, width, height);

  if (pendingX !== null) {
    for (let i = 0; i < 2; i++) {
      particles.push({
        x: pendingX,
        y: pendingY,
        size: Math.random() * 7 + 2,
        alpha: 0.9,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: COLORS[Math.floor(Math.random() * 3)],
      });
    }
    pendingX = null;
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.035;
    p.size *= 0.94;

    if (p.alpha <= 0) {
      particles[i] = particles[particles.length - 1];
      particles.pop();
      continue;
    }

    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = `rgb(${p.color})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

animate();
