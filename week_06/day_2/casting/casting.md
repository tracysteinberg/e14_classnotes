# Casting

### Learning Objectives

- Understand how to cast a variable

# Intro

Phew! We are nearly there on our magical journey through the lands of polymorphism, but we still have one thing to consider.

## Original Types

Let's imagine our bear can throw up what it's eaten.

```java
//BearTest.java

@Test
  public void canThrowUp(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    assertNotNull(food);
  }
```

```java
//Bear.java

  public Edible throwUp(){
    if(foodCount() > 0) {
      return belly.remove(0);
    }
    return null;
  }
```

We need to use a different assert this time so let's update our import

```java
//BearTest.java

import static org.junit.Assert.*; //UPDATED

@Test
  public void canThrowUp(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    assertNotNull(food); //UPDATED
  }

```

This is cool. But what if we did this?

```java
//BearTest.java

@Test
  public void canThrowUp(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    assertEquals("swimming", food.swim());
  }
```

We get a compilation error! Why? We know that the bear ate a Salmon, so why can't we make it swim?

When we use an interface type, the object only has access to the methods on the interface. So if the compiler thinks it's an Edible, it can only do what an edible can do. It cannot speak and it cannot swim. Infact our interface does nothing except give our class it's type as a big warm blanket to hide in.

What do we do if we want to get the original item back?

## Casting

We can use "casting" to get our original object back. This is just way of saying "hey, I know I gave you a Salmon I'd like it back". The Salmon is just being an Edible for the moment, but at the end of the day it is `still a salmon` and we can always get it back.

```java
//BearTest.java

  @Test
  public void canGetOriginalSalmon(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    Salmon original = (Salmon) food;
    assertEquals("swimming", original.swim());
  }
```

After doing the cast, we have access to all of the methods on the original type.

## Defining a contract

So interfaces also have another super power that we haven't seen yet.

```java
//BearTest.java

  @Test
  public void edibleItemCanSwim(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    assertEquals("swimming", food.swim());
  }
```

We can actually make this code work, by defining the method on the Edible interface.

```java
//Edible.java

public interface Edible {
  String swim();
}
```

This defines a *contract* which says that everything that implements Edible *must* have a method swim() that returns a String.

We need to add a swim() method to our human.

```java
//Human.java

public class Human {
  //everything else the same
  public String swim(){
    return "swimming";
  }
}
```
