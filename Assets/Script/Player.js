var audio = $('.audio-player')[0];
var currIndex, audioArr, isPlaying=false;
var wholeLength, currMin, currSec, durrMin, durrSec;
audioArr = $('.audio-player source');

var aText = new Array(
    "პირობითი ტექსტი ამონარიდი სტატიიდან ილუსტაციების გასაფორმებლად\n"
);
// var iSpeed = 100; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 20; // start scrolling up at this many lines
//
// var iTextPos = 0; // initialise text position
// var sContents = ''; // initialise contents variable
// var iRow; // initialise current row


$('.seek').value = 0;
$('.sound').value = 0;

function playList() {
    var quantity = audioArr.length;
    var name, lastSlash, extension;
    for (let i=0; i< quantity; i++){
        name = audioArr[i].src;
        lastSlash = name.indexOf("Audio/")+"Audio/".length;
        extension = name.indexOf(".mp3");
        name = name.substring(lastSlash, extension);
        for(var j =0; j<name.length; j++) {
            name = name.replace("%20", " ");
        }
        $('.audio-files ul').append("<li><p data-src='"+audioArr[i].src+"'>"+name+"</p></li>");
    }
}

playList();

$('.playlistButton').click(function () {
    $('.audio-files').slideToggle();
});

$('.audio-files ul li p').click(function () {
   for(var i = 0; i<audioArr.length; i++){
       if((audioArr[i].src).includes($(this).attr("data-src"))){
           audio.src=audioArr[i].src;
           if(isPlaying==true){
               audio.play();
           }
           currIndex=i;
           if(currIndex<10){$('.currIndex').html(0+ (currIndex+1).toString());}
           else{$('.currIndex').html(currIndex+1);}

       }
    }
});


function timing() {
    wholeLength = audio.duration;
    durrMin = Math.floor(wholeLength / 60);
    durrSec = Math.floor(wholeLength - durrMin * 60);

    if(durrMin<10){durrMin = "0" + durrMin}
    if(durrSec<10){durrSec = "0" + durrSec}

    $('.duration-time').html(durrMin + ":" + durrSec);
};

function currTiming() {
    currMin = Math.floor(audio.currentTime / 60);
    currSec = Math.floor(audio.currentTime - currMin * 60);
    if(currMin < 10){currMin = "0" + currMin}
    if(currSec < 10){currSec = "0" + currSec}

    $('.current-time').html(currMin + ":" + currSec);
}

// $('.control').click(function () {
//     $('.play-button .rightSpan').toggleClass("playerButtonRight");
//     $('.play-button .leftSpan').toggleClass("playerButtonLeft");
//
// });
// $('.control').on('click', function() {
//     $(this).toggleClass('pause play-pause');
//
// });

$(function indexing() {
    for(var i =0; i<audioArr.length; i++){
        if(audioArr[i].src==audio.src){
            currIndex = i;
        }
    }
    if(currIndex+1<10){$('.currIndex').html("0" + (currIndex+1).toString())}
    else {$('.currIndex').html(currIndex+1);}
    if(audioArr.length<10){$('.whole-number').html("0" + audioArr.length);}
    else{$('.whole-number').html(audioArr.length);}
    timing();
});

function  nextMusic() {
    currIndex ++;
    if(currIndex +1 >audioArr.length){
        currIndex = 0;
    }
    audio.src = audioArr[currIndex].src;
    if(isPlaying == true){
        audio.play();
    }
    else{
        audio.pause();
    }
    if (currIndex+1<10){$('.currIndex').html("0" + (currIndex+1).toString());}
    else {$('.currIndex').html(currIndex+1);}

}

function prevMusic() {
    currIndex --;
    if(currIndex  < 0){
        currIndex = audioArr.length-1;
    }
    audio.src = audioArr[currIndex].src;
    if(isPlaying == true){
        audio.play();
    }
    else{
        audio.pause();
    }

    if (currIndex+1<10){$('.currIndex').html("0" + (currIndex+1).toString());}
    else{$('.currIndex').html(currIndex+1);}
}

$(function changeAudio() {
   $('.next-arrow').click(function () {
        nextMusic();
   });

   $('.prev-arrow').click(function () {
       prevMusic();
   })
});

audio.ontimeupdate =function () {
    var percentage = ( audio.currentTime / audio.duration ) * 100;
    $(".progress span").css("width", percentage+"%");
   // var percentage = (audio.currentTime / audio.duration * 100);
    if(audio.ended){
        nextMusic();
    }
   // $('.seek').val(percentage);
   timing();
   currTiming();
};

$('.seek').change(function () {
    // audio.currentTime += 10;
    // audio.currentTime = audio.duration * (parseInt(this.value)/100);
    // console.log(audio.duration * (this.value/100));
});


$(function () {
   var volumeController = 0;
   var lastVolume = audio.volume;
   $('.muteSound').click(function () {
        if(volumeController == 0) {
            audio.volume = 0;
            $('.sound').value = 0;
            volumeController = 1;
            $('.muteSound .soundLine').css({height:"55px"});
        }
        else{
            audio.volume = lastVolume;
            $('.sound').value = lastVolume;
            volumeController = 0;
            $('.muteSound .soundLine').css({height:"0"})
        }
   });
   $('.sound').change(function () {
        audio.volume = this.value;
        lastVolume = this.value;
        volumeController = 0;
   });
   $('.muteSound').mouseover(function () {
      $('.sound').css({opacity:"1", width:"90px"});
   });
});

$(document).click(function (event) {
    if(!$(event.target).is(".sound")){
        $('.sound').css({opacity:"0", width:"0"})
    }
    else{
        return;
    }
   // $('.sound').css({opacity:"0", width:"0"});
});
//
//
// audio.ontimeupdate = function(){

// };
//
$(".progress").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $(".progress").width();
    var percentage = ( left / totalWidth );
    var audioTime = audio.duration * percentage;
    audio.currentTime = audioTime;
});

//
// function typewriter()
// {
//     sContents =  ' ';
//     iRow = Math.max(0, iIndex-iScrollAt);
//     var destination = $('.curved-text textPath');
//
//     while ( iRow < iIndex ) {
//         sContents += aText[iRow++] + '<br />';
//     }
//     destination.html( sContents + aText[iIndex].substring(0, iTextPos) + " ");
//     if ( iTextPos++ == iArrLength ) {
//         iTextPos = 0;
//         iIndex++;
//         if ( iIndex != aText.length ) {
//             iArrLength = aText[iIndex].length;
//             setTimeout("typewriter()", 500);
//         }
//     } else {
//         setTimeout("typewriter()", iSpeed);
//     }
// }
//
//
// typewriter();
//
//
//
// $(".progress").click(function(e){
//     console.log(audio.currentTime);
//     var timing = e.pageX-$(this).offset().left; //current width of progress
//     var duration = audio.duration;	//total duration
//     var currentTime = (duration * timing) / $(".progress").width();
//     console.log(currentTime);
//     var percent = (currentTime * 100)/duration;
//     console.log(percent);
//     //console.log(timing+"  "+currentTime+" " + percent+" "+duration);
//     audio.currentTime = 15;
//     console.log(audio.currentTime);
// });