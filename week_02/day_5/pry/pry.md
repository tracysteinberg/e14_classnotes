# Pry

[https://github.com/pry/pry](https://github.com/pry/pry) 

### Why use pry?

**Debugging** - we have a bug to fix, we can't see what's wrong, we're about to reach for a `puts`- STOP! We can use pry instead :)

Unlike `puts` we don't have to decide what we want to see before we run our code. We can decide *while* we run our code. It's a playground to explore our code, check our assumptions and see what is really going on.

---
We can install pry with the following command -

```
gem install pry-byebug
```

In order to make use of pry when we run our code we need to require it in the same way we have been requiring minitest -

```ruby
require ('pry')
```

We can also use it just like irb in Terminal -

```
➜ pry
```

Pry gives us the ability to look inside our code as it runs. We can see the world of our program as is *actually is*, not how we *asssume it is*. Like Neo in the Matrix. 

We can freeze time - stop our program at a specific point in our `.rb` files-

```ruby
binding.pry 
```

And slow down time - stepping through our program a line at a time

```
> next
``` 

We can unfreeze time and move to the next breakpoint (`binding.pry`), or the end of our program if we don't have any later breakpoints -

```
> continue
```

We can look at the state of our world - see the variables currrently in scope -

```
> ls
```

We can examine our world - one particular variable - 

```
> <variable name>
``` 

We can get some help -

```
> help
```

Sometimes we will get more than a page of information, if the help text or output is long - indicated by `:` at the end of the text - we can page through this output with `SPACE` or bail with `q`.

If we lose track of where we are we can ask -

```
> whereami
```
```ruby
14: def get_names_of_all_pets_of_type(pet_type)
    15:   binding.pry 
 => 16:   pets_of_type = @pets.find { |pet| pet.type == pet_type }
    17:   return pets_of_type.map { |pet| pet.name}
    18: end
```

And if we just want to get out of pry. We can quit with - 

```
> !!!
```

Pry is like `irb` but it can run in our code. So we can run any ruby code we like. We could even check a method on one of our variables in search of a bugfix -

```
> @pets.find { |pet| pet.name == "Arthur" }
``` 



