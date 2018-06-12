$('.circle-play').click(function () {

    // Options for customization
    var options = {
        duration: 1,
        queue: true,
        color: "#344B76",
        size: 40,
        inkAmount: 4,
        root: '.brushStroke',
        end: function () {
            bs.erase();
        }
    };

// Initialization
    var bs = new Brushstroke(options);

    bs.draw();
    $('.brushStroke').css({width:"100%", height:"100%"});


    $('.control').toggleClass('pause play-pause');


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
       $('.mainId').css({display:"none"});
       $('#text').css({display:"none"});
       $('.Id1').addClass("active-Id");
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
            if(currIndex+1<10){$('.currIndex').html("0" + (currIndex+1).toString())}
            else {$('.currIndex').html(currIndex+1);}
            if(audioArr.length<10){$('.whole-number').html("0" + audioArr.length);}
            else{$('.whole-number').html(audioArr.length);}
            timing();
        });

       $('.title').addClass('subtitle');
       $('.title').html("პირველი სათაური");
    },1500);
    
    setTimeout(function () {
        $('.brushStroke').css({width:"0", height:"0"});
    },3000);



});


var pathObj = {
    "text": {
        "strokepath": [
            {
                "path": "M541.4,355.2c-4.5,4.7-3.4,9.6,2.6,11c2.2,0.6,5.3,0.9,6.4-1.9c0.7-1.7,0.7-4.4-1.2-5.8   c-5.3-3.6-10.8-7.2-16.4-10.4c-2.1-1.2-3.9,0.9-5.1,2.5c-2.1,2.9-0.1,4.7,1.9,6.5",
                "duration": 600
            },
            {
                "path": "M1333.7,786.9c4.1-5.5,2.9-9.6-3.2-11.1c-2.6-0.6-5.4-0.1-6.4,2.6c-0.7,1.9-0.7,4.5,1.8,5.9   c5.5,2.8,10.8,5.9,16.4,8.4c2.7,1.3,4.9-1.3,5.6-3.2c1-2.8-0.6-5.1-3.7-5.8",
                "duration": 600
            },
            {
                "path": "M885.6,150.1c-1.2,2.7-0.8,5.1,1.3,7.2c1.3,1.3,2.6,2.5,4.6,1.9c2.3-0.6,4-2.1,3.9-4.6   c-0.2-5.7-0.7-11.3-1.3-17c-0.2-2.5-2.3-2.8-4.5-2.6c-3.8,0.3-4.1,2.9-4,5.9",
                "duration": 600
            },
            {
                "path": "M1050.8,137c-0.5,5-2.5,9.6-3.9,14.4c-0.4,1.3-1,2.7-1.2,4c-0.4,2.5-0.6,5.3,1.9,7.1c1.6,1.3,3.4,0.9,5.2,0.1   c3.2-1.5,3.9-4.4,3.1-7.2c-0.7-2.7-1.7-5.1-0.6-7.9",
                "duration": 600
            },
            {
                "path": "M740,190.6c-0.5,2.5,0.9,4.4,2.7,5.9c1.6,1.3,3.4,2.9,5.9,1.3c2.5-1.6,3.5-4.1,2.5-6.5c-2-5-4.5-9.7-7.2-14.4   c-1.1-2-3.5-3.2-5.8-1.3c-2.5,2.2-3.7,4.7-0.1,7.1",
                "duration": 600
            },
            {
                "path": "M547.3,338.1c1.6,3.6,4.7,1.6,7.2,1.9c3.4,0.4,5,2.5,5.9,5.3c0.7,2.5-0.9,3.9-2.6,5.2c-2.1,1.7-4,0.3-5.9-0.6   c-6-3.2-11.3-7.7-17.6-10.4",
                "duration": 600
            },
            {
                "path": "M1212.2,225.8c0.2-1.7,1.7-2.1,2.6-3.2c1.3-1.6,2.8-1.9,4.6-0.6c2.5,1.7,1,3.7-0.1,5.2   c-2.8,3.9-6.3,7.3-9,11.2c-1.9,2.8-4.3,4.4-7.2,3.6c-1.6-0.5-3.9-2.3-3.3-5c0.7-3.4,2.8-5.9,5.9-7.1c3.2-1.2,5,0.9,5.9,3.8",
                "duration": 600
            },
            {
                "path": "M1302.3,842.4c-2-6.3-7.4-9.3-12.5-12.3c-3.8-2.3-8.9-0.7-10.4,2.5c-1.3,3.1,1.1,8.5,5.3,9.6   c2.8,0.7,4.9,0.9,6.7,4c1.6,2.6,5.4-0.6,8.2,0.2",
                "duration": 600
            },
            {
                "path": "M1389.8,653.7c-6.6-0.4-12.9-2.8-19.6-2.7c-2.5,0-5-0.9-6.6,2.1c-1.2,2.1-0.7,4.2,0.7,5.9   c2.1,2.5,4.7,3.4,7.8,1.3c2.2-1.5,4.7-2,7.2-0.6",
                "duration": 600
            },
            {
                "path": "M971.2,136.4c-2.6-1.2-5.3-3.6-7.8,0c-1.9,2.8-3,5.9-1.2,9.1c0.9,1.6,2.8,3.2,5.1,2.6c2.1-0.6,4-2,3.9-4.5   c-0.4-5.5,2.2-10.8,1.4-16.4c-0.3-1.9,0.6-4.9-2-5c-2.4-0.1-4.5,1.8-4,5c0.1,0.6,0,1.3,0,2",
                "duration": 600
            },
            {
                "path": "M1095.9,151.4c-5.1,8.1-6.8,17.5-10.4,26.1c-0.6,1.3-1.1,2.7-1.8,4c-1.6,2.8-3.3,2.7-6,2   c-3.6-0.9-3.4-3.5-3.2-6c0.2-1.3,1.2-2.6,1.9-4",
                "duration": 600
            },
            {
                "path": "M1218.7,950.8c0.2-1-0.9-1.8-1.3-1.9c-6.9-0.4-10.6-2.7-8.1-10.6c0.7-2.1-1.1-4.7-3.6-6.6   c-2.6-1.9-4.7-1.1-6.6,0.2c-2.8,1.9-1.6,5.1-0.6,7c1.7,3.3,5,4.9,9,4",
                "duration": 600
            },
            {
                "path": "M815,148.8c-7,0.2-9.3,4.1-5.9,9.8c1.3,2.3,2.5,4,5.9,2.8c3.6-1.2,3.8-3.7,3.1-6c-1.6-5.2-2.8-10.4-4-15.7   c-0.4-1.9-2.2-4.4-5.1-3.9c-3.6,0.6-4.4,3.2-4,6.5",
                "duration": 600
            },
            {
                "path": "M910.4,120c0,0.2-0.1,0.6,0,0.6c4.5,5.2,8.2,10,0.2,16c-2.1,1.6-1.7,6.1,1.1,8.9c2.4,2.4,4.7,1.3,6.5-0.2   c3-2.5,2.5-6,1.2-9c-0.7-1.6-2.3-3.3-4.4-4",
                "duration": 600
            },
            {
                "path": "M1300.4,325.8c-4-2.4-7.4-1.8-10.5,1.9c-1.9,2.4-1.7,4.2,0,6.6c2,2.8,4.7,2.4,6.5,1.1c2.7-1.8,5.7-4.1,4.7-8.3   ",
                "duration": 600
            },
            {
                "path": "M1315.4,818.3c3.5-1.5,6.2-4,3.8-7.8c-2.1-3.2-5.5-5.5-9.6-3.3c-3.9,2.1-3.3,6.8,1.4,9.6   c0.9,0.6,2.5,1.3,3.8,1.5",
                "duration": 600
            },
            {
                "path": "M652.4,229.1c-6.6,3.5-7.2,7.4-2,11.8c2.3,1.9,4.4,2,6.6,0c2-1.8,2.6-3.2,0.8-6c-3.5-5.2-7.1-10.3-11.4-14.8   c-3.8-4-4.7,0.4-5.8,3.2",
                "duration": 600
            },
            {
                "path": "M1380.7,700c0.3-11.1,0.3-11.2-11.1-13.1c-1.8-0.3-3.5-0.6-5.2-1.3c-3.6-1.3-8.3,0.8-8.4,3.9   c0,3.9,2.4,5.7,6.4,5.9c4.6,0.3,6.4-0.9,6.5-5.3c0-0.9-0.4-1.7-0.6-2.6",
                "duration": 600
            },
            {
                "path": "M1068.4,169.7c2.3-1.9,4.1-4.3,4.5-7.2c0.4-3.1,0.8-6.6-3.8-7.1c-3.8-0.4-5.7,2-6.4,5.2   c-0.5,2.1-0.1,4.4-0.1,6.5",
                "duration": 600
            },
            {
                "path": "M1328.4,346.1c-6.2,2.3-11.5,6.2-17.1,9.6c-2.8,1.7-4,3.2-3.7,6.1c0.2,2.2,1.7,3.4,3.9,4   c2.8,0.7,4.8-0.7,6.5-2.7c1.6-1.9,1.5-5.1,4.6-5.9",
                "duration": 600
            },
            {
                "path": "M6003.2,152.7c2.1-2.2,3.2-4.7,3.3-7.8c0-3.6-1.7-5.8-5.2-5.9c-3.2-0.1-5.1,1.9-5.2,5.1c-0.1,2.4,0,4.8,0,7.2",
                "duration": 600
            },
            {
                "path": "M1301,351.3c3.3-0.2,6.1-1.7,8.5-4c2.1-2.1,2-4.3,0.1-6.6c-1.9-2.3-4.1-2.8-6.6-1.3c-2.5,1.6-5.1,3.3-5.9,6.5",
                "duration": 600
            },
            {
                "path": "M863.4,137.6c-2.9,1.2-5,2.8-4.7,6.6c0.2,3.2,0.9,5.8,4,7.1c2.2,0.9,4.2-0.8,5.1-2.1c1.7-2.5,2.5-5.6,0.1-8.3   c-1-1.1-1.7-3-3.9-2.7",
                "duration": 600
            },
            {
                "path": "M826.8,159.2c1.6,1.7,0,4,1.3,5.9c1.5,2.4,3.5,4.2,5.9,3c2.1-1,4.4-3,3.4-6.3c-1.2-4.4-2.1-8.8-3.1-13.1   c-0.8-3.2-1.4-5.1-4.8-4.5c-3.9,0.6-4.7,3.1-3.2,6.5",
                "duration": 600
            },
            {
                "path": "M1242.2,278.1c2.5-1.7,5.1-2.9,7.2-5.2c2.4-2.6,1.7-5.3-0.2-7.1c-1.8-1.8-4.5-2.5-7.1-0.2   c-2.3,2.1-3.6,4.7-5.2,7.2",
                "duration": 600
            },
            {
                "path": "M1314.7,797.4c1.7,1.5,3.3,3.4,5.3,4.5c2.7,1.5,5.9,1.7,7.7-1.3c1.7-2.7,1.3-5.2-1.8-7.2   c-2.5-1.6-4.8-3-7.9-2.5",
                "duration": 600
            },
            {
                "path": "M674,228.4c-1.1-2.4-1.8-5.1-3.3-7.1c-1.9-2.7-4.7-3.9-7.8-1.3c-2.8,2.4-2.5,5.2-0.6,7.8   c1.4,2,3.4,3.6,5.1,5.3",
                "duration": 600
            },
            {
                "path": "M1101.7,180.7c1.6-1.4,2.5-3.3,3.2-5.2c0.9-2.8,2.1-6.2-1.9-7.8c-3.9-1.5-6.4,0.7-7.7,4   c-0.7,1.7-0.8,3.9-1.4,5.9",
                "duration": 600
            },
            {
                "path": "M626.9,267.7c-1.3-2.6-2.3-5.4-4.7-7.1c-2.1-1.6-4.5-2.4-7.2-0.2c-2.8,2.5-2.1,4.8-0.6,7.2   c1.5,2.3,4,3.5,6.5,4.6",
                "duration": 600
            },
            {
                "path": "M1113.5,183.4c5.3,4.7,5,10-0.6,13.1c-2.4,1.3-4.4,0.6-5.9-0.8c-2.9-2.9-1.5-6.2,0.6-9",
                "duration": 600
            },
            {
                "path": "M985.6,147.4c0.6,0.6,1.6,1.2,1.9,2c1.5,3.5,0.6,6.8-1.3,9.7c-1.3,2-4.1,2-5.8,1.2c-3.8-1.8-3.2-5.6-2.7-9",
                "duration": 600
            },
            {
                "path": "M844.4,140.2c1.7,1.7,4,2.5,5.8,4c2.8,2.4,2.8,7.3,0,8.9c-3.2,1.9-5.9,0.8-7.8-2.5c-0.7-1.2-0.3-2.2-0.6-3.3",
                "duration": 600
            },
            {
                "path": "M1222.6,250.7c-0.2-0.5,0.1-0.8,0.6-1.3c3.3-3.1,2.5-6.5-0.8-8.2c-2.4-1.3-5.1,0.1-7.2,2.9   c-3.1,4.3-0.9,8.9-1.8,13.1",
                "duration": 600
            },
            {
                "path": "M595.6,284c-2.6,1.3-7.1,0.7-6.4,5.2c0.6,3.8,4,5.8,7.7,6.5c2.5,0.6,5.3-0.7,7.8,0.7",
                "duration": 600
            },
            {
                "path": "M758.9,169c-2.6-0.6-5.5-2.2-7.1,1.3c-1.5,3.2-0.1,6,2,8.5c2.4,2.8,5.9,3.5,9.1,4.6",
                "duration": 600
            },
            {
                "path": "M1251.3,879c-1.4-1.6-3.2-2.8-5.4-3.6c-2.6,1.7-6.2,3.2-4.9,6.8c1.6,4.3,5.2,6.8,10.3,5.9",
                "duration": 600
            },
            {
                "path": "M1362.4,712.4c2.5-1.9,3.9-4.2,1.9-7.2c-2-3.1-8.8-4.2-13.1-2.7c-5.1,1.8-7.1,7.4-11.7,9.8",
                "duration": 600
            },
            {
                "path": "M1338.9,760.1c2.8,3.9,6.3,1.9,8.3-0.2c2.6-2.8-0.2-5.6-2.5-6.9c-3-1.7-6.6-2.9-9.7,0.5",
                "duration": 600
            },
            {
                "path": "M951.5,145.5c0.5,0.6,1,1.3,1.3,2c1.3,3.6,0.8,7-1.9,9.8c-1.3,1.4-3.6,1.1-4.5,0.5c-3-2.1-4.5-5.1-3.4-9",
                "duration": 600
            },
            {
                "path": "M1033.2,156.6c4,4,4.4,9.3,0.6,11.6c-3.2,2.1-6.6,0.9-9-1.9c-0.6-0.6-0.1-2.1-0.1-3.2",
                "duration": 600
            },
            {
                "path": "M794.1,168.3c1.5-2.9,0.3-5.8-0.7-8.5c-1.1-3-3.4-4.8-6.5-3.8c-3.6,1.2-4.5,4.3-3.2,7.7   c0.7,1.9,1.6,3.8,3.2,5.2",
                "duration": 600
            },
            {
                "path": "M1031.3,146.8c-2.5-0.5-3.4-5.2-7.2-2.7c-2.9,2-3.5,4.6-3.3,7.9c0.2,2.8,1.4,4.1,4,4.6   c2.7,0.5,4.4-0.9,5.2-3.2c0.2-0.6-0.2-1.3,0.1-2c0.8-2.5,1.1-5.4,4.5-5.9c1.7-0.2,3.2,1,3.8,2.1c1.7,2.5,0.9,5.3-0.6,7.8   c-0.6,1-1.7,1.7-2.6,2.6",
                "duration": 600
            },
            {
                "path": "M1272.3,875.8c0.6-1.1,1.7-0.7,2.6-0.6c2.5,0.2,3.9-1.3,4.5-3.3c0.6-2-0.9-3.5-2-4.5c-2.5-2.1-5.4-4-9.1-3.3",
                "duration": 600
            },
            {
                "path": "M715.8,202.3c1.8-3.8-0.1-7-2.1-9.7c-2.9-4.1-6.3-2.6-9,3.9",
                "duration": 600
            },
            {
                "path": "M1153.4,208.8c2.1,0.5,3.7-1,5.1-2.1c3.8-2.7,4.5-6.8,2-9.7c-1.8-2.2-2.9-1.9-7.8,2",
                "duration": 600
            },
            {
                "path": "M777.1,173.5c0.9-1.9,0.9-4,0.6-5.9c-0.6-2.7-1.3-5.9-4.5-6.4c-3.4-0.6-5.3,1.8-5.9,5.1",
                "duration": 600
            },
            {
                "path": "M644.6,250.7c-0.2-1.8-0.2-3.4-1.1-5.3c-1.6-3.7-4.3-5.8-7.3-4.3c-3.7,1.8-4.4,5.6-0.8,8.9",
                "duration": 600
            },
            {
                "path": "M1211.5,922.1c0.3,1.5-0.5,3,0.6,4.6c1.7,2.6,2.7,6,6.6,5.8c4-0.2,3.4-4.1,4.6-6.5",
                "duration": 600
            },
            {
                "path": "M694.9,213.4c1.5,0.9,1.6,2.8,2.7,3.9c2.8,2.8,2.9,5.4-0.1,7.8c-3.4,2.8-5.9,1.7-7.8-2",
                "duration": 600
            },
            {
                "path": "M562.9,324.5c-2.8,1.1-6.2,1.7-5.9,5.9c0.4,3.8,3.8,4.6,6.6,5.8c1.3,0.6,3,0.1,4.5,0.1",
                "duration": 600
            },
            {
                "path": "M1205.6,960c-4.7-2.7-6.2-8.1-9.7-11.9c-1.3-1.3-2.1-3.1-3.3-4.5c-2.5-2.9-5.5-2.8-7.8-0.6   c-2.8,2.8-1.4,5.9,1.2,8.4c2.1,2.1,5.7,1.6,7.2,4.6",
                "duration": 600
            },
            {
                "path": "M1259.2,886.8c1.6,2.5,3.3,4.8,0.7,7.9c-2,2.4-4.4,1.3-5.9,0.5c-3.7-2.5-3.2-6.1-1.4-9.6",
                "duration": 600
            },
            {
                "path": "M591,304.2c2.1-0.2,3.6,1.1,5.2,2c2.6,1.3,3.5,4.1,2.5,6.4c-1.3,3.1-3.4,6.1-7.7,4",
                "duration": 600
            },
            {
                "path": "M1342.1,762.7c2,2.6,2.3,5.6-0.1,7.8c-2.5,2.1-5.4,0.2-7.7-1.3c-1.5-0.9-2.7-2.5-4-3.9",
                "duration": 600
            },
            {
                "path": "M706.6,199.7c-0.7-1.9-2-3.4-4-3.9c-2-0.5-4-0.2-5.2,1.9c-1,1.7-1,3.5,0,5.2c1.8,3.1,4.4,5,7.8,5.9",
                "duration": 600
            },
            {
                "path": "M1134.4,184.1c1.8,0,3.9-0.6,5.4,1.6c-2.8,7.2-5.5,14.7-11.5,20.2c-7.8-4.1-8.1-5.4-3.7-12.7",
                "duration": 600
            },
            {
                "path": "M1264.4,292.4c5.7-3.3,5.7-3.3,10.5,1.3c-1.5,5.3-5.4,7.4-10.5,7.8",
                "duration": 600
            },
            {
                "path": "M575.4,324.5c-0.6-1.3-1.1-2.8-2-3.9c-2.5-2.9-5.8-5.2-8.9-1.9c-2.8,2.8-2.1,6.2,1.8,8.4",
                "duration": 600
            },
            {
                "path": "M930,130.4c0.8,2.4,3.1,3.5,4.6,5.2c2.1,2.5,3.7,5.2,1.9,8.5c-1,1.9-3.1,2.9-5.1,2.5c-3.7-0.7-4.8-3.6-4.6-7.1   ",
                "duration": 600
            },
            {
                "path": "M1220,914.3c4.7-0.9,7.5,1.7,9.8,5.2c0.9,1.4,1,2.7,0,4c-1.3,1.6-2.8,3.4-5.2,2.5c-1.9-0.7-4-1.4-4.6-3.9",
                "duration": 600
            },
            {
                "path": "M951.5,142.9c2.5-2.8,4.6-5.9,0-8.5c-4-2.2-6.3-0.3-7.1,3.9",
                "duration": 600
            },
            {
                "path": "M632.8,248.1c-2.3,0.6-5.4-2-6.6,2.6c-1.1,3.9,1.3,5.6,3.6,7c1.7,1.1,3.9,2.6,6.4,2.1",
                "duration": 600
            },
            {
                "path": "M1263.1,283.3c-0.7-3.2-1.6-7.4-5.1-6.9c-2.9,0.5-6.2,2.8-7.4,6.8c-0.8,2.9-0.1,5.7-0.6,8.5",
                "duration": 600
            },
            {
                "path": "M777.9,184.7c-6.4-3.9-12.1-2.1-17.6,2",
                "duration": 600
            },
            {
                "path": "M726.2,193.2c5.4-3.1,7.6,0.7,9.8,4.6c2.1,3.5-0.2,5.9-2.7,7c-4.2,2.1-6.2-1.1-7.8-4.4",
                "duration": 600
            },
            {
                "path": "M589,306.8c1.2-5.1-0.4-8.9-4.6-9.7c-4.4-0.9-5.8,2-5.9,5.9",
                "duration": 600
            },
            {
                "path": "M613.3,278.7c-0.6-1.3-1.2-2.7-2-3.9c-1.9-2.7-3.9-6.1-7.8-2.6c-3.7,3.3-2.9,6.2,1.3,8.5",
                "duration": 600
            },
            {
                "path": "M1302.3,864.6c-4.8-5.6-11.9-8.5-17.1-13.6c-2.1-2.1-5.3-0.9-7,1.3c-1.4,1.8-1.5,4.2,0.5,6.5   c4.3,5,8.9,4.4,11.8-2",
                "duration": 600
            },
            {
                "path": "M1340.2,739.2c0.4,2.1,1.4,4.1,3.3,5.1c2.4,1.3,4.9,3.5,7.8,1.3c1.3-0.9,3.1-1.9,2.6-3.9   c-0.7-3-2.5-5.1-5.9-5.2",
                "duration": 600
            },
            {
                "path": "M1359.8,668.7c3.2-0.9,6.6-1.3,9.8,0c2.5,1,4.8,2,3.4,5.9c-1.2,3.2-3,4.2-6,3.9c-3.1-0.4-5.8-1.9-8.5-3.2",
                "duration": 600
            },
            {
                "path": "M573.4,308.8c0.1,3.1,2.5,4.4,4.6,5.9c2.4,1.7,5,0.9,6.4-0.8c1.5-1.7,1.8-4.4-0.5-6.4c-1.5-1.3-3-2.6-4.6-4   c-3.4-0.2-5.5,1.3-6.6,4.6",
                "duration": 600
            },
            {
                "path": "M1365.7,743.8c-3.1-3.7-5.1-8.1-8.5-11.8c-5.3-5.9-5.9-6.2-13.1-3.2",
                "duration": 600
            },
            {
                "path": "M681.1,208.2c0.9,1.5,1.6,3.1,2.5,4.6c3.2,4.8,4,5,9.2,1.3",
                "duration": 600
            },
            {
                "path": "M1195.2,218.6c-0.5,1.7,0.2,3.2,0.7,4.5c1.4,3.9-0.2,6.1-3.3,7.9c-2.4,1.3-4.7,0.6-5.8-1.3   c-1.6-2.8-1.3-5.8,1.8-7.8",
                "duration": 600
            },
            {
                "path": "M1246.1,289.8c6.2,4,8.9,9.7,8.5,17",
                "duration": 600
            },
            {
                "path": "M867.9,140.2c1.2-3.1,3.8-4.4,6.5-3.1c2.8,1.3,4,4.1,2.8,7.8c-0.5,1.5-0.9,3-1.5,4.5",
                "duration": 600
            },
            {
                "path": "M1163.8,184.1c-4,1.7-7.8,3.8-11.8,5.1c-6.9,2.2-9.3,6.6-8.5,13.2",
                "duration": 600
            },
            {
                "path": "M1241.6,896c9.4,1.3,7.6,9.8,9.7,15.7c0.9,2.4,0.6,5.2,0.8,7.8",
                "duration": 600
            },
            {
                "path": "M618.5,290.5c-7.9-0.2-12,2.7-13.7,9.8",
                "duration": 600
            },
            {
                "path": "M1230.4,903.8c1.7,1.9-0.1,4.4,1.8,6.6c2.3,2.8,5,5.4,7.8,3.6c3.7-2.3,3.2-6.1-0.5-8.9",
                "duration": 600
            },
            {
                "path": "M1089.4,163.8c-5.9-4.2-7-3.8-9.2,3.2",
                "duration": 600
            },
            {
                "path": "M980.3,141c-0.6-3.2,1.3-4.6,3.9-4.4c2.5,0.2,5.4,1.3,5.1,4.4c-0.2,2.5-0.9,5.5-4.4,5.9c-0.9,0.1-1.7,0-2.6,0",
                "duration": 600
            },
            {
                "path": "M1171,218.6c1.7-1.7,3.9-3.2,5.1-5.3c1.7-2.7,1.5-5.9-1.3-7.7c-2.4-1.6-5.5-1.7-7,1.3   c-1.4,2.6-3.7,5.1-3.3,8.5",
                "duration": 600
            },
            {
                "path": "M1284,310.8c1.6-3.9,0.8-6.8-3.2-8.5c-4.4,1.8-8,4.5-8.5,9.8",
                "duration": 600
            },
            {
                "path": "M1308.2,316.6c-2.1,3.5-1.4,9-7.2,9.8",
                "duration": 600
            },
            {
                "path": "M1281.4,313.4c1.4-3.6,4.6-2.7,7.2-2.5c1.6,0.2,2.5,2.5,2.5,3.8c-0.1,2.7-2.1,4.4-4.4,5.9   c-2.1,1.3-4.4,1.2-6.6,1.3",
                "duration": 600
            },
            {
                "path": "M1209.6,255.9c5.9,2.7,10.6,6.2,9.8,13.7",
                "duration": 600
            },
            {
                "path": "M1260.5,873.8c0.7,2.5,1,5.2,3.2,7.2c2.2,2,4.4,3.1,7.2,1.3c3.2-2.1,2-4.7,0.6-7.2c-0.6-0.9-2-1.3-2-2.6",
                "duration": 600
            },
            {
                "path": "M721,189.3c-2.1-4.3,0.7-6.6,4-7c3.5-0.3,4.9,2.8,4.5,6.3c-0.2,1.1-0.4,2.2-0.6,3.2",
                "duration": 600
            },
            {
                "path": "M688.3,202.3c1.7,3.6,4.7,6.3,5.2,10.4",
                "duration": 600
            },
            {
                "path": "M643.9,227.2c0.2-0.5-0.1-0.8-0.6-1.3c-1.7-1.5-3.2-4.2-5.9-1.9c-2.5,2.2,0.7,3.9,1.3,5.8",
                "duration": 600
            },
            {
                "path": "M769.3,170.9c0.2-0.5-0.2-0.7-0.6-1.3c-1.5-2.7-3.1-6.5-6.5-5c-4,1.8-2.8,5.7-0.8,8.9",
                "duration": 600
            },
            {
                "path": "M1232.4,252.6c3.3-0.6,5.2,1.3,6.6,3.7c-0.9,4.5-4.3,6.4-7.9,8",
                "duration": 600
            },
            {
                "path": "M1259.2,287.2c1.7-2.8,3.4-4.9,7.2-3.3c3.3,1.3,1.4,4,1.9,5.9",
                "duration": 600
            },
            {
                "path": "M1227.8,255.9c3.3-1.3,4.7-4.1,3.8-7.1c-0.8-2.6-3.4-2.5-5.7-1.3",
                "duration": 600
            },
            {
                "path": "M600.8,277.4c-6.8,2.3-7,4-1.3,9.8",
                "duration": 600
            },
            {
                "path": "M965.9,123.3c-0.9-0.7-0.9-2.8-2.5-1.9c-1.7,1-3.2,2.7-2.7,5.1",
                "duration": 600
            },
            {
                "path": "M1314.7,818.9c0.2,2.6,0.2,5.4-2.6,6.4c-2.3,0.9-4.7,0.2-6.5-1.9c-1.1-1.3-2.2-2.6-3.2-4",
                "duration": 600
            },
            {
                "path": "M1150.2,190.6c2.5,1.3,4,3.2,4.6,5.9",
                "duration": 600
            },
            {
                "path": "M1128.6,178.8c0.3,2.8,4.5,1.6,4.6,5.8c-0.6,1.1-1.6,3.2-2.7,5.3",
                "duration": 600
            },
            {
                "path": "M1248.7,905.7c-1.3,2.5-3.7,1.9-5.9,2",
                "duration": 600
            },
            {
                "path": "M1215.4,221.2c-0.6-1.3-0.3-3.1-2.5-4c-2.2-0.4-2.5,3.2-4.7,3.3",
                "duration": 600
            },
            {
                "path": "M1357.8,734c-1.2,1.6-2.8,2.5-4.6,3.2",
                "duration": 600
            },
            {
                "path": "M1122.9,176.6c-0.3,0.2-0.5,3.3-2,5.1s-4.4,2.1-4.7,2.4",
                "duration": 600
            },
            {
                "path": "M1352.6,711.2c-3.2,1.1-4.3,4-3.1,6.4c1.4,3,5,4.3,8.3,3.9c2.4-0.3,4.6-1.9,4.6-5.1c0-3.2-2.3-4.4-4.6-5.1   c-1.3-0.5-3-0.1-4.5-0.1",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 1920,
            "height": 1080
        }
    }
};


$('.fb-share-button').mouseover(function () {
    $('.share-text p').css({opacity:"1"});
});

$('.fb-share-button').mouseout(function () {
    $('.share-text p').css({opacity:"0"});
});


$('#text').lazylinepainter({
    'svgData' : pathObj,
    'strokeWidth' : 4,
    'strokeColor' : '#344B76',
    'speedMultiplier' : 1/2
}).lazylinepainter('paint');


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


// $('.fb_iframe_widget').mouseout(function () {
//     $('.fb-share-button').css({opacity:"0!important"});
// });