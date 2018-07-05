import { canvas, c } from '../Canvas'
import { Dist } from '../util'

export default class Puck {
  handleWinner = null
  constructor(x, y, r, dx, dy, color, winnerFunc) {
    this.x = x ? x : canvas.width / 2
    this.y = y ? y : canvas.height / 2
    this.r = r ? r : 30
    this.dx = dx ? dx : 10
    this.dy = dy ? dy : 10
    this.color = color ? color : '#eee'
    this.handleWinner = winnerFunc ? winnerFunc : null
  }

  draw() {

    // draw
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  // move the puck
  move() {
    this.x += this.dx
    this.y += this.dy

    this.draw()
  }

  changeDirection(dr) {
    switch (dr) {
      case 'x':
        this.dx = -this.dx
        break
      case 'y':
        this.dy = -this.dy
        break
    }
  }

  checkWinner() {
    if (this.handleWinner) {
      if (this.dx > 0) {
        this.handleWinner('l')
      } else {
        this.handleWinner('r')
      }
    }

  }

  restart() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
  }

  checkWallCollision() {
    // handle left and right wall
    if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
      this.restart()
      this.checkWinner()
    }

    // handle top and bottom wall
    if (this.y + this.r > canvas.height || this.y < this.r) {
      this.changeDirection('y')
    }

  }

  checkPaddleCollition(paddle_x, paddle_y, paddle_h) {
    if (this.y > paddle_y && this.y < paddle_y + paddle_h) { // check y position
      const dist = Dist(this.x, paddle_x, this.y, this.y)
      if (dist <= this.r) { // check x position (distance)
        this.changeDirection('x')
      }
    }

    // c.beginPath()
    // c.moveTo(paddle_x, paddle_y)
    // c.lineTo(this.x, this.y)
    // c.strokeStyle = 'red'
    // c.stroke()

    // c.beginPath()
    // c.moveTo(this.x, this.y)
    // c.lineTo(paddle_y, this.y)
    // c.strokeStyle = 'orange'
    // c.stroke()

  }

} // end class Puck
