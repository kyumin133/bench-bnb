# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
  { description: "App Academy", lat: 37.791305, lng: -122.3959239, seating: 2 },
  { description: "Golden Gate Park", lat: 37.7694208, lng: -122.4884025, seating: 3 },
  { description: "Civic Center", lat: 37.7778532, lng: -122.4222351, seating: 1 },
  { description: "El Farolito", lat: 37.752654, lng: -122.4203802, seating: 4 },
  { description: "Lombard St", lat: 37.8020445, lng: -122.4210071, seating: 2 },
  { description: "Ghirardelli Square", lat: 37.8058763, lng: -122.4251389, seating: 3 },
  { description: "Painted Ladies", lat: 37.7770465, lng: -122.4537171, seating: 1 },
  { description: "Mission Dolores Park", lat: 37.7563269, lng: -122.4403226, seating: 4 }
])
