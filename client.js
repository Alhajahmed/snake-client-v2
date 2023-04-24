/** Import the `net` module */
const net = require("net");

/** Import the `IP` and `PORT` from the `constants` */
const { IP, PORT } = require("./constants");

/** Define a function named `connect` to establish a connection with the game server */
const connect = function () {
  /** Create a new TCP connection object and assign it to the `conn` variable */
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  /** When the connection is established, output a message to the console and send the client's name to the server */
  conn.on("connect", () => {
    console.log("you're successfully connected");
    conn.write("Name: AHA");
  });

  /** When data is received from the server, output it to the console */
  conn.on("data", (data) => {
    console.log(data);
  });

  /** Interpret incoming data as text */
  conn.setEncoding("utf8");

  /** Return the TCP connection object */
  return conn;
};

/** Export the `connect` function */
module.exports = { connect };
