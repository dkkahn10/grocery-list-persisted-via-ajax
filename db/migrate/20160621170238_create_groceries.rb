class CreateGroceries < ActiveRecord::Migration
  def change
    create_table :groceries do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
