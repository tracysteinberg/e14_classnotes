require_relative( 'models/user' )
require_relative( 'models/location' )
require_relative( 'models/visit' )

require( 'pry-byebug' )

Visit.delete_all()
Location.delete_all()
User.delete_all()

user1 = User.new({ 'name' => 'Samwise Gamgee' })
user1.save()
user2 = User.new({ 'name' => 'Gollum' })
user2.save()

location1 = Location.new({ 'category' => 'Attractions', 'name' => 'Mordor'})
location1.save()
location2 = Location.new({ 'category' => 'Places To Go', 'name' => 'Hobbiton'})
location2.save()


binding.pry
nil