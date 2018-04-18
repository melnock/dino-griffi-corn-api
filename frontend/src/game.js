
const backdrop = document.querySelector('#backdrop')
const background = new Background();
let interval = 1500

class Game {
  constructor(character) {
    this.player = new Player(character);
    this.score = 0
    this.health = 3
    this.player.initEventListener(this);
    this.intervalCanvas = setInterval(()=>(this.draw()), 70)
    this.intervalLines = setInterval(this.newLines, 200)
    this.bomb_count = 1
    this.items = Blueprint.all()
    setInterval(()=>(this.incrementTime()), interval)
    // autoBind(this)
    // setInterval(() => {this.addItem()}, 1500)
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
    // console.log(this)
    if (interval > 25){
      interval -= 500
      console.log(interval)
    }
    this.addItem()
  }

  newLines() {
    let line = new HorizLine()
  }

  gameOverSequence(game){
    clearInterval(this.intervalCanvas)
    let score = new ScoreEntry()
    score.render()

    document.addEventListener('keydown', e => {
      if (e.key == "ArrowLeft") {
        score.activeKey = Math.max(0, score.activeKey - 1)
        score.render()
      } else if (e.key == "ArrowRight") {
        score.activeKey = Math.min(2, score.activeKey + 1)
        score.render()
      } else if (e.key == "ArrowUp") {
        score[`key${score.activeKey}`] = Math.min(26, score[`key${score.activeKey}`] + 1)
        score.render()
      } else if (e.key == "ArrowDown") {
        score[`key${score.activeKey}`] = Math.max(0, score[`key${score.activeKey}`] - 1)
        score.render()
      } else if (e.key == "Enter") {
        this.addUsername(`${score.alpha[score.key0]}${score.alpha[score.key1]}${score.alpha[score.key2]}`)
        Adapter.postScore(this)
      }
    })
    // twoD.fillStyle = "#06ff12"

    // let postGameForm = document.createElement("form")
    // postGameForm.id = "game-over-form"
    // postGameForm.innerHTML = `<input type="text"></input><input type="submit"></input>`
    // document.body.append(postGameForm)
    // postGameForm.addEventListener('submit', (e)=>{
    //   e.preventDefault()
    //   game.addUsername(e.target[0].value)
    //   Adapter.postScore(game)
    //   postGameForm.innerHTML='<button id="restart-button"> New Game! </button>'
    //   postGameForm.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (e.target == document.querySelector("restart-button")){
    //       document.location.reload()
    //     }
    //   })
    // })
    // setTimeout(function(){document.location.reload()}, 60000)
  }
}
