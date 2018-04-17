class AddBioColumnToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :characters, :bio, :string
  end
end
