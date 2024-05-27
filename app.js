//Werner Janse van Rensburg(577930)
//Traver Mhere (576809)
//James Pretorius (577814)

require("dotenv").config();
let prompt = require("prompt-sync")();
let { mainMenu, loading } = require("./mainMenu.js");
let getSong = require("./songs.js");

async function main() {
  mainMenu();
  let exit = false;

  while (!exit) {
    let input = prompt("Enter your choice: ");
    switch (input) {
      case "1":
        try {
          console.clear();
          await getSong();
        } catch (err) {
          console.log(err.message);
        }
        break;
      case "2":
        exit = true;
        console.clear();
        console.log("Thank you for using our services!");
        break;
      default:
        console.clear();
        console.log(
          "Invalid choice. Press 1 to search for a song or 2 to exit."
        );
        break;
    }
  }
}

main();
