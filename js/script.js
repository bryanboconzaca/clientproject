/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$("#answers").click(function(){
    $("#answers").css("display","none");
      var genre = $("#question3").val();
      var mood = $("#question4").val();
      var person = $("#question1").val();
      var description = $("#question2").val();
      var culture = $("#question5").val();
      var musicUrl = "https://api.soundcloud.com/tracks?genre="+genre+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags="+mood+","+person+","+description+","+culture;
      console.log(musicUrl);
      $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $(".questions").hide();
             var tracks= $(".tracks");
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<img class='songIm' src="+track.artwork_url+">"+"<p class='titleM'>"+track.title+"</p>");
             });
         },
      });
      
});



//Discover Page
function getRandomInt(min,max) {
  const final = Math.floor(Math.random() * (max - min))+ min;
  return final;
}

$("#disBut").click(function() {
    $("#disBut").css("display","none");
    var randomG = ["Rock","Country","Hip Hop","Classical","Decades","RMB"];
    var randomNumber = getRandomInt(0,6);
    console.log(randomNumber);
    
     if(randomNumber === 5) {
        var Gen = randomG[5];
        $("#disDisplay").html("<h2 id='GenD'>Genre: "+Gen+"</h2>");
        var musicUrl = "https://api.soundcloud.com/tracks?genre="+Gen+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags=;";
        $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $("#disDisplay").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<img class='songIm' src="+track.artwork_url+">"+"<h3 class='titleD' >"+track.title+"</h3>"+"<p id='des'>"+track.description+"</p>")
             })
         },
      });
         
    }
    
    else if(randomNumber === 4) {
        var Gen = randomG[4];
        $("#disDisplay").html("<h2 id='GenD'>Genre: "+Gen+"</h2>");
        var musicUrl = "https://api.soundcloud.com/tracks?genre="+Gen+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags=;";
        $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $("#disDisplay").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<img class='songIm' src="+track.artwork_url+">"+"<h3 class='titleD' >"+track.title+"</h3>"+"<p id='des'>"+track.description+"</p>")
             })
         },
      });
         
    }
    
     else if(randomNumber === 3) {
        var Gen = randomG[3];
        $("#disDisplay").html("<h2 id='GenD'>Genre: "+Gen+"</h2>");
        var musicUrl = "https://api.soundcloud.com/tracks?genre="+Gen+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags=;";
        $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $("#disDisplay").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<img class='songIm' src="+track.artwork_url+">"+"<h3 class='titleD' >"+track.title+"</h3>"+"<p id='des'>"+track.description+"</p>")
             })
         },
      });
         
    }
    
    else if(randomNumber === 2) {
        var Gen = randomG[2];
        $("#disDisplay").html("<h2 id='GenD'>Genre: "+Gen+"</h2>");
        var musicUrl = "https://api.soundcloud.com/tracks?genre="+Gen+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags=;";
        $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $("#disDisplay").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<img class='songIm' src="+track.artwork_url+">"+"<h3 class='titleD' >"+track.title+"</h3>"+"<p id='des'>"+track.description+"</p>")
             })
         },
      });
         
    }
    else if(randomNumber === 1) {
        var Gen = randomG[1];
        $("#disDisplay").html("<h2 id='GenD'>Genre: "+Gen+"</h2>");
        var musicUrl = "https://api.soundcloud.com/tracks?genre="+Gen+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags=;";
        $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $("#disDisplay").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<h3 class='titleD' >"+track.title+"</h3>"+"<p id='des'>"+track.description+"</p>")
             })
         },
      });
         
    }
    else {
        var Gen = randomG[0];
        $("#disDisplay").html("<h2 id='GenD'>Genre: "+Gen+"</h2>");
        var musicUrl = "https://api.soundcloud.com/tracks?genre="+Gen+"&client_id=5aa8e389ba4e24b6106af5159ab3e344&tags=;";
        $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(response){
             console.log(response);
             $("#disDisplay").hide()
             var tracks= $(".tracks")
             response.forEach(function(track){
                console.log(track); 
                tracks.append("<img class='songIm' src="+track.artwork_url+">"+"<h3 class='titleD' >"+track.title+"</h3>"+"<p id='des'>"+track.description+"</p>")
             })
         },
      });
         
    }
})