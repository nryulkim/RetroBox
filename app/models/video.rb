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

  has_attached_file :thumbnail, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/


  belongs_to :user

  private

  def ensure_views
    self.views ||= 0;
  end

end
