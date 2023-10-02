$(document).ready(function () {

   
  //load playlist on ready
  getPlaylists("http://siptv.app/lists/example.m3u");  

  // $('#m3uForm').on('submit', function (e) {
  //   e.preventDefault();

  //   //var $this = $(this);
  //   var playlists = $('#playlists').val();

  //   getPlaylists(playlists);

  // });
});

function getPlaylists(playlists) {
  
  $('#result').html(''); // empty list

  
  $.ajax({
    url: 'http://localhost/m3u-listar/m3u-parser.php',
    method: 'GET',
    dataType: 'jsonP',
    data: {
      url: playlists
    }
   }).done(function (data) {
  
    // if(data.status != 'ok'){ throw data.message; }

    // console.log(data)
    // return    
   

    $.each(data, function (i, item) {
          console.log(item.item[0].title)

      var tvglogo = '';
      
      if (typeof item["tvg-logo"] != 'undefined')
        tvglogo = '<img src="'+item["tvg-logo"]+'" alt="' + item.title + '" style="width:38px;height:38px;float:left;marging: 5px;border:solid 1px #ccc;margin-right:5px">';
        
      $('#result').append('<li><a href="' + item.url + '">' + tvglogo + ' ► ' + item.title + '</a><br>' + item.url + '</li>');

    });

  });

}

/* TEST TO LOAD VIDEO WITH VIDEOJS */
/*
$(document).on('click', '#result a', function (e) {
  e.preventDefault();
  
  $('#result a').removeClass('bold');
  $(this).addClass('bold');
  
  var mediaUrl = $(this).attr('href');
  //alert(mediaUrl);
  loadStream(mediaUrl)
});
*/
