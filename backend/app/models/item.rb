class Item < ApplicationRecord
  serialize :hitbox_size, Hash
  serialize :size, Hash
end
