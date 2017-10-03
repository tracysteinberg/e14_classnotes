class Artist < ActiveRecord::Base
  has_many :albums 
  has_many :gigs 
  has_many :venues, {through: :gigs}
end
