class AddCountToLike < ActiveRecord::Migration[5.0]
  def change
    add_column :likes, :type, :integer, null: false
    add_index :likes, :type
  end
end
