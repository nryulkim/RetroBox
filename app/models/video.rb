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
  validates :title, :user, :thumbnail, :video, :views, :description, presence: true
  before_validation :ensure_views

  has_attached_file :thumbnail, default_url: "default-thumbnail.jpg"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

  has_attached_file :video,
      styles: {:thumb => { :geometry => "100x100#", :format => 'jpg', :time => 10}},
      processors: [ :ffmpeg ]

  belongs_to :user

  private

  def ensure_views
    self.views ||= 0;
  end

end
