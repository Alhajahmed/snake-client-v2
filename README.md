# Snake Client Project

This is a multiplayer take on the popular Snake game. The player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This client connects to a server-side application, which can be downloaded and installed from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Getting Started

- To run the client, follow the steps below:

- Clone or download the client repository from GitHub.

- Install the necessary dependencies using `npm install`.

- Follow the instructions on the server-side application's repository to run the server.

- Start the client using the command `node play.js`.

## Usage

Once the client is running, you will be prompted to enter a name for your player. After entering your name, you will see the game board and the other players in the game. You can control your player's movements using the following keys:

- `W` => move up
- `A` => move left
- `S` => move down
- `D` => move right
- `V` => display a victory message
- `ctrl + c` => exit

If you bump into the walls or other players, your player will die and the game will end.

## final Product

### Dependencies

- Node.js
- Net module
