const IP = "localhost";
const PORT = 50541;

/** Define an object named `movementKeys` to map movement keys to their corresponding messages */
const movmentKeys = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  v: "Say: The winner! wohoo!",
};

/** Export the `IP`, `PORT`, and `movementKeys` variables as a single object */
module.exports = {
  IP,
  PORT,
  movmentKeys,
};
