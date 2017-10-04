# Routing and Controllers

We want to see all the gigs for an artist so that we can buy a ticket. 

Our Rails app has been modelled and now we need to do the routing and controllers. Remember we're requesting and responding with JSON. Use Insomnia as the client to test our API.

## Your task:

- In your application_controller.rb change :exception to :null_session instead
- Create an artists_controller.rb with index and show methods to render Artists as JSON
- Add the routes for our Artists (congif/routes.rb)
- We want to be able to make a request to a URL such as "artists/6/gigs" to view all the gigs for Artist with the id of 6. (just an example - you might not have and Artist with id 6)
- Create a gigs_controller.rb 
- Look up how to create (Nested Resources)[http://guides.rubyonrails.org/routing.html#nested-resources)]
- Test your "artists/6/gigs" route in Insomnia