const { KEYMAPPINGS, movmentKeys } = require("./constants");
// Stores the active TCP connection object.
let connection;

const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("GAMEOVER");
    process.exit();
  }
  if (movmentKeys[data]) {
    connection.write(movmentKeys[data]);
  }
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
