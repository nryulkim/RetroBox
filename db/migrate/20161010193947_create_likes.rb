class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false, index: true
      t.integer :likeable_id, null: false
      t.string  :likeable_type, null: false

      t.timestamps
    end
    add_index :likes, [:likeable_type, :likeable_id]

    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
