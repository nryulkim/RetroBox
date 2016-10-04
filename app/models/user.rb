require 'bcrypt'

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_token

  def self.find_by_creds(email, password)
    @user = User.find_by(email: email)
    if @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  attr_reader :password

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token
    self.session_token = gen_token
    self.save
    self.session_token
  end

  private

  def ensure_token
    self.session_token ||= gen_token
  end

  def gen_token
    SecureRandom.urlsafe_base64
  end

end
