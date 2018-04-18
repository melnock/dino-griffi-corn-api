
const backdrop = document.querySelector('#backdrop')
const background = new Background();


class Game {
  constructor(character) {
    this.player = new Player(character);
    this.score = 0
    this.health = 3
    this.player.initEventListener(this);
    this.intervalCanvas = setInterval(() => {this.draw()}, 70)
    this.intervalLines = setInterval(this.newLines, 200)
    this.bomb_count = 1
    this.items = Blueprint.all()
    setInterval(() => {this.addItem()}, 1500)
  }

  addItem() {
    this.items[Math.floor(Math.random()*this.items.length)].instantiate()
    // console.log(this.items)
    // this.items[2].instantiate()
  }

  renderHealth() {
    twoD.fillStyle = "#06ff12"
    twoD.font = "20px monospace"
    twoD.fillText("Health", 10, 20)
    twoD.fillRect(20, 30, this.health * 30, 20)
  }

  renderScore() {
    twoD.fillStyle = "#06ff12"
    twoD.font = "20px monospace"
    twoD.fillText("Score", 500, 20)
    twoD.fillText(this.score, 500, 40)
  }

  renderBombs() {
    twoD.fillStyle = "#06ff12"
    twoD.font = "20px monospace"
    twoD.fillText("Bombs", 250, 20)
    twoD.fillText(this.bomb_count, 250, 40)
  }

  draw() {
    // this.items.map(item => item.instantiate())
    this.score += 1
    twoD.clearRect(0, 0, canvas.width, canvas.height)
    background.render()
    this.renderHealth()
    this.renderBombs()
    this.renderScore()
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
