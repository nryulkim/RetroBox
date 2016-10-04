class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render :create
    else
      @errors = ["Please check your email and password combination"]
      render json: @errors, status: 422
    end
  end

  def destroy
    logout
    render json: {}
  end
end
