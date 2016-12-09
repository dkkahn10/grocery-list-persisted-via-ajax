class Grocery < ActiveRecord::Base
  validates :name, presence: true
end
