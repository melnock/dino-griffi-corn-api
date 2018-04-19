class AddRarityToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :rarity, :integer
  end
end
