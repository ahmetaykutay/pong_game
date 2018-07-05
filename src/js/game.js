import { render, canvas, c } from './Canvas'
import Puck from "./Classes/Puck"
import Paddle from './Classes/Paddle'
import { Dist } from './util'
import Events from './Events'


// initial game state
const state = {
  player_1: 0,
  player_2: 0,
}

// initialize
const puck = new Puck(null, null, 30, 5, 5, null, handleScore)
const paddle_l = new Paddle(null, null, null, 300)
const paddle_r = new Paddle(canvas.width - 50, null, null, 300)

// Create the event.
// var game_events = new Events

// score handler
function handleScore(winner) {
  if (winner === 'l') {
    state.player_1++
  } else if (winner = 'r') {
    state.player_2++
  }
  Events.emit('score', state)
}

// controls
function keyHandler(e) {
  switch (e.key) {
    case 'w':
      paddle_l.up()
      break
    case 's':
      paddle_l.down()
      break
    case 'i':
      paddle_r.up()
      break
    case 'k':
      paddle_r.down()
      break
  }
}

// callback for render function in canvas.js
function gameStarted() {
  puck.move()

  // paddle_l.w added to x because paddle rect starts top left corner
  puck.checkPaddleCollition(paddle_l.x + paddle_l.w, paddle_l.y, paddle_l.h)
  puck.checkPaddleCollition(paddle_r.x, paddle_r.y, paddle_r.h)

  puck.checkWallCollision()

  paddle_l.draw()
  paddle_r.draw()
}

export default {
  state: state,
  init: () => {
    // set keyboard events for paddles
    window.addEventListener("keydown", keyHandler)
  },
  start: () => {
    // render to canvas
    render(gameStarted)
  }
}