class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.string :video_url, null: false
      t.integer :views, null: false

      t.timestamps
    end

    add_index :videos, :user_id
  end
end
