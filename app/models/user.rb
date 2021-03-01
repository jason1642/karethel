class User < ApplicationRecord
  has_secure_password


  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {in: 6..20}
  
  def return_data
    {
      id: id,
      username: username,
      email: email,
      # password: password,
      created_at: created_at,
      updated_at: updated_at
    }
  end
  
end
