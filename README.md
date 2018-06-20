# Solar Weight Calculator

### Intro
Let's practice working with switch statements.  

_Please read through the entire README before beginning!_

 In this lab, you will implement a function for converting Earth weights to weights on other planets.  A table of conversions will be provided.  Given a planet and a particular weight, it's your task to match the planet with the correct conversion, perform the conversion, and then return the new value.

Inside `planet_calc.js` there is a function `planetWeightCalculator`.  Notice that it takes two arguments, `planet` and `weight`.   For now, let's assume that the `planet` argument will be in all caps, and `weight` will be an integer representing an object's weight in kilograms.

Before starting, try to plan out how to implement the function.  It might help to initialize a variable at the top of the function, e.g., 

```let newWeight;```

and then reassign it inside the various `case` statements before returning it at the end of the function.

What belongs inside the first parens of the `switch`?  What should go in each `case` statement?

### Get Set Up
First, let's get an environment ready to go.  `Fork` and `clone` this repo down, then `cd` into it.  Go ahead and open `planet_calc.js` in your editor.

### Some Useful Data Points
Below is a list of planets and `Float`s.  Each number represents the *multiplier* used to compute the weight of an object on the given planet from the weight of the same object on Earth.  

tldr: if you multiply an earth weight by the given number, you get that planet's version of the weight.

If there is a 50 kg table on Earth, and I want to know the weight of the table on Mercury, I can multiply 50 X 0.38 to get a final answer of 19.

- MERCURY: 0.38
- VENUS: 0.91
- EARTH: 1.00
- MARS: 0.38
- JUPITER: 2.34
- SATURN: 1.06
- URANUS: 0.92
- NEPTUNE: 1.19
- PLUTO: 0.06

### Begin Coding!
Using the list above and what you know about switch statements, write the necessary code in `planetWeightCalculator` such that given any planet from the above list and any Integer, the correct weight is returned.

### Test Along the Way

How can we be sure that the function works as expected?  Feel free to write "driver" code below the function with a variety of values to test that a value roughly corresponding to what you expect is being returned.

Remember, you can execute the script from the terminal with

```
node planet_calc.js
```

Consider using the following planetary weights for a [Volvo 200 Series Station Wagon, a marvelous vehicle,](https://en.wikipedia.org/wiki/Volvo_200_Series) as test cases to verify.

- EARTH  		1270
- MERCURY   	482.6
- VENUS  		1155.7
- MARS  		482.6
- JUPITER   	2971.7999999999997
- SATURN  	1346.2
- URANUS  	1168.4
- NEPTUNE  	1511.3
- PLUTO		76.2


### Bonus
What happens if a user enters an invalid planet name?  Let's be nice and return a helpful error message if none of our planet conversions are a match.
