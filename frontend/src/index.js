const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')


window.addEventListener('load', function() {

  // const start = new Start();
  // start.render()

  // const game = new Game();
  function displayCharacterBio(e){
    
  }

  function startGame(e){
    const chooseCharacter = document.querySelector('#choose-character-screen')
    document.querySelector('#start-screen').style.display = 'none'
    chooseCharacter.style.display = 'inline'
    chooseCharacter.addEventListener('hover', displayCharacterBio)
  }


  document.querySelector("#start-button-div").addEventListener('click', startGame)
})
