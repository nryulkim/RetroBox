# == Schema Information
#
# Table name: subscriptions
#
#  id            :integer          not null, primary key
#  subscriber_id :integer          not null
#  subscribee_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Subscription < ApplicationRecord
  validates :channel, :subscriber, presence: true
  validates_uniqueness_of :subscriber, scope: [:channel]

  belongs_to :channel,
    class_name: "User",
    foreign_key: :subscribee_id

  belongs_to :subscriber,
    class_name: "User",
    foreign_key: :subscriber_id
end
