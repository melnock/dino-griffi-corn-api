class Api::V1::CharactersController < ApplicationController
  def new
    character = Character.new
  end

  def create
    character = Character.new(character_params)
    render json: character
  end

  def update
    character = Character.find(params[:id])
    character.update(character_params)
    render json: character
  end

  def show
    character = Character.find(params[:id])
    render json: character
  end

  def index
    characters = Character.all
    render json: characters
  end

  private
  def character_params
    params.require(:character).permit(:name, :sprites)
  end
end
