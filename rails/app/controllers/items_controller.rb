class ItemsController < ApplicationController
  serialize :size, Hash
  serialize :hitbox, Hash
end
