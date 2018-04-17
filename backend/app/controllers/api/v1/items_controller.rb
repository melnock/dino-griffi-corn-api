class Api::V1::ItemsController < ApplicationController
  def new
    item = Item.new
  end

  def create
    item = Item.new(item_params)
    render json: item
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
    render json: item
  end

  def show
    item = Item.find(params[:id])
    render json: item
  end

  def index
    items = Item.all
    render json: items
  end

  private
  def item_params
    params.require(:item).permit(:name, :sprite, :hitbox_size, :obstacle, :size)
  end
end
