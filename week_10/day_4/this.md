# 'this' in JavaScript

## Learning Objectives

- Better understand ```this``` in the 3 contexts: functions, objects, and constructors

## Introduction

We have already seen that JavaScript makes use of a magic keyword, ```this```. The value of the ```this``` keyword depends on the context in which it is used.

There are three different contexts that govern how the ```this``` keyword behaves:

  - inside functions
  - inside a function that is part of an object
  - inside an object that has been created by a constructor

To begin with, let's create a file to play around with.

```
  touch this.js
  subl .
```

### Inside functions

When we're inside a plain, vanilla JavaScript function, ```this``` refers to the global object. If we're working in the browser, ```this``` is the window object; if we're using Node, we're going to be looking at the process object instead.

> In the browser, the window object contains properties and methods related to the current web page. For example, Window.history, Window.location, Window.scrollX. For a full list of methods, [check out the docs on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window).

> Similarly, in Node, the Process object provides information about (and control over) the current Node.js process. [Check out the docs for the process object](https://nodejs.org/api/process.html).

Let's check this out.

```js
function add(a, b) {  
  console.log(this); // window object
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}

// add() is invoked as a function
// this in add() is a global object (window)

add(5, 3);     // 8
window.myNumber; // 20  
```

So because the function ```add(a, b)``` has been written in the global scope, the "owning" object is the window object. Therefore, ```this``` points to the window object.

If we attach a property to ```this```, such as ```this.myNumber```, we are really attaching a property to the window object.

So we need to be quite careful that we don't unwittingly attach a property to the global scope.

### Inside a function that is owned by an object

If our function is owned by an object, then the value of ```this``` is the owning object rather than the global object.

This makes sense based on what we've seen so far. If a function isn't owned by anything - if it is just sitting within the global scope - then it belongs to the global scope, and is owned by that object. (Window or process.)

Let's look at an example.

```js
var car = {
  
  speed: 0,
  
  accelerate: function() {
    console.log(this); // car
    this.speed += 10;
  },

  decelerate: function() {
    this.speed -= 10;
  }
};

car.accelerate();
```

Calling ```car.accelerate()``` will set the context of ```this``` to be the car object, as car is the owning object.

### Inside a Constructor

When we use the ```this``` keyword inside a constructor, it takes the value of the newly created instance.

```js
function Animal(type, legs) {  
  this.type = type;
  this.legs = legs;  
  this.logInfo = function() {
    console.log(this === myCat); // => true
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);  
myCat.logInfo();
```

You can see from the example above that ```this``` is equal to the instance, ```myCat```.

This is all well and good; however, we can run into problems in certain situations.

### Problems in certain situations

> Take a moment to explain the ```setTimeout``` function, and what it does.

If we were to pass the logInfo function to a setTimeout function, what would ```this``` be inside the logInfo function?

```
setTimeout(myCat.logInfo, 1000); 
```

```this``` will be the global object (so .type and .legs are undefined). The logInfo function has been separated from the object and is just a function floating around globally.

To fix it, we could tell the function what ```this``` should be! We can bind an object to the function.

In this case, we are manually setting what ```this``` should be when we're inside the function.

```
setTimeout(myCat.logInfo.bind(myCat), 1000);
```