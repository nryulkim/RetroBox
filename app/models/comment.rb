class Comment < ApplicationRecord
  validates :user, :video, :body, presence: true

  belongs_to :user
  belongs_to :video
  has_many :likes, as: :likeable
  
end
