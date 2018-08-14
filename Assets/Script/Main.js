$('.circle-play').click(function () {

  $('#text').fadeOut();
  $('.playlistButton').addClass('display');

  $('.control').toggleClass('pause play-pause');

  $('.audio-files p:contains("შესავალი")').addClass('active-title');
  if(audio.paused===true){
    audio.play();
    isPlaying = true;
  }
  else {
    audio.pause();
    isPlaying = false;
  }
  timing();

  setTimeout(function () {
    // $('.mainId').fadeOut();
    $('#text').css({display:"none"});
    // $('.Id1').addClass("active-Id");
  },1000);

  setTimeout(function () {
    $('.controll-buttons').css({display:"inline-block"});
    $('.progress').css({display:"inline-block"});
    $('.time-counter').css({opacity:"1"});
    $('.sound-controll').css({display:"inline-block"});
    $('.circle-play').css({display:"none"});

    $(function indexing() {
      for(var i =0; i<audioArr.length; i++){
        if(audioArr[i].src==audio.src){
          currIndex = i;
        }
      }
      if(currIndex<10){$('.currIndex').html("0" + (currIndex).toString())}
      else {$('.currIndex').html(currIndex);}
      if(audioArr.length<10){$('.whole-number').html("0" + audioArr.length - 1);}
      else{$('.whole-number').html(audioArr.length - 1);}
      timing();
    });

    $('.title').addClass('subtitle');
    $('.title').html("შესავალი");
  },1500);

  setTimeout(function () {
    $('.brushStroke').css({width:"0", height:"0"});
  },3000);

});


$('.fb-share-button').click(function () {
});

$('.fb-share-button').mouseover(function () {
  $('.share-text p').css({opacity:"1"});
});

$('.fb-share-button').mouseout(function () {
  $('.share-text p').css({opacity:"0"});
});



$('.control').on('mousedown', function() {
  $(this).toggleClass('pause play-pause');
  if(audio.paused===true){
    audio.play();
    isPlaying = true;
  }
  else {
    audio.pause();
    isPlaying = false;
  }
  timing();

});

$(document).on('keyup', function(e) {
  if (e.which == 32) {
    $('.control').toggleClass('pause play-pause');
  }
});



setTimeout(function () {

  var callback = function () {
    $('.circle-play').css({opacity:"1", cursor:"pointer"});
  };

  var x = new Vivus('my-svg',
  {
    type: 'scenario',
    duration: 20
  }, callback);


});
