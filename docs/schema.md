# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
views       | integer   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
video_id    | integer   | not null, foreign key (references videos), indexed
description | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
video_id    | integer   | allow nil, foreign key (references videos), indexed, [video, user] is unique
comment_id  | integer   | allow nil, foreign key (references comments), indexed, [comments, user] is unique
