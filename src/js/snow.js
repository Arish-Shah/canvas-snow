class Snowflake {
  constructor() {}
}

class Snow {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.onResize();
    window.addEventListener('resize', () => this.onResize());
    this.boundUpdate = this.update.bind(this);
    this.boundUpdate();
  }

  onResize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    console.log('resized');
  }

  update() {
    requestAnimationFrame(this.boundUpdate);
  }
}

new Snow();
