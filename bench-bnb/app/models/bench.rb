class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(bounds)
    min_lat = bounds[:southWest][:lat]
    max_lat = bounds[:northEast][:lat]
    min_lng = bounds[:southWest][:lng]
    max_lng = bounds[:northEast][:lng]

    Bench.where("(lat BETWEEN #{min_lat} AND #{max_lat}) AND (lng BETWEEN #{min_lng} AND #{max_lng})");
  end
end
