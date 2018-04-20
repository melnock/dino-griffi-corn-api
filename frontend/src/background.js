class Background {
  constructor() {
    this.counter = 0
    this.sunY = 350
    this.cityY = 200
    this.skellY = 250
  }

  render(game) {
    twoD.drawImage(document.querySelector('#sky'), 0, 0, 640, 450)
    if (this.sunY > 80) {
      twoD.drawImage(document.querySelector('#skelinton'), 350, this.sunY -= 0.1, 200, 200)
    } else {
      twoD.drawImage(document.querySelector('#skelinton'), 350, this.sunY, 200, 200)
      this.level = 3
    }
    if (this.sunY > 80) {
      twoD.drawImage(document.querySelector('#sun'), 220, this.sunY -= 0.1, 200, 200)
    } else {
      twoD.drawImage(document.querySelector('#sun'), 220, this.sunY, 200, 200)
      this.level = 3
    }
    if (this.cityY > 100) {
      twoD.drawImage(document.querySelector('#city'), 0, this.cityY -= 0.1, 640, 150)
    } else {
      twoD.drawImage(document.querySelector('#city'), 0, this.cityY, 640, 150)
      this.level = Math.max(2, this.level)
    }

    twoD.lineWidth = "2"
    this.drawLine(0, 240, 640, 240)
    this.vertLine(320)
    twoD.lineWidth = "4";
    twoD.fillStyle="#420442"
    twoD.fillRect(0, 240, 640, 360);
    twoD.stroke();

    this.drawLine(280, 240, 130, 360)
    this.drawLine(240, 240, 0, 330)
    this.drawLine(360, 240, 510, 360)
    this.drawLine(400, 240, 640, 330)
  }

  vertLine(initial) {
    let diff = Math.pow((canvas.width/2) / initial, 3)
    twoD.beginPath()
    twoD.moveTo(initial, 240)
    twoD.lineTo((initial / diff), 360);
    twoD.stroke();
  }

  drawLine(x1, y1, x2, y2) {
    twoD.beginPath();
    twoD.moveTo(x1, y1)
    twoD.lineTo(x2, y2)
    twoD.strokeStyle = "#8cfffb"
    twoD.stroke();
  }
}
