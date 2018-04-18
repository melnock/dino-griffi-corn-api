const lines = []

class HorizLine {
  constructor() {
    this.y = 240
    this.dist = 1
    this.width = 0
    lines.push(this)
  }

  render() {
    twoD.lineWidth = this.width += 0.2
    twoD.beginPath()
    twoD.moveTo(0, this.y)
    twoD.lineTo(640, this.y)
    twoD.stroke()
    this.y += this.dist
    this.dist += 0.2
  }

  static all() {
    return lines
  }
}
