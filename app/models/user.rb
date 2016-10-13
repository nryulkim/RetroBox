# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  icon_file_name    :string
#  icon_content_type :string
#  icon_file_size    :integer
#  icon_updated_at   :datetime
#

require 'bcrypt'

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }


  has_attached_file :icon, default_url: "user_icons/default_icon.png"
  validates_attachment_content_type :icon, content_type: /\Aimage\/.*\z/

  has_many :videos
  has_many :comments

  has_many :my_subscriptions,
    class_name: "Subscription",
    foreign_key: :subscriber_id

  has_many :others_subscriptions,
    class_name: "Subscription",
    foreign_key: :subscribee_id

  has_many :channels,
    through: :my_subscriptions,
    source: :channel

  has_many :subscribers,
    through: :others_subscriptions,
    source: :subscriber


  before_validation :ensure_token

  def self.find_by_creds(email, password)
    @user = User.find_by(email: email)
    if @user
      if @user.is_password?(password)
        return @user
      else
        return nil
      end
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
