class AddAttachmentThumbnailToVideos < ActiveRecord::Migration
  def self.up
    change_table :videos do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :videos, :thumbnail
  end
end
