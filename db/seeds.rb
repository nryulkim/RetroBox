iconPath = "#{Rails.root}/app/assets/images/user_icons/";
all_icons = Dir.entries(iconPath).select{|file| file[/.*\.png/]}

all_users = User.all
all_videos = Video.all


User.destroy_all
all_users = [];
all_users.push(User.create({
  username: "test", email:"test@test.com", password:"password", icon: File.new(iconPath + all_icons.sample)
  }))

20.times do
  username = Faker::Pokemon.name
  while(User.find_by(username: username)) do username = Faker::Pokemon.name end
  user = User.create({
      username: username,
      email: Faker::Internet.email(username),
      password: "gottacatchemall",
      icon: File.new(iconPath + all_icons.sample)
    })

  all_users.push(user) if user
end

Video.destroy_all
all_videos = [];

all_videos.push(Video.create!({
  title: "Kellogg's Sugar Frosted Flakes Cereal",
  description: "A teacher takes her students on a corn-field trip to meet Tony the Tiger in this 1976 cereal commercial.",
  video: URI.parse("https://www.dropbox.com/s/gl65tmb9tz01edi/v1.mp4?raw=1"),
  thumbnail: URI.parse("https://www.dropbox.com/s/rs1pub8s4dm02ew/tb1.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Weight Loss Commercial from the olden days",
  description: "Was this dangerous?",
  video: URI.parse("https://www.dropbox.com/s/2l06yh9ficsmfc3/v2.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/rsrn7gwg9uenw88/tb2.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Classic Aunt Jemima Commercial (1967)",
  description: "An old, classic commercial for Aunt Jemima pancakes from around 1967. With jingle, but has poor color-quality.",
  video: URI.parse("https://www.dropbox.com/s/ryld9ziwucacbz7/v3.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/sonvpwqzkq3p5va/tb3.png?raw=1"),
  user_id: all_users.sample.id
}))

all_videos.push(Video.create!({
  title: "1960 Commercial for ''Off'' insect repellent",
  description: "A 1960 commercial for ''Off'' insect repellent. Run time 34 seconds",
  video: URI.parse("https://www.dropbox.com/s/26kues0nw6e2pct/v4.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/aceky2efjm28sah/tb4.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Classic commercial for Wheaties",
  description: "A classic commercial for Wheaties. Sound quality is below my usual standards.",
  video: URI.parse("https://www.dropbox.com/s/u5xdnkwz3rsmkkl/v5.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/egr8u3tvmxjecoq/tb5.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Fifties Advertising: UNIVAC Computer Commercial (5 February 1956)",
  description: "Another curious example of 1950's advertising, in this case a promo for the UNIVAC computer, produced by Remington Rand. This commercial interestingly aired on the CBS Television Network on 5 February 1956, during a light panel show.",
  video: URI.parse("https://www.dropbox.com/s/ya6pg8me61f38pb/v6.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/4wn9dwivqgne4ma/tb6.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Super old Crest Commercial!!",
  description: "Old Crest Commercial!!  Watch this!!!",
  video: URI.parse("https://www.dropbox.com/s/gwsn39k75e2b1di/v7.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/g8t3zrresn24h3b/tb7.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Kennedy 1960's Campaign Commercial",
  description: "This is an old commercial for Kennedy's campaign from the 60's.",
  video: URI.parse("https://www.dropbox.com/s/cduuj5z7cr8c26l/v8.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/npz2esu6xw7jvc6/tb8.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Lark Cigarettes",
  description: "A commercial for Lark Cigarettes which was broadcast during \"The Phyllis Diller Show\" (aka \"The Pruitts of Southampton\") in January 1967.  Shot in Chicago, Illinois (doubtlessly in 1966), the music is \"The William Tell Overture,\" better known as the theme to \"The Lone Ranger,\" composed by Gioachino Rossini.  Apologies for the sucky quality.",
  video: URI.parse("https://www.dropbox.com/s/32j0b1aj7cofswg/v9.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/08xabyteozm8o6q/tb9.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Lost In Space promo",
  description: "An original CBS promo for \"Lost in Space.\" I remember this promo airing in (I believe) the summer of 1965, it was truly thrilling to see, adding to the excitement and anticipation of viewers (especially young ones) at the time.",
  video: URI.parse("https://www.dropbox.com/s/60hksbfxl54scwp/v10.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/tc86hjaczn6ahla/tb10.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Flying Superman toy from Kellogg's Corn Flakes",
  description: "Yes, kids, get a Superman that really flies... four feet and then plummets to the ground and breaks.  I'm just guessing.  These sold for a dime and a boxtop in 1955 but will set you back about $60 today.",
  video: URI.parse("https://www.dropbox.com/s/jik6xtnlfggos5i/v11.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/cgbeqeb9xe9o6aq/tb11.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Alvin And The Chipmunks sing The Jell-o Song",
  description: "A 1960s commercial for Jell-o with Alvin and the Chipmunks.",
  video: URI.parse("https://www.dropbox.com/s/oi8j2fp56jq40fe/v12.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/rp6erzo9vug1hey/tb12.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Patriotic Popeye",
  description: "Popeye's nephews want to play with fireworks on July 4th, but Popeye tries to dissuade them. They manage to light some off and get into trouble. Popeye saves the day. Animation by Tom Johnson and Frank Endres. Story by Caryl Meyer. Music by Winston Sharples. Produced in 1957.",
  video: URI.parse("https://www.dropbox.com/s/up4p5x8ldoc2q5d/v13.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/wn919t4451p09zp/tb13.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Private Eye Popeye",
  description: "Olive Oyl is the femme fatale with a valuable, green, glowing jewel in need of protection. Popeye plays private eye and saves the day. Animation by Tom Johnson and Frank Endres. Story by I. Klein. Music by Winston Sharples. Produced in 1954.",
  video: URI.parse("https://www.dropbox.com/s/hh1fk0q6vqwfyxa/v14.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/p6rjy55d9cpmxns/tb14.png?raw=1"),
  user_id: all_users.sample.id
}))

all_videos.push(Video.create!({
  title: "Flip The Frog - Fiddlesticks",
  description: "Flip the Frog was Metro-Goldwyn-Mayer's first sound cartoon. It is about a happy-go-lucky, needy frog, named Flip the Frog. This cartoon was created by Ub Iwerks in 1930. He had drawn a frog and his girlfriend in \"Night\", one of the last Silly Symphonies short films he drew while working for Walt Disney. After leaving Disney, Ub Iwerks began the Flip cartoon series with the help of Pat Powers. The first cartoon that Ub Iwerks made for the series was called Fiddlesticks (released on August 16, 1930), and it was also the first color sound cartoon ever made. Fiddlesticks was made in two-color Technicolor. The rest of the Flip series were made in black and white, except for Techno-Cracked (1933).",
  video: URI.parse("https://www.dropbox.com/s/6zwfeysaq7xe9y5/v15.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/m1kxcdnu33zmhfj/tb15.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Betty Boop: More Pep (1936)",
  description: "Betty Boop cartoon from 1936.",
  video: URI.parse("https://www.dropbox.com/s/qaog1ncbyns93w3/v16.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/kk16cnjjh7l6hxu/tb16.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "The Big Bad Wolf",
  description: "Little Boy Blue and Scarecrow sing and dance, Little Bo Peep and her sheep join in. Black Sheep cries \"wolf\", which causes problems when a real wolf shows up. Animation by U. B. Iwerks.",
  video: URI.parse("https://www.dropbox.com/s/4wzlncoz70d7gea/v17.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/lrci3m3gxefl9mm/tb17.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Superman: The Mechanical Monsters",
  description: "A mad scientist unleashes robots to rob banks and loot museums. Superman saves the day. Animation by Steve Muffati and George Germanetti. Music by Sammy Timberg. Produced in 1941.",
  video: URI.parse("https://www.dropbox.com/s/ik8y6moefcypv0g/v18.mp4?raw=1"),
  thumbnail: URI.parse("https://www.dropbox.com/s/wfe7xwlx428fsud/tb18.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "Mighty Mouse: Wolf! Wolf!",
  description: "Little Bo Peep and her free-range sheep are threatened when Wily and Jazzy wolves attempt to capture them. But Mighty Mouse saves the day.",
  video:  URI.parse("https://www.dropbox.com/s/zluvvmz9e9cor9m/v19.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/pjam94h9yyc9p9d/tb19.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "1956 Commercial for Kodak Signet 40 camera",
  description: "A 1956 commercial for the Kodak Signet 40 camera, which used 35mm film.",
  video: URI.parse("https://www.dropbox.com/s/lyi2p40kqm2vhe6/v20.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/vomgsngkjw8uwww/tb20.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

all_videos.push(Video.create!({
  title: "1959 Commercial for Black Flag insect bomb",
  description: "A 1959 commercial for Black Flag \"insect bomb\" (fly spray). \"Black Flag Dead\".",
  video: URI.parse("https://www.dropbox.com/s/x14vk4ejnhd5ihz/v21.mp4?raw=1"),
  thumbnail:  URI.parse("https://www.dropbox.com/s/d2y9oeqguccpx4v/tb21.png?raw=1"),
  user_id: all_users.sample.id,
  views: rand(100000)
}))

Comment.destroy_all

comments = [
  "Wow, what an old video.",
  "I remember when this was aired!",
  "Ugh.. this is a horrible video. So old and grainy",
  "Is this what TV was like back then?",
  "So interesting. I'm glad TV got better.",
  "So nostalgic! I want to watch more!",
  "Post more! This was great.",
  "Haha",
  "I'm only offended to be called a male if it's said in a condescending manner.﻿",
  "Female shouldn't be considered bad. Im happy to say I'm a female, happy to say I'm a girl, happy to say I'm a woman.﻿",
  "I'm an Arab and I love this. I remember having it on VHS my father got me (and he's Arab too).﻿",
  "This must have been Donald Trump's favorite when he was a kid.﻿",
  "made me nostalgic",
  "i like spinach",
  "haha i loved deez as kid and still do",
  "this is 'real' television",
  "good old times",
  "What channel did this come out on?",
  "stressbuster",
  "im 14 but i loved old cartoons like scooby doo popeye and old school mickey mouse﻿",
  "the best of the best,,, makes me feel like a kid again... just love it....﻿",
  "watching these good ol' classics..﻿",
  "Absolutely loving this!!﻿",
  "don't think it hasn't been a taste of heaven,  cuz it hasn't﻿",
  "Truly funny but my fav will always be Backyard Oproar. :)﻿",
  "Awesome clip",
  "Funniest clip",
  "This stuff cracks me up",
  "this is so lame.﻿",
  "I miss Tang.",
  "So that's where that's a spicy meatball came from for The Mask movie with Jim Carrey. It was from that commercial from the 70s.﻿",
  "Gosh I miss teaberry gum.﻿",
  "Once the nukes hit America. These commercials should be playing in every radio and telelvison﻿",
  "George is gunna need a bigger boat!﻿",
  "Americans used to be so white back then...﻿",
  "Thank you so much for these snippets! I remember so many of them. ",
  "Most of these clichés are still used today!﻿",
  "Many memories with these classic commercials.﻿",
  "bullies said how would you like a nice hiwaiian punch before they hit you.﻿",
  "Every past time was better than present!!! My 41 years of life I cry my beautiful childhood in the 80s﻿",
  "i aint hip to the cartoons of this day and age﻿",
  "where was danger mouse , marine boy , battle for the planets , hong kong phooey , a lot was missed out of this list﻿",
  "That Tom and Jerry intro wasn't from 1975, it was later.﻿",
  "now those are cartoons from back in the day﻿",
  "Ducktales will go down in history as having the catchiest intro tune.",
  "Who else is freaked out by Ronald McDonald﻿",
  "I wish people payed me cheeseburgers for get my picture took﻿",
  "Who is watching this in 2016﻿",
  "Back when Mickey D's tasted good, esp the fries.﻿",
  "Chad brought me here﻿",
  "Sepia-toned nightmares.﻿",
  "reply when your watching in 2017﻿",
  "You'll need the Colgate after all that Coca Cola.﻿",
  "Kids, people were happy in the 50s.  It was nothing like you have been led to believe.﻿",
  "Even with its many problems, it was still an improvement over the 1930s and 1940s (and let's not get started on the 1920s and 1910s, both of which were still in living memory at the time).﻿",
  "Seems like an alternate universe where everyone was so white squeaky clean and everything was so generic and conventional; but it all came to a swift end and people shocked into reality right after the death of Kennedy and the arrival of The Beatles.﻿",
  "Ugh!! I was born in the wrong decade! :/ I should've been raised in the fifties﻿",
  "As a big Coca-Cola fan I love the old ads!﻿",
  "I wish I was born in the 50s. That's my favorite part of my grandparents. There house is all 50s stuff but with more modern walls and stuff.﻿",
  "Look at these cars! Living back in those times must have been awsome...",
  "damn all these people were young and beautiful,  now theyre probably super old or dead 😢 this is gonna happen to us.﻿",
  "I am so fucking embarrassed, those were great times but these adverts were beyond STRANGE!﻿",
  "oh for pete's sake, we didn't live in fear!!!!!  jeeez!!!!    and today we live in total fear of ISIS! yeah right.  so what's the big difference in fear factor?﻿",
  "In 2015, these commercials would have a black, an Asian, a homosexual, a handicap person, a Muslim, and a transgender person, as to not be called racist and prejudice for not using them.﻿",
  "I love these old commercials. I didn't mind watching them but I hate todays commercials. They are lame, tasteless, loud and they insult my intelligence and so do the new TV show and most movies. I don't have a TV anymore.﻿",
  "Commercials in the past were so warm and cozy, unlike commercials nowadays that are  loud and annoying as hell!﻿",
  "Thank God people have changed socially. I would go crazy in freaking Stepford land everyone with their hairdos and fake ass smiles and \"Gee-Golly\" attitudes.﻿",
  "Only a Miliniot would come up with this, DAMN Milinials!!!﻿",
  "Commercials from the 60s and 70s were so sleazy. They tried so hard to convey a message to gullible people.﻿",
  "I can't believe I remember some of these...",
  "LSMFT",
  "Wow great memories.  : D﻿",
  "i don't trust these, judging these were from a time where people thought lobotomies were working medical prodecures﻿",
  "Take it from me, Tang is gross!  I tried it as an adult and said to myself, \"Only a kid could drink this!  It's disgusting!﻿\"",
  "YESSS﻿",
  "commercials were so much more straight forward, they practically said \"BUY THIS THING\"﻿",
  "*why am i here?﻿",
  "this makes me have a fallout feeling xD﻿",
  "Some of those toys were not cheap! That last one was $19.95 in 1965. That's $152 in 2016 dollars! No wonder I never had any of these unless my mom found them at a garage sale.﻿",
  "I wish I lived in this time period so badly  .... (T^T)﻿",
  "Wow I miss those crappy toys that came in cereal boxes﻿",
  "Dope to the upmost!!!﻿",
  "A toy horse that any dead beat dad can put together.﻿",
  "These two decades had some really cool toys.﻿",
  "Triggered﻿",
  "Thank you for uploading.﻿",
  "I was born in 195O and remember many of these! Thanks for sharing!﻿",
  "I was born in 1964...﻿",
  "Cartoons today and toys are so sanitized. I feel sorry for kids. Saturday morning cartoons currently are so boring.﻿",
  "Great memories! Thank you for posting this gem!﻿",
  "Well that was depressing..﻿",
  "Love your videos....great job, thanks﻿",
  "Thanks for all your hard work.  Brings back a lot of memories.﻿",
  "My keyboard has changed and no matter how many times I correct my typing mistakes they still text out wrong. Sorry about that.﻿",
  "Wow....I have never felt such a fondness for my youth as I have seeing these old ads from my childhood.  Magic, pure and simple.﻿",
  "Sigh, what a great time to be a kid..:-) And proud to be a Baby Boomer..:-)﻿",
  "Great video!  Thanks for putting this together!﻿",
  "remember when we were yo-yo crazy???﻿",
  "I am so jealous the toys back then we're so great!!! Today we are stuck with overpriced crap made in China!!﻿",
  "I was born in 1959 and Americans sure are into teaching children about killing at a very early age don't ya think?﻿",
  "ahh nutty no iq republicunts are everywhere,,cant even watch old tv commercials,﻿",
  "COLOR?!?!?!?!? IT CAN'T BE!!!!!﻿",
  "Thank you so much for letting us see the commercials.",
  "But also for letting us see them without fake, unfunny voice-overs.",
  "These sre the real deal.",
  "Thank you for posting these gems.",
  "A little girl strolling her Chatty Kathy in the park - ALL ALONE?  Never see that again.﻿",
  "Vietnam. I don't like those dolls. I was born in 1999﻿",
  "\" We'll Get'm to buy!\"﻿",
  "Yes, our parents were the best ..... the best﻿",
  "Outstanding! Thanks for the memories﻿",
  "I remember these, I remember these!!!﻿",
  "Awesome collection warts and all !!﻿"
];

all_comments = [];
60.times do
  all_comments.push(Comment.create!({user_id: all_users.sample.id, video_id: all_videos.sample.id, body: comments.sample}))
end

Like.destroy_all

500.times do
  type = ["Video", "Comment"].sample

  if type == "Video"
    user = all_users.sample
    vid = all_videos.sample
    count = 0
    while Like.find_like(user.id, vid.id, type)
      user = all_users.sample
      count += 1
      break if count > 20
    end
    if count <= 20
      Like.create!({user_id: user.id, likeable_id: vid.id, likeable_type: type, like_type: [1, -1].sample})
    end
  else
    user = all_users.sample
    comment = all_comments.sample
    count = 0
    while Like.find_like(user.id, comment.id, type)
      user = all_users.sample
      count += 1
      break if count > 20
    end
    if count <= 20
      Like.create!({user_id: user.id, likeable_id: comment.id, likeable_type: type, like_type: [1, -1].sample})
    end
  end




end
