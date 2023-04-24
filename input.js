// Import the `movmentKeys` objects from the `constants`
const { movmentKeys } = require("./constants");

// Declare a variable named `connection` to store the active TCP connection object
let connection;

// Define a function named `handleUserInput` to handle user input from stdin
const handleUserInput = function (data) {
  // If the user inputs the keyboard combination Ctrl-C, exit the game and terminate the process
  if (data === "\u0003") {
    console.log("GAMEOVER");
    process.exit();
  }
  // If the user inputs a valid movement key, write the corresponding value to the `connection` object
  if (movmentKeys[data]) {
    connection.write(movmentKeys[data]);
  }
};

// Define a function named `setupInput` to set up the interface to handle user input from stdin
const setupInput = function (conn) {
  // Assign the `conn` argument to the `connection` variable for later use
  connection = conn;
  // Set the standard input stream to raw mode and UTF-8 encoding
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // Resume reading from the standard input stream
  stdin.resume();
  // Listen for incoming data on the standard input stream and call the `handleUserInput` function with the data as an argument
  stdin.on("data", handleUserInput);
  // Return the standard input stream
  return stdin;
};

// Export the `setupInput` function
module.exports = { setupInput };
