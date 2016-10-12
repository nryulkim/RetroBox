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
      # styles: {
        # :medium => { :geometry => "640x360", :format => 'flv' },
        # :thumb => { :geometry => "100x100#", :format => 'jpg', :time => 10},
      # },
      processors: [:transcoder]
  validates_attachment_content_type :video, :content_type => /\Avideo\/.*\Z/

  belongs_to :user
  has_many :comments
  has_many :likes, as: :likeable

  def self.getFilteredVideos(filter)
    sort_dir = filter[:dir] ? filter[:dir] : "asc"
    if filter[:query]
      search_strings = filter[:query].split(" ").map { |string| "%#{string}%" }
      where_string = ""
      search_string_array = []

      while search_strings.length > 0
        where_string = where_string + " OR " if where_string.length > 0
        string = search_strings.pop
        where_string = where_string + "UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)"
        search_string_array << string
        search_string_array << string
      end

      query = Video.where(where_string, *search_string_array).includes(:user)

    elsif filter[:sort]
      query = Video.all.includes(:user).order(filter[:sort] => sort_dir)
    else
      query = Video.all
    end

    if(filter[:limit])
      query = query.limit(filter[:limit].to_i)
    end

    query
  end


  private

  def ensure_views
    self.views ||= 0;
  end

end
