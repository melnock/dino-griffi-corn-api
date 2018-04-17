class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :sprite
      t.text :hitbox_size
      t.boolean :obstacle

      t.timestamps
    end
  end
end
