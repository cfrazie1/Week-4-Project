</style>
<script type="text/javascript">

  function search() {

    var searchValue = document.getElementById("search_box").value;
    var searchUrl = "http://api.soundcloud.com/tracks.json?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=" + searchValue;
    var html = "";

    document.getElementById("artwork").innerHTML = "";

    fetch(searchUrl).then(function(results) {
      results.json().then(function(data) {
        // data[0]
        var count = (data.length < 10) ? data.length : 10;
        var innerHtml = document.getElementById("artwork").innerHTML;
        for(var i=0; i < count; i++) {
          var myObj = data[i];

          html += '<div class="icons" >';
          html += '<img src="' + myObj.artwork_url + '" />'
          html += '<br>';
          html += '<h5>' + myObj.title + '</h5>';
          html += '<h6>' + myObj.title + '</h6>';
          html += '<input type="hidden" value="' + myObj.permalink_url + '" />';
          html += '</div>';

          document.getElementById("artwork").innerHTML = innerHtml + html;

        }

        var icons = document.getElementsByClassName("icons");

        for (let i = 0; i < icons.length; i++){
          let icon = icons[i];

          icon.addEventListener("click", function(){
            let  audioUrl = this.getElementsByTagName('input')[0].value;
            document.getElementById("player").src = audioUrl;
          });
        }
      });
    });



    return false;
  }
