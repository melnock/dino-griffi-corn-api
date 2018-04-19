const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')



window.addEventListener('load', function() {

  Adapter.fetchItems()
  Adapter.fetchCharacters()


  function displayCharacterBio(e){
    const target = parseInt(e.target.id)
    let targetedCharacter = Character.all().find(char => (char.id == target))
    if (targetedCharacter != undefined){
      document.getElementById("character-bio").innerHTML = `<p>${targetedCharacter.bio}</p>`
    }else{
      document.getElementById("character-bio").innerHTML = ``
    }
  }

  function characterClick(e){
    const target = parseInt(e.target.id)
    let targetedCharacter = Character.all().find(char => (char.id == target))
    if (targetedCharacter != undefined){
      document.querySelector('#choose-character-screen').style.display = 'none'
      const game = new Game(targetedCharacter);
    }
  }

  function startGame(e){
    if (document.querySelector("#how-to-instructions")){
      document.querySelector("#how-to-instructions").remove()
    }
    const chooseCharacter = document.querySelector('#choose-character-screen')
    document.querySelector('#start-screen').style.display = 'none'
    chooseCharacter.style.display = 'inline'
    chooseCharacter.addEventListener('mouseover', displayCharacterBio)
    chooseCharacter.addEventListener('click', characterClick)
  }

  function renderInstructions(e){
    const howTo = document.createElement("img")
    howTo.id = "how-to-instructions"
    howTo.src = "img/how-to-instructions.png"
    document.body.append(howTo)
  }

  // fetchCharacters()
  document.querySelector("#how-to-div").addEventListener('click', renderInstructions)

  document.querySelector("#start-button-div").addEventListener('click', startGame)
})
