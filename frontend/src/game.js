
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

  addUsername(username){
    this.username = username
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
  }

  newLines() {
    let line = new HorizLine()
  }

  gameOverSequence(game){
    twoD.drawImage(document.querySelector('#game-over'), 0, 0, 640, 360)
    twoD.fillStyle = "#06ff12"
    twoD.fillText(`You got ${game.score} points!`, 200, 160)
    twoD.fillText(`Add your initials to the leaderboard!`, 120, 190)
    let postGameForm = document.createElement("form")
    postGameForm.id = "game-over-form"
    postGameForm.innerHTML = `<input type="text"></input><input type="submit"></input>`
    document.body.append(postGameForm)
    postGameForm.addEventListener('submit', (e)=>{
      e.preventDefault()
      game.addUsername(e.target[0].value)
      Adapter.postScore(game)
      postGameForm.innerHTML='<button id="restart-button"> New Game! </button>'
      postGameForm.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target == document.querySelector("restart-button")){
          document.location.reload()
        }
      })
    })
    // setTimeout(function(){document.location.reload()}, 60000)
  }
}
