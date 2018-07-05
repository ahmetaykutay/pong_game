// get canvas
export const canvas = document.querySelector('#pong')

canvas.width = window.innerWidth
canvas.height = window.innerHeight * 0.85

let backgroundColor = "#666"
// callback for animation
let render_cb

// get context
export const c = canvas.getContext("2d")

export function render(cb) {
  render_cb = cb
  animate(cb)
}

function animate(cb) {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  // background
  c.beginPath();
  c.rect(0, 0, canvas.width, canvas.height);
  c.fillStyle = backgroundColor;
  c.fill();

  if (render_cb) render_cb()
}

