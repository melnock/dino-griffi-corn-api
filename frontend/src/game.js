
const backdrop = document.querySelector('#backdrop')
const background = new Background();

let interval = 1500
let postGameForm = document.createElement("form")
postGameForm.id = "game-over-form"


class Game {
  constructor(character) {
    this.player = new Player(character);
    this.score = 0
    this.health = 3
    this.player.initEventListener(this);
    this.intervalCanvas = setInterval(()=>(this.draw()), 70)
    this.intervalLines = setInterval(this.newLines, 400)
    this.bomb_count = 1
    this.items = Blueprint.all()
    this.level = 1
    this.interval = 1500
    this.incrementTime()
    setInterval(Object.palms, 600)
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

  incrementTime(){
    if (interval > 250){
      interval -= 15
    }
    for (let i = 0; i < this.level; i++) {
      this.addItem()
    }
    if (this.level != 0) {
        setTimeout(() => {this.incrementTime()}, interval)
    }
  }

  newLines() {
    let line = new HorizLine()
  }

  gameOverSequence(game){
    clearInterval(this.intervalCanvas)
    let score = new ScoreEntry()
    // twoD.drawImage(document.querySelector('#game-over'), 0, 0, 640, 360)
    score.render(game)

    function gameOver(e){

      if (e.key == "ArrowLeft") {
        score.activeKey = Math.max(0, score.activeKey - 1)
        score.render(game)
      } else if (e.key == "ArrowRight") {
        score.activeKey = Math.min(2, score.activeKey + 1)
        score.render(game)
      } else if (e.key == "ArrowUp") {
        score[`key${score.activeKey}`] = Math.min(26, score[`key${score.activeKey}`] + 1)
        score.render(game)
      } else if (e.key == "ArrowDown") {
        score[`key${score.activeKey}`] = Math.max(0, score[`key${score.activeKey}`] - 1)
        score.render(game)
      } else if (e.key == "Enter") {
        init()
        game.addUsername(`${score.alpha[score.key0]}${score.alpha[score.key1]}${score.alpha[score.key2]}`)
        Adapter.postScore(game)
        twoD.clearRect(0, 0, canvas.width, canvas.height)
        twoD.drawImage(document.querySelector('#game-over'), 0, 0, 640, 360)
        document.removeEventListener('keydown', gameOver)
          postGameForm.innerHTML='<img id="restart-button" src="img/start-button.png">'
          document.body.append(postGameForm)
          postGameForm.addEventListener('click', (e) => {
            e.preventDefault();
            document.location.reload()
          })
        }
      }
      document.addEventListener('keydown', gameOver )
    }
}
    // twoD.fillStyle = "#06ff12"

    // postGameForm.innerHTML = `<input type="text"></input><input type="submit"></input>`
    // document.body.append(postGameForm)
    // postGameForm.addEventListener('submit', (e)=>{
    //   e.preventDefault()
    //   game.addUsername(e.target[0].value)
    //   Adapter.postScore(game)

    // })
    // setTimeout(function(){document.location.reload()}, 60000)
//   }
// }
