# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Artist.delete_all()
Album.delete_all()
Gig.delete_all()
Venue.delete_all()


a1 = Artist.create( {name: 'Oasis'} )
a2 = Artist.create( {name: 'Iron Maiden'} )


Album.create( { artist_id: a1.id, title: 'Roll With It' } )
Album.create( { artist_id: a2.id, title: 'Number of the Beast' } )
Album.create( { artist: a2, title: 'Piece of Mind' } )

v1 = Venue.create( { name: 'Hammersmith Odeon', location: 'London' } )
v2 = Venue.create( { name: 'Playhouse', location: 'Edinburgh' } )

Gig.create( { price: 15, date: "2017-01-14", artist_id: a1.id, venue_id: v1.id  } )
Gig.create( { price: 15, date: "2017-03-23", artist_id: a2.id, venue_id: v2.id  } )