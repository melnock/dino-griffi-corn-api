# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Item.create(name: "palmtree", sprite: "img/palm.png", obstacle: true, hitbox_size: {left: 100, right: 230}, size: {width: 15, height: 15})
Item.create(name: "crystal", sprite: "img/crystal.png", obstacle: true, hitbox_size: {left: 0, right: 400}, size: {width: 15, height: 12})
Item.create(name: "star", sprite: "img/star.png", obstacle: false, hitbox_size: {left: 0, right: 300}, size: {width: 1, height: 1.5})
Item.create(name: "cop", sprite: "img/cop.png", obstacle: true, hitbox_size: {left: 0, right: 300}, size: {width: 1.5, height: 1})
Item.create(name: "sportscar", sprite: "img/sportscar.png", obstacle: true, hitbox_size: {left: 0, right: 300}, size: {width: 2, height: 1})
Character.create(name: "unicorn", sprites: {front: "img/rarity.png", back: "img/unicorn.png"}, bio: "A mythical unicorn has many special talents. I bet you didn't know that one of them was navigting through our jungle of obstacles. Will you be champion with the unicorn as your guide?")
Character.create(name: "car", sprites: {front: "img/car.png", back: "img/outrun.png"}, bio: "Vrrrrroooooooommmmmmm! If you prefer a classic racing mount, maybe the fancy dancy, super-charged, luxury car for your race. Choose wisely!")
Character.create(name: "dino", sprites: {front: "img/rawr-dinosaur.svg", back: "img/dinosaur.png"}, bio: "Am I a dragon? Am I a dinosaur? I really have no clue and don't care very much. I live for the thrill of the race. Let's win this!")
Character.create(name: "griffon", sprites: {front: "img/griffon.png", back: "img/griffon-back.png"}, bio: "SCREEEECH! ROAR! Am I a bird of prey or a lion? You can't know for sure, eh? Doesn't matter, because I am as fierce a competitor as either of them!")
