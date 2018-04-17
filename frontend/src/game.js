
const backdrop = document.querySelector('#backdrop')
const background = new Background();


class Game {
  constructor(character) {
    this.player = new Player(character);
    this.score = 0
    this.health = 3
    this.player.initEventListener();
    setInterval(() => {this.draw()}, 70)
    setInterval(this.newLines, 200)
    this.items = Blueprint.all()
    setInterval(() => {this.addItem()}, 1500)
  }

  addItem() {
    this.items[Math.floor(Math.random()*this.items.length)].instantiate()
    // console.log(this.items)
    // this.items[2].instantiate()
  }

  draw() {
    // this.items.map(item => item.instantiate())
    this.score += 1
    twoD.clearRect(0, 0, canvas.width, canvas.height)
    background.render()
    HorizLine.all().map(line => line.render())
    Object.all().map(object => object.render(this))
    this.player.render()
    document.querySelector("#score").innerText = this.score
    document.querySelector("#health").innerText = this.health
  }

  newLines() {
    let line = new HorizLine()
  }
}
