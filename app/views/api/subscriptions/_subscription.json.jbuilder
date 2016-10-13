channel = subscription.channel

json.id subscription.id
json.channel_id channel.id
json.username channel.username
json.icon_url asset_path(channel.icon.url)
