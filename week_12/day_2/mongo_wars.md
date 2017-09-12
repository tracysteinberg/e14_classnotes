# Mongo Web App

## Learning Objectives
- Understand how to use Mongo in our JS
- Perform a GET request on an API which uses a Mongo database.
- Perform a POST request on an API which uses a Mongo database.

## Duration
2 hours

# Intro

We’re going to build an application simple list application that allows you to keep track of things within a list (like a Todo List for example).

Well, a todo list is kind of boring. How about we make a list of quotes from Star wars characters instead? Awesome, isn’t it?

What we’re building isn’t a sexy single page app. We’re mainly focusing on how to use CRUD, Express and Mongo DB in this lesson, so, more server-side stuff.

- Hand out start code

Lets start by installing the dependencies we will need.

```
#terminal > star_wars_quotes

npm install

```

Lets start our server and webpack.

```
#terminal > root

nodemon server.js
```

```
#new terminal window!

cd client
webpack - w
```
Make sure mongod is running as well. 

You will see that there is a form to enter in the quotes and 2 buttons. One to save and one to delete all quotes. 

### CRUD - READ - Part 1.

The READ operation is performed by browsers whenever you visit a webpage. Under the hood, browsers sends a GET request to the server to perform a READ operation. 


As we have seen, we handle a GET request with the get method:

```
app.get(path, callback)
```



### CRUD - CREATE

The CREATE operation is performed only by the browser if a POST request is sent to the server. This POST request can triggered either with JavaScript or through a <form> element.

Lets start with creating the quotes. 

We will do this without using the form first of all tho ensure that we can save them to Mongo. 

As we are going to store our quotes in a Mongo DB we first have to install MongoDB through npm if we want to use it as our database.

```
#terminal

npm install mongodb --save
```

Once installed, we can connect to MongoDB through the Mongo.Client‘s connect method.

Start by requiring the MongoClient then setting up our connection. We will also move our server start up code so that the server only starts when connected to the mongo DB.

```
#server.js

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/star_wars', function(err, database) {
  if (err) return console.log(err);
  db = database; // We will use this later.
  console.log('Connected to database');
  app.listen(3000, function(){ 
    console.log("Listening on port 3000"); 
  }); 
})
```

Wait... We haven't created a star wars database in Mongo?? We don't have to. When Mongo tries to connect to the star_wars db it will create it if it doesn't exist...Voodoo!!

We’re done setting up MongoDB. Now, let’s create a quotes collection to store quotes for our application.

We can create the quotes collection by using the string quotes while calling MongoDB’s db.collection() method. While creating the quotes collection, we can also save our first entry into MongoDB with the save method simultaneously.

```
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
  })
})
```
We can try now try this out in Insomnia.

Open insomnia and create a post request to localhost:3000/quotes and put 2 entries in the body for name and quote. 

You will notice that we get our console log 'saved to database' but insomnia hangs.

Once we’re done saving, we have to redirect the user somewhere (or they’ll be stuck waiting forever for our server to move). In this case, we’re going to redirect them back to /, which causes their browsers to reload.

```
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/') //ADDED
  })
})
```


### CRUD - READ Part 2

Since we now have some quotes in the collection, why not try showing them to our user when they land on our page?

We can get the quotes from Mongo by using the find method that’s available in the collection method.

We will write another app.get functoin that will return the JSON data when called. This will then be redered to the HTML page. We will not have to type this url in to the browser as the information will display at localhost:3000/.

```
#server.js

app.get('/quotes', function(req, res) {
  db.collection('quotes').find().toArray(function(err, results){
 res.json(results);
 });
});
```
This will send the results back to who made the call. In our case we will make this call from app.js.

```
app.js

var UI = require('./views/ui');

var app = function(){
  var url = "http://localhost:3000/quotes";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return ;
  var quoteString = this.responseText;
  var quotes = JSON.parse(quoteString);
  var ui = new UI(quotes);
}

window.addEventListener('load', app);
```

So when the window loads app makes a GET request to localhost:3000/quotes which will then return our results from the database. Once the request is complete a new instance of UI is created and data passed to render. 

Lets check it out navigate to your browser and you should see the quote you entered in insomnia. 

Yay!!

### Using the form to post data.

So now lets add some quotes using the form. 

We have already added our route to POST the data in server.js so what we need to do is amend the form to POST to this route when button is clicked.

```
index.html

<form action="/quotes" method="POST"> //NEW
  <input type="text" placeholder="name" name="name">
  <input type="text" placeholder="quote" name="quote">
  <button type="submit">Submit</button>
</form>
```
now when the submit button is clicked the form passes the name and quote to the /quotes route as a POST request.

Give it a try. refresh the browser and enter in a quote and submit. It should update the list. 

### Task

Look at the submit button. Add the functionality to delete all of the quotes from the database using this button. 

Hint - You will need to add in a new post route to server.js which may be called on a request to /delete.



#### Solution

```
app.post('/delete', function(req, res) {
 db.collection('quotes').remove();
 res.redirect('/');
});

```

