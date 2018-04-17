class ItemSerializer < ActiveModel::Serializer
  attributes :id, :hitbox_size, :obstacle, :sprite
end
