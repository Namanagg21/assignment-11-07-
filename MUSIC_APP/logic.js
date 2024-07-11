import { apiCall } from "./api-client.js";
function loadSong() {
  const URL = "https://itunes.apple.com/search";
  const promise = apiCall(URL);
  // Pending
  promise
    .then(function (response) {
      const pr = response.json();
      pr.then(function (data) {
        printSong(data.Results);
        console.log("Song Data ", data);
      }).catch(function (err) {
        console.log("Invalid JSON ", err);
      });
    })
    .catch(function (err) {
      console.log("Unable to make API Call ", err);
    });
}
loadSong();

function printSongs(songs) {
  for (var i = 0; i < songs.length; i++) {
    printSong(songs[i]);
  }
}

function printSong(song) {
  // Design of one pizza
  const card = `
    <div class="col-4 card">
  <img src="${song.assets.song[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${song.name}</h5>
    <p class="card-text">${song["song_description"]}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>`;
  const div = document.getElementById("songs");
  div.innerHTML = div.innerHTML + card;
}
