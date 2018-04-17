const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')


window.addEventListener('load', function() {

  function fetchCharacters(){
    fetch(`http://localhost:3000/api/v1/characters`)
      .then(r=>r.json())
      .then(json => {
        console.log(json)
        makeCharacters(json)
      })
  }

  function makeCharacters(json){
    json.forEach(char => new Character(char.name, char.sprites, char.bio, char.id))
  }
  // const game = new Game();
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
    const chooseCharacter = document.querySelector('#choose-character-screen')
    document.querySelector('#start-screen').style.display = 'none'
    chooseCharacter.style.display = 'inline'
    chooseCharacter.addEventListener('mouseover', displayCharacterBio)
    chooseCharacter.addEventListener('click', characterClick)

  }

  fetchCharacters()
  document.querySelector("#start-button-div").addEventListener('click', startGame)
})
