var ww = window.innerWidth,
  wh = window.innerHeight,
  canvas = document.getElementById("scene"),
  ctx = canvas.getContext("2d"),
  amount = 3000,
  mouse = {
    x: null,
    y: null
  },
  particles = []
colors = ["red", "yellow", "green", "cyan", "pink", "#82B73F", "#02DFF4", "#006573", "#005572"];

ctx.canvas.width = ww;
ctx.canvas.height = wh;

function init() {
  for (var i = 0; i < amount; i++) {
    particles.push(new Particle(i));
  }

  window.addEventListener("click", reset);
  window.addEventListener("mousemove", onMouseMove);
  window.onresize = onResize;

  requestAnimationFrame(render);
}

function Particle(i) {

  this.x = ((ww / amount) * i) + ((Math.random() - 0.5) * 100);
  this.y = Math.random() * wh;
  this.speed = Math.random() / 1 + 0.01;
  this.radius = (Math.random() * 2 + 1) / 5;
  this.colour = "hsl(" + ((360 / amount) * i) + ",30%,30%)";
  this.colour = colors[Math.floor(this.x / (ww / 5))];

  return this;

}

Particle.prototype.render = function(a) {

  ctx.fillStyle = this.colour;
  if (mouse.x) {
    var dist = distance(mouse.x, mouse.y, this.x, this.y);
  }
  if (dist < 90) {
    drawLine(this.x, this.y, this.colour);
  }
  this.y += this.speed;
  if (this.y >= (wh + this.radius)) {
    this.y = (-this.radius);
  }
  this.radius = this.radius;
  ctx.globalAlpha = 0.05;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 3, false);
  ctx.fill();

}

function drawLine(x, y, colour) {
  ctx.strokeStyle = colour;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function distance(x1, y1, x3, y3) {
  var xs = x3 - x1;
  xs *= xs;

  var ys = y3 - y1;
  ys *= ys;

  return Math.sqrt(xs + ys);
}

function reset() {
  ctx.clearRect(0, 0, ww, wh);
};

function onResize() {
  ww = window.innerWidth;
  wh = window.innerHeight;
  ctx.canvas.width = ww;
  ctx.canvas.height = wh;
};

function onMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

function render(a) {
  requestAnimationFrame(render);

  for (var i = 0; i < amount; i++) {
    particles[i].render(a);
  }
};

init();