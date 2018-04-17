class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :hitbox_size, :obstacle, :sprite, :size
end
