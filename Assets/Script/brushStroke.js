

$('.next-arrow').click(function () {
    // Options for customization
    var options = {
        duration: 1,
        queue: true,
        color: "#000",
        size: 40,
        inkAmount: 4,
        root: '.brushStroke',
        end: function () {
            bs.erase();
            // bs.clear();
        }
    };

// Initialization
    var bs = new Brushstroke(options);

    bs.draw();
    $('.brushStroke').css({width:"100%", height:"100%"});
    setTimeout(function () {
        $('.brushStroke').css({width:"0", height:"0"});
    },3000);
});