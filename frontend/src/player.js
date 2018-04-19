class Player {
  constructor(character) {
    this.x = 250
    this.momentum = 0
    let img = document.createElement('img')
    img.setAttribute("id", "car");
    img.setAttribute("hidden", "true")
    img.setAttribute("src", character.sprites["back"])
    document.querySelector('.images').appendChild(img)
    this.keyLeft = false
    this.keyRight = false
    var audio = new Audio('audio/outrun.m4a');
    audio.play();
  }

  initEventListener(game) {
    document.addEventListener('keydown', e => {
      if (e.key == "ArrowLeft") {
        this.keyLeft = true
      } else if (e.key == "ArrowRight") {
        this.keyRight = true
      }
    })
    document.addEventListener('keyup', e => {
      if (e.key == "ArrowLeft") {
        this.keyLeft = false
      } else if (e.key == "ArrowRight") {
        this.keyRight = false
      }
    })
    document.addEventListener('keydown', e => {
      if (e.key == " ") {
        if (game.bomb_count > 0) {
          game.interval += 300
          Object.clear();
          game.bomb_count -= 1
        }
      }
    })
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

  render() {
    if (this.keyLeft) {
      if (this.momentum > 0) {
        this.momentum = -10
      }
      this.momentum = Math.max(-25, this.momentum - 4)
    } else if (this.keyRight) {
      if (this.momentum < 0) {
        this.momentum = 10
      }
      this.momentum = Math.min(25, this.momentum + 4)
    }
    this.x = this.clamp(this.x + this.momentum, 0, 540)
    if (this.momentum > 0) {
      this.momentum -= 2
    } else if (this.momentum < 0) {
      this.momentum += 2
    }
    twoD.drawImage(document.querySelector('#car'), this.x, 260, 100, 60)
  }
}
