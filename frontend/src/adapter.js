url = "http://localhost:3000/api/v1/"
class Adapter {
  static fetchItems() {
    fetch(url + "items").then(r => r.json()).then(json => json.map(item => new Blueprint(item)))
  }

  static fetchCharacters(){
    fetch(`http://localhost:3000/api/v1/characters`)
      .then(r=>r.json())
      .then(json => {
        Adapter.makeCharacters(json)
      })
  }
  static makeCharacters(json){
    json.forEach(char => new Character(char.name, char.sprites, char.bio, char.id))
  }

  static postScore(game){
    fetch(url+"games",
      {method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(
        {username: game.username, score: game.score}
      )})
        .then(r=>r.json()).then(console.log)
  }

  // static fetchGames(){
  //   fetch(url+"games").then(r=> r.json()).then(json=>)
  //
  // }

  static makeLeaderboard(json){
    json.sort((gameA, gameB) => (gameA.score-gameB.score) ).map((game)=>`<li>${game.username}   |   ${game.score}</li>`)
  }
}
