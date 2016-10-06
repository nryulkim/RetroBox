class RemoveVideoUrlFromVideos < ActiveRecord::Migration[5.0]
  def change
    remove_column :videos, :video_url
  end
end
