class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = Subscription.where(subscriber_id: params[:id]).includes(:channel)
    render :index
  end
end
