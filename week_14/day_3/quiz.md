# Quiz

1. 'props' and 'state' are two attributes that a React component might have access to. Name two ways in which they differ.
2. a) What is the es6 syntax for creating a React component that will have state?
   b) What is the es6 syntax for creating a stateless component?
3. What function does every React component with state have to implement?
4. a) In which lifecycle method would we make an HTTP request?
   b) What can we be sure has happened once the above lifecycle method has been called?
5. What's the term for the HTML-like syntax we can use in React?
6. What have we been using Babel for?
7. What does React use to keep track of changes and what needs to be output in the browser?
8. What is the name of the function where you initialize a component's state?
9. What is the function that we invoke to change the state?
10. How does context behave differently between an es5 function declaration and an es6 arrow function declaration?


# Answers

1. The component may update it's state but not it's props. The component initialises it's own state, whereas props are passed down from the parent component.
2a. `class MyComponent extends React.Component {}`
2b. `const MyStatelessComp = () => {}`
3.  `render()`
4a. `componentDidMount()`
4b. `render()` has been called
5. JSX
6. transpiling JSX and es6 to vanilla es5 JS
7. Virtual DOM
8. `constructor()`
9. `setState()`
10. An es6 arrow function retains the context of where it is defined. Whereas es5 function has the context of where it's called.







