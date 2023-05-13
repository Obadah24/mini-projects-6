### in brief this mini project about Creating the increament counter application using Redux in React

## increament.js

- The variable is assigned an arrow function with one parameter called "val".
- The function returns an object with two properties: "type" and "inc".
- The function is then exported as the default export of the module.

## myReducers.js

- The code imports the "combineReducers" function from the "redux" library.
- The code defines a function called "counter" that takes two parameters: "state" and "action".
- The "state" parameter has a default value of 0.
- The function checks if the "type" property of the "action" parameter is equal to the string "INCREMENT".
- If it is, the function returns the current value of "state" plus the value of the "inc" property of the "action" parameter.
- If it is not, the function simply returns the current value of "state".
- The code then creates an object called "myReducers" using the "combineReducers" function.
- The "counter" function is passed as a parameter to the "combineReducers" function with the key name of "counter".
- The "myReducers" object is then exported as the default export of the module.

## MyButton.js

- The code imports the "React" library.
- The code imports the "useDispatch" hook from the "react-redux" library.
- The code imports the "increment" action from a file located in the "../action" directory.
- The code defines a functional component called "MyButton".
- The "useDispatch" hook is called and its return value is assigned to the "dispatch" variable.
- The "MyButton" component returns a button element with an onClick event handler.
- The onClick event handler calls the "dispatch" function with the "increment" action as its parameter.
- The "increment" action is called with a value of 1, which will be used to increment the counter.
- The "MyButton" component is exported as the default export of the module.

## MainPanel.js

- The "useSelector" hook is called with a function that takes the "state" parameter and returns the value of the "counter" property in the state object. The return value of the hook is assigned to the "counterval" variable.
