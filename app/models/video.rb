# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  video_url   :string           not null
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :user, :video_url, :views, :description, presence: true
  before_validation :ensure_views

  belongs_to :user

  private

  def ensure_views
    self.views ||= 0;
  end

end
