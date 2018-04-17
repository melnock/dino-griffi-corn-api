const allCharacters = []

class Character{
  constructor(name, sprites, bio, id){
    this.name = name
    this.sprites = sprites
    this.bio = bio
    this.id = id
    allCharacters.push(this)
  }

  static all(){
    return allCharacters
  }

}
