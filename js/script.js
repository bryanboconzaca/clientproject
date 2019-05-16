/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$("#answers").click(function(){
      var genre = $("#question3").val()
      
      console.log(genre)
      var musicUrl = "https://api.soundcloud.com/tracks?genres="+genre+"&client_id=5aa8e389ba4e24b6106af5159ab3e344";
      
      $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $(".questions").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<p>"+track.title+"</p>")
             })
         },
      });
});
