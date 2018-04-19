
var x = canvas.width/2 - 20;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

var brickRowCount = 4;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var myArray = ["#06ff12", "#06ff12", "#06ff12", "#06ff12", "#06ff12", "#06ff12", "#06ff12", "#8BC900", "#80ba27"]


var score = 0;
var lives = 3;


var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
class EasterEgg{
  constructor(){
    this.gameFlow = setInterval(()=>{this.draw()},10)
  }
   drawScore(){
    twoD.font = "16px monospace";
    twoD.fillStyle = "#06ff12";
    twoD.fillText("Score: " + score, 8 , 20);
  }

   drawBricks() {
      for(c=0; c<brickColumnCount; c++) {
          for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1){
              var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
              var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              twoD.beginPath();
              twoD.rect(brickX, brickY, brickWidth, brickHeight);
              twoD.fillStyle = myArray[Math.floor(Math.random() * myArray.length)];
              twoD.fill();
              twoD.closePath();
            }
          }
      }
  }

   collisionDetection() {
      for(c=0; c<brickColumnCount; c++) {
          for(r=0; r<brickRowCount; r++) {
              var b = bricks[c][r];
              if(b.status == 1) {
                  if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                      dy = -dy;
                      b.status = 0;
                      ++score;
                      if(score == brickRowCount*brickColumnCount) {
                         let win = document.createElement('p')
                         win.innerText = "You've won the game!"
                         document.querySelector('#game-over-form').prepend(win)
                         clearInterval(this.gameFlow);
                       }
                  }
              }
          }
      }
  }

   drawLives() {
      twoD.font = "16px monospace";
      twoD.fillStyle = "#06ff12";
      twoD.fillText("Lives: "+lives, canvas.width-95, 20);
  }

   drawBall(){
    //ball
    twoD.beginPath();
    twoD.arc(x, y, ballRadius, 0, Math.PI*2);
    twoD.fillStyle = "#06ff12";
    twoD.fill();
    twoD.closePath();
  }

   drawPaddle(){
    twoD.beginPath();
    twoD.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    twoD.fillStyle = "#06ff12";
    twoD.fill();
    twoD.closePath();
  }

   keyDownHandler(e){
    if (e.keyCode === 39){
      rightPressed = true
    }
    else if (e.keyCode === 37) {
      leftPressed = true
    }
  }

   keyUpHandler(e){
    if (e.keyCode == 39) {
      rightPressed = false;
    }
    else if (e.keyCode == 37) {
      leftPressed = false
    }
  }

   draw(){
    //clear canvas
    twoD.clearRect(0,0, canvas.width, canvas.height)
    background.render()
    this.drawBricks()
    this.drawBall()
    this.drawPaddle()
    this.collisionDetection()
    this.drawScore()
    this.drawLives()
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
      if(x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
      }
      else {
        lives--;
        if(!lives) {
          let lose = document.createElement('p')
          lose.innerText = "You've lost the game!"
          document.querySelector('#game-over-form').prepend(lose)
          clearInterval(this.gameFlow);        }
        else {
          x = canvas.width/2;
          y = canvas.height-30;
          dx = 2;
          dy = -2;
          paddleX = (canvas.width-paddleWidth)/2;
        }
      }
    }
    if (x+dx < ballRadius || x + dx >canvas.width-ballRadius){
      dx= -dx
    }
    x += dx
    y += dy

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
  }
}
document.addEventListener("keydown", EasterEgg.prototype.keyDownHandler, false);
document.addEventListener("keyup", EasterEgg.prototype.keyUpHandler, false);
