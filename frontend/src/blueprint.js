const blueprints = []
class Blueprint {
  constructor(json) {
    this.name = json.name
    this.hitLeft = json.hitbox_size.left
    this.hitRight = json.hitbox_size.right
    this.height = json.size.height
    this.width = json.size.width
    this.rarity = json.rarity
    for (let i = 0; i < this.rarity; i++) {
      blueprints.push(this)
    }
  }

  static all() {
    return blueprints
  }

  instantiate() {
    return Object.randObject(this)
  }
}
