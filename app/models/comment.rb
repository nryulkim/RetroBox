# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  video_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Comment < ApplicationRecord
  validates :user, :video, :body, presence: true

  belongs_to :user
  belongs_to :video
  has_many :likes, as: :likeable
  
end
