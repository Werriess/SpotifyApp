require("dotenv").config();
let SpotifyWebApi = require("spotify-web-api-node");
let prompt = require("prompt-sync")();
let {mainMenu, loading} = require("./mainMenu");

async function getSong() {
  let spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  });

  let tokenData = await spotifyApi.clientCredentialsGrant();
  let accessToken = tokenData.body["access_token"];

  spotifyApi.setAccessToken(accessToken);

  console.log("Enter a song name: _________ \n\n" + "Press 0 to go back to the main menu\n");
  let songName = prompt("");

  if (songName !== "0") {
    console.clear();
    await loading();
    let searchData = await spotifyApi.searchTracks(songName);
    let tracks = searchData.body.tracks.items;

    if (tracks.length > 0) {
      tracks.forEach((songData, index) => {
        console.log(
          `Song result ${index + 1}:\n` +
            `Name: ${songData.name}\n` +
            `Artist: ${songData.artists[0].name}\n` +
            `Album: ${songData.album.name}\n` +
            `Preview URL: ${songData.preview_url}\n` +
            '-------------------------------------------------------------------------------------------------------------------\n' +
            "Scroll to see the results. To play the song, press Ctrl+click on the URL link.\n" +
            "Press 1 to search for another song. \n" +
            "Press 2 to exit the program.\n" +
            '-------------------------------------------------------------------------------------------------------------------\n'
        );
      });
    } else {
      console.log("No results found.");
    }
  } else {
    console.clear();
    mainMenu();
  }
}

module.exports = getSong;
