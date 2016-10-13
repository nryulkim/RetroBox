class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.integer :subscriber_id, null: false
      t.integer :subscribee_id, null: false

      t.timestamps
    end

    add_index :subscriptions, :subscriber_id
    add_index :subscriptions, :subscribee_id
  end
end
