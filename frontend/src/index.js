const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')


window.addEventListener('load', function() {

  // const game = new Game();
  function displayCharacterBio(e){
    console.log(e)
    const target = e.target.id
    fetch(`http://localhost:3000/api/v1/characters/${target}`)
      .then(r=>r.json)
      .then(json => {
        let char = new Character(json.name, json.sprites, json.bio, json.id)
        document.getElementById("character-bio").innerHTML = `<p>${char.bio}</p>`
      })
  }

  function startGame(e){
    const chooseCharacter = document.querySelector('#choose-character-screen')
    document.querySelector('#start-screen').style.display = 'none'
    chooseCharacter.style.display = 'inline'
    chooseCharacter.addEventListener('mouseover', displayCharacterBio)
  }


  document.querySelector("#start-button-div").addEventListener('click', startGame)
})
