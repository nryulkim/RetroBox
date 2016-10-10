class Like < ApplicationRecord
  validates :user, :likeable, :like_type, presence: true

  belongs_to :user
  belongs_to :likeable, polymorphic: true
  
  def self.findLikes(likeable_id, likeable_type)
    Like.where(likeable_id: likeable_id, likeable_type: likeable_type)
  end

  def self.find_like(user_id, likeable_id, likeable_type)
    Like.findLikes(likeable_id, likeable_type).where(user_id: user_id)[0]
  end

  def self.getCounts(likeable_id, likeable_type)
    likes = Like.findLikes(likeable_id, likeable_type).where(like_type: 1).count("user_id")
    dislikes = Like.findLikes(likeable_id, likeable_type).where(like_type: -1).count("user_id")

    { likes: likes, dislikes: dislikes }
  end

  def self.getTotal(likeable_id, likeable_type)
    Like.findLikes(likeable_id, likeable_type).count("user_id")
  end
end
