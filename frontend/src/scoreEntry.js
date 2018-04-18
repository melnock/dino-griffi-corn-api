class ScoreEntry {
  constructor() {
    this.name = ""
    this.alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
    this.key1 = 0
    this.key2 = 0
    this.key3 = 0
    this.activeKey = "key1"
  }

  render() {
    twoD.fillStyle = "#06ff12"
    twoD.font = "20px monospace"
    twoD.fillText(alpha[this.key1], 230, 200)
    twoD.fillText(alpha[this.key2], 270, 200)
    twoD.fillText(alpha[this.key3], 310, 200)
  }
}
