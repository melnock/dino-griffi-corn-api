const objArr = []

class Object {
  constructor(initial, name, height, width) {
    initial > (canvas.width / 2) ? this.orientation = "right" : this.orientation = "left"
    this.name = name
    this.sprite = document.querySelector(`#${name}`)
    this.modifier = Math.abs(canvas.width / 2 - initial)
    this.ratio = height / width
    this.dist = 0
    this.height = height
    this.width = width
    this.x = initial
    this.y = 240 - height
  }

  static randObject(blueprint) {
    let object = new Object(Math.random() * 30 + 305, blueprint.name, blueprint.height, blueprint.width)
    objArr.unshift(object)
    return object
  }

  static palms() {
    let leftPalm = new Object(270, "vaporpalm", 20, 15, 0, 0)
    objArr.unshift(leftPalm)
    let rightPalm = new Object(360, "vaporpalm", 20, 15, 0, 0)
    objArr.unshift(rightPalm)
  }

  static all() {
    return objArr
  }

  static clear() {
    objArr.length = 0
  }

  render(game) {
    this.score += 1
    if (this.dist < 30) {
      twoD.drawImage(this.sprite, this.x, this.y, this.width, this.height)
      if (this.orientation == "right") {
        this.x += this.dist * (this.modifier / 40)

      } else {
        this.x -= this.dist * (this.modifier / 40)
      }
      this.y -= 0.3
      this.height += (this.dist * 0.2)
      this.width = this.height / this.ratio
      this.dist += 1
    }
    if (this.dist == 30) {
      this.dist = 31
      if (game.player.x + 50 > (this.x) && game.player.x + 50 < (this.x + this.width)) {
        console.log('hit')
        if (this.name == "star") {
          game.score += 100
          objArr.splice(-1, 1)
        } else if (this.name == "bomb") {
          game.bomb_count += 1
          objArr.splice(-1, 1)
        } else {
          game.health -= 1
          objArr.splice(-1, 1)
        }
        if (game.health < 0) {
          game.health = 0
          game.gameOverSequence()
        }

      }
    }
  }
}
