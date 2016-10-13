class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = Subscription.where(subscriber_id: params[:id]).includes(:channel)
    render :index
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.save!
    render :create
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    @subscription.destroy
    render :destroy
  end

  private
  def subscription_params
    params.require(:subscription).permit(:subscriber_id, :subscribee_id)
  end
end
