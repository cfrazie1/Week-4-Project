let search_field = document.getElementById('search');
let button = document.getElementById('search_button');
let play = document.getElementById('audio');

button.addEventListener('click',function(event){
  let search = search_field.value;
  fetch("https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=" + search)
    .then(function(response, reject){
      response.json().then(function(data){
        let artist = data;
        let musicRow = document.querySelector('.row');

        musicRow.innerHTML = '';
        for(let i = 0; i < artist.length; i++){
          let contentSection = document.createElement("div");
          let artistName = document.createElement("p");
          let title = document.createElement("p");
          let albumArt = document.createElement("img");

          albumArt.setAttribute("class", "img-responsive");
          contentSection.setAttribute("class", "col-md-3 col-md-4");
          artistName.setAttribute("class", "artist"); 
          title.setAttribute("class", "song_title");

          contentSection.appendChild(albumArt); 
          contentSection.appendChild(title);
          contentSection.appendChild(artistName);

          albumArt.src += artist[i].artwork_url;
          title.innerHTML += artist[i].title; 
          artistName.innerHTML += artist[i].user.username;

          musicRow.appendChild(contentSection);

          albumArt.addEventListener('click', function(event){
            play.src = artist[i].stream_url + "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
                    });
                }
            });
      });
}); 
