class GameSerializer < ActiveModel::Serializer
  attributes :id, :username, :score
end
