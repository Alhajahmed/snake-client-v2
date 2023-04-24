/** Import the `connect` function from the `client` */
const { connect } = require("./client");

/** Import the `setupInput` function from the `input` */
const { setupInput } = require("./input");

/** Output a message to the console indicating that the program is attempting to connect */
console.log("Connecting ...");

/** Call the `setupInput` function and pass the result of calling the `connect` function as an argument */
setupInput(connect());
