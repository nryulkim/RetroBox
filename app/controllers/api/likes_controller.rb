class Api::LikesController < ApplicationController
  def create
    @like = Like.find_like(like_params[:user_id], like_params[:likeable_id], like_params[:likeable_type])
    if @like
      @like.like_type = params[:like_type];
      @like.save
      render :create
    else
      @like = Like.new(like_params)
      @like.save
      render :create
    end
  end

  def count
    @count = Like.getCounts(like_params[:likeable_id], like_params[:likeable_type])
    render :count
  end

  def total
    @total = Like.getTotal(like_params[:likeable_id], like_params[:likeable_type])
    render :total
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :destroy
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :likeable_id, :like_type, :likeable_type)
  end
end
