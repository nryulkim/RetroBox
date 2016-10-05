class Api::VideosController < ApplicationController
  def create
    @video = Video.new(video_params)
    if @video.save
      render :create
    else
      @errors = @video.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def index
    @videos = Video.all.includes(:user)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    if @video
      render :show
    else
      render nil, status: 404
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    render :destroy
  end

  def update
    @video = Video.find(params[:id])
    if @video
      if @video.update(video_params)
        render :update
      else
        @errors = @video.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  private
  def video_params
    params.require(:video).permit(:title, :description, :video_url, :user_id, :thumbnail)
  end
end
