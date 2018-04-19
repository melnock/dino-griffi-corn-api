const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let body = document.querySelector("body")
  let input = []

  function konami (e){
    let f = parseInt(e.which||e.detail)
    if (input===[]){
      if(code.includes(f)){
        input.push(f)
      }
      else{ input = []}
    }
    else if (code[input.length]===f){
      input.push(f)
      console.log(input)
      console.log(input == code)
      if (input.join() === code.join()){
       let egg = new EasterEgg
       // egg.draw()
      }
    }
    else{
      input = []
    }

  }

  body.addEventListener("keydown", konami)


}
