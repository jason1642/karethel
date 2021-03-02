class AddWatchlistToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :watchlist, :string
  end
end
