// var options = {
//     duration: 1,
//     queue: true
// };
//
// // Initialization
// var bs = new Brushstroke(options);
//
// // Draw, erase, etc...
// bs.draw();
// bs.erase();
// bs.draw();
//
// var width = window.innerWidth || document.body.clientWidth;
// var height = window.innerHeight || document.body.clientHeight;
// var optionsBackground, bsBackground;
//
// // Random curves for background
//
// optionsBackground = {
//     animation: 'points',
//     points: 10,
//     inkAmount: 5,
//     size: 300,
//     frames: 10,
//     frameAnimation: true,
//     splashing: false,
//     image: '../Images/background.jpg',
//     centered: true,
//     queue: true,
//     width: width,
//     height: height
// };
// bsBackground = new Brushstroke(optionsBackground);
//
// function runAnimation() {
//     // Draw a straight line
//     bsBackground.draw({
//         points: [0, height / 2 - 40, width, height / 3]
//     });
//
//     // Draw another straight line
//     bsBackground.draw({
//         points: [width, height / 2, 0, height / 1.5 - 40]
//     });
//
//     // Draw a curve generated using 20 random points
//     bsBackground.draw({
//         inkAmount: 3,
//         frames: 100,
//         size: 200,
//         splashing: true,
//         points: 20
//     });
// }
//
// // Start
//
// runAnimation();