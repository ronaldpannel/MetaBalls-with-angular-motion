

class Ball {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.dirX = Math.random() * -0.5
    this.dirY = Math.random() * -0.5;
    this.r = Math.random() * 80 + 10;
    this.angle = 0
    this.hue = 10
    this.vA = Math.random() * 0.1 - 0.05
    this.range = Math.random() * 20
    this.color = 'hsl('+ this.hue +',100%, 100%)'
  }
  edges(){
    if(this.x >= canvas.width - this.r || this.x <= 0 + this.r){
      this.dirX = this.dirX * -1
    }
    if (this.y >= canvas.height - this.r || this.y <= 0 + this.r) {
      this.dirY = this.dirY * -1;
    }
  }
  update() {
    this.angle += this.vA
    this.x += this.dirX * Math.sin(this.angle) * this.range
    this.y += this.dirY * Math.cos(this.angle) * this.range;
   
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
