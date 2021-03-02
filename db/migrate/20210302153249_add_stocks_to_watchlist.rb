class AddStocksToWatchlist < ActiveRecord::Migration[6.0]
  def change
    add_column :watchlists, :list, :text
  end
end
