class Snowflake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xv = 0;
    this.yv = 0;
    this.radius = 0;
    this.alpha = 0;
    this.reset();
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth);
    this.y = this.randBetween(0, -window.innerHeight);
    this.xv = this.randBetween(-2, 2);
    this.yv = this.randBetween(2, 5);
    this.radius = this.randBetween(1, 4);
    this.alpha = this.randBetween(0.1, 0.8);
  }

  randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  update() {
    this.x += this.xv;
    this.y += this.yv;

    if (this.y + this.radius > window.innerHeight) {
      this.reset();
    }
  }
}

class Snow {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.onResize();
    window.addEventListener('resize', () => this.onResize());
    this.boundUpdate = this.update.bind(this);

    this.createFlakes();
    this.boundUpdate();
  }

  onResize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.canvas.height = this.height;
    this.canvas.width = this.width;
  }

  createFlakes() {
    this.flakes = window.innerWidth / 4;
    this.snowflakes = [];

    for (let s = 0; s < this.flakes; s++) {
      this.snowflakes.push(new Snowflake());
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const flake of this.snowflakes) {
      flake.update();

      this.ctx.fillStyle = '#FFF';
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.globalAlpha = flake.alpha;
      this.ctx.fill();
      this.ctx.restore();
    }

    requestAnimationFrame(this.boundUpdate);
  }
}

new Snow();
