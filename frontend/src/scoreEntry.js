class ScoreEntry {
  constructor() {
    this.name = ""
    this.alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
    this.key0 = 0
    this.key1 = 0
    this.key2 = 0
    this.activeKey = 0
  }

  render(game) {
    let score = game.score
    twoD.font = "20px monospace"
    twoD.drawImage(document.querySelector('#game-over'), 0, 0, 640, 360)
    twoD.fillText(`You got ${score} points!`, 200, 160)
    twoD.fillText(`Add your initials to the leaderboard!`, 120, 190)
    twoD.fillStyle = "#06ff12"
    twoD.font = "60px monospace"
    twoD.fillText(this.alpha[this.key0], 230, 260)
    twoD.fillText(this.alpha[this.key1], 290, 260)
    twoD.fillText(this.alpha[this.key2], 350, 260)
    if (this.activeKey === 0) {
      twoD.fillRect(230, 280, 35, 5)
    } else if (this.activeKey === 1) {
      twoD.fillRect(290, 280, 35, 5)
    } else {
      twoD.fillRect(350, 280, 35, 5)
    }
  }
}
