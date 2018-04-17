class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :sprites, :bio
end
