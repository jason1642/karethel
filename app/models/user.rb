class User < ApplicationRecord
  has_secure_password

  serialize :watchlist, Array

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {in: 6..20}, allow_nil: true
  
  def return_data
    {
      id: id,
      username: username,
      email: email,
      created_at: created_at,
      updated_at: updated_at
    }
  end
  
end
