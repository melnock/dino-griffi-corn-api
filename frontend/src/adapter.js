url = "http://localhost:3000/api/v1/"
class Adapter {
  static fetchItems() {
    fetch(url + "items").then(r => r.json()).then(json => json.map(item => new Blueprint(item)))
  }

  static fetchCharacters(){
    fetch(`http://localhost:3000/api/v1/characters`)
      .then(r=>r.json())
      .then(json => {
        console.log(json)
        Adapter.makeCharacters(json)
      })
  }
  static makeCharacters(json){
    json.forEach(char => new Character(char.name, char.sprites, char.bio, char.id))
  }
}
