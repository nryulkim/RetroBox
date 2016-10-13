class Api::VideosController < ApplicationController
  def create
    if video_params[:thumbnail] === "null"
      @errors = ["Thumbnail is required"]
      render json: @errors, status: 422
      return
    end

    @video = Video.new(video_params)
    if @video.save
      render :create
    else
      @errors = @video.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def index
    if params[:liked] || params[:liked]
      @like_type = params[:liked].to_i
      @user = params[:user]
      if @user
        @videos = Video.includes(:user, :likes).where("likes.like_type" => @like_type).where("likes.user_id" => @user)
      else
        @videos = Video.select("videos.*, SUM(likes.like_type) AS like_sum").joins(:likes).group("videos.id").includes(:user)
      end
      render :liked_videos
    elsif params[:subs] == "1" && params[:sub_id]
      @videos = Video.includes(:user).where(user_id: params[:sub_id])
      render :index
    else
      @videos = Video.getFilteredVideos(params)
      render :index
    end
  end

  def show
    @video = Video.includes(comments: [:user, likes: [:user]], likes: [:user]).find(params[:id])
    if @video
      @video.views = @video.views + 1;
      @video.save
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
    params.require(:video).permit(
      :title,
      :description,
      :user_id,
      :thumbnail,
      :video
    )
  end
end
