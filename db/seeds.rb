
iconPath = "#{Rails.root}/app/assets/images/user_icons/";
vidPath = "#{Rails.root}/app/assets/seed/videos/";
all_icons = Dir.entries(iconPath)

User.destroy_all
all_users = [];
all_users.push(User.create({
  username: "test", email:"test@test.com", password:"password", icon: File.new(iconPath + all_icons.sample)
  }))

10.times do
  username = Faker::Pokemon.name
  user = User.create({
      username: username,
      email: Faker::Internet.email(username),
      password: "gottacatchemall",
      icon: File.new(iconPath + all_icons.sample)
    })

  all_users.push(user) if user
end

Video.destroy_all

Video.create!({
  title: "Kellogg's Sugar Frosted Flakes Cereal",
  description: "A teacher takes her students on a corn-field trip to meet Tony the Tiger in this 1976 cereal commercial.",
  video: File.new(vidPath + "v1.mp4"),
  thumbnail:  File.new(vidPath + "tb1.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "Weight Loss Commercial from the olden days",
  description: "Was this dangerous?",
  video: File.new(vidPath + "v2.mp4"),
  thumbnail:  File.new(vidPath + "tb2.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "Classic Aunt Jemima Commercial (1967)",
  description: "An old, classic commercial for Aunt Jemima pancakes from around 1967. With jingle, but has poor color-quality.",
  video: File.new(vidPath + "v3.mp4"),
  thumbnail:  File.new(vidPath + "tb3.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "1960 Commercial for ''Off'' insect repellent",
  description: "A 1960 commercial for ''Off'' insect repellent. Run time 34 seconds",
  video: File.new(vidPath + "v4.mp4"),
  thumbnail:  File.new(vidPath + "tb4.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "Classic commercial for Wheaties",
  description: "A classic commercial for Wheaties. Sound quality is below my usual standards.",
  video: File.new(vidPath + "v5.mp4"),
  thumbnail:  File.new(vidPath + "tb5.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "Fifties Advertising: UNIVAC Computer Commercial (5 February 1956)",
  description: "Another curious example of 1950's advertising, in this case a promo for the UNIVAC computer, produced by Remington Rand. This commercial interestingly aired on the CBS Television Network on 5 February 1956, during a light panel show.",
  video: File.new(vidPath + "v6.mp4"),
  thumbnail:  File.new(vidPath + "tb6.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "Super old Crest Commercial!!",
  description: "Old Crest Commercial!!  Watch this!!!",
  video: File.new(vidPath + "v7.mp4"),
  thumbnail:  File.new(vidPath + "tb7.png"),
  user_id: all_users.sample.id
})

Video.create!({
  title: "Kennedy 1960's Campaign Commercial",
  description: "This is an old commercial for Kenney's campaign from the 60's.",
  video: File.new(vidPath + "v8.mp4"),
  thumbnail:  File.new(vidPath + "tb8.png"),
  user_id: all_users.sample.id
})
