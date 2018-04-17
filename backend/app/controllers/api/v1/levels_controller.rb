class Api::V1::LevelsController < ApplicationController
  def new
    level = Level.new
  end

  def create
    level = Level.new(level_params)
    render json: level
  end

  def update
    level = Level.find(params[:id])
    level.update(level_params)
    render json: level
  end

  def show
    level = Level.find(params[:id])
    render json: level
  end

  def index
    levels = Level.all
    render json: levels
  end

  private
  def level_params
    params.require(:level).permit(:name)
  end
end
