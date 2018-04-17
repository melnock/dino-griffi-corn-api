# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Item.create(name: "palmtree", sprite: "img/palm.png", obstacle: true, hitbox_size: {left: 100, right: 230}, size: {width: 15, height: 15})
Item.create(name: "crystal", sprite: "img/crystal.png", obstacle: true, hitbox_size: {left: 0, right: 400}, size: {width: 15, height: 12})
