# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "test", email:"test@test.com", password:"password"});

Video.create({
  title: "Dummy video",
  description: "This is a dummy video just for testing the api. It does not work.",
  user_id: 1,
  video_url: "dummyvideo.com/dummyvideo?=12421321"
})
