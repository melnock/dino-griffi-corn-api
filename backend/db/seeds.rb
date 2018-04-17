# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Item.create(name: "palmtree", sprite: "img/palm.png", obstacle: true, hitbox_size: {left: 100, right: 230}, size: {width: 15, height: 15})
Item.create(name: "crystal", sprite: "img/crystal.png", obstacle: true, hitbox_size: {left: 0, right: 400}, size: {width: 15, height: 12})
Item.create(name: "star", sprite: "img/star.png", obstacle: false, hitbox_size: {left: 0, right: 300}, size: {width: 1, height: 1})

Item.create(name: "cop", sprite: "img/cop.png", obstacle: true, hitbox_size: {left: 0, right: 300}, size: {width: 1, height: 1})
Item.create(name: "sportscar", sprite: "img/sportscar.png", obstacle: true, hitbox_size: {left: 0, right: 300}, size: {width: 5, height: 1})
