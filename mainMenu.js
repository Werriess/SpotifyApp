function mainMenu() {
    console.log(`
  
     ____  ____  ____  _____  _  ________  _        
    / ___\\/  __\\/  _ \\/__ __\\/ \\/    /\\  \\//        
    |    \\|  \\/|| / \\|  / \\  | ||  __\\ \\  /         
    \\___ ||  __/| \\_/|  | |  | || |    / /          
    \\____/\\_/   \\____/  \\_/  \\_/\\_/   /_/  
  
  ---------------------------Welcome to my Spotify App-----------------------------------
  
  Press 1 to Search for a song
  Press 2 to Exit
  `);
  }


function loading() {
 return new Promise((resolve) => {
    let count = 0;
    let loadingAnimation = setInterval(() => {
      process.stdout.write("#");
      count++;
      if (count >= 10) {
        clearInterval(loadingAnimation);
        resolve();
      }
    }, 200);
  });
}

module.exports = {mainMenu, loading}