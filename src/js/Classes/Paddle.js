import { canvas, c } from '../Canvas'

export default class Paddle {

  constructor(x, y, w, h, dy, color) {
    this.x = x ? x : 50
    this.y = y ? y : 100
    this.w = w ? w : 20
    this.h = h ? h : 300
    this.dy = dy ? dy : 30
    this.color = color ? color : '#000'
  }

  draw() {
    c.beginPath()
    c.rect(this.x, this.y, this.w, this.h)
    c.fillStyle = this.color
    c.fill()
  }

  up() {
    if (this.y <= 0) return
    this.y += -this.dy
    this.draw()
  }

  down() {
    if (this.y + this.h >= canvas.height) return
    this.y += this.dy
    this.draw()
  }

}