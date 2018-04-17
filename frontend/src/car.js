class Car {
  constructor(sprite) {
    this.x = 250
    let img = document.createElement('img')
    img.setAttribute("id", "car");
    img.setAttribute("hidden", "true")
    img.setAttribute("src", sprite["back"])
    document.querySelector('.images').appendChild(img)
  }

  initEventListener() {
    document.addEventListener('keydown', e => {
      if (e.key == "ArrowLeft") {
        this.x -= 10
      } else if (e.key == "ArrowRight") {
        this.x += 10
      }
    })
  }

  render() {
    twoD.drawImage(document.querySelector('#car'), this.x, 300, 100, 60)
  }
}
