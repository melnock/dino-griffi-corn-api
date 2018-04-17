const car = new Car({back: "img/outrun.png"});
const backdrop = document.querySelector('#backdrop')
const background = new Background();


class Game {
  constructor() {
    this.score = 0
    this.health = 3
    car.initEventListener();
    setInterval(() => {this.draw()}, 100)
    setInterval(this.newLines, 200)
    setInterval(() => {Object.randObject("tree", 15, 15, 100, 230)}, 1500)
    setInterval(() => {Object.randObject("crystal", 15, 12, 0, 400)}, 2100)
    setInterval(() => {Object.randObject("star", 0, 0, 0, 130)}, 2700)
  }
  draw() {
    this.score += 1
    twoD.clearRect(0, 0, canvas.width, canvas.height)
    background.render()
    HorizLine.all().map(line => line.render())
    Object.all().map(object => object.render(this))
    car.render()
    document.querySelector("#score").innerText = this.score
    document.querySelector("#health").innerText = this.health
  }

  newLines() {
    let line = new HorizLine()
  }
}
