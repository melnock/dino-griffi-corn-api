const blueprints = []
class Blueprint {
  constructor(json) {
    this.name = json.name
    this.hitLeft = json.hitbox_size.left
    this.hitRight = json.hitbox_size.right
    this.height = json.size.height
    this.width = json.size.width
    blueprints.push(this)
  }

  static all() {
    return blueprints
  }

  instantiate() {
    return Object.randObject(this)
  }
}
