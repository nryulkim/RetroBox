class ChangeTypeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :likes, :type, :like_type
  end
end
