// uses pythagorean theorem to calculate distance
export function Dist(x1, x2, y1, y2) {
  let xdis = x2 - x1
  let ydis = y2 - y1
  return Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2))
}