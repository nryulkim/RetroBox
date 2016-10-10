class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :create
    else
      @errors = @user.errors.full_messages
      render json: @errors, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :icon)
  end
end
