/**
 * Created by theCaptain on 10/25/17.
 */
/**
 * Plays a sound
 *
 * @param sound
 */
function sounds(sound) {
    var myAudio = new Audio("audio/"+sound+'.mp3');
    myAudio.play();
    delete myAudio;
}


function show_coords(event) {
    var x=event.clientX;
    var y=event.clientY;
    alert("X coords: " + x + ", Y coords: " + y);
}

/**
 * Prints coordinates of points on the screen.
 *
 * @param x
 * @param y
 */
function printCoordinates(x,y) {
    var canvas = document.getElementById('frame');
    var ctx = canvas.getContext("2d");

    ctx.font="18px Verdana";
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 285, 490, 50);

    ctx.fillStyle = 'white';
    ctx.fillText("coordinates: x ="+x+" y ="+y, 10, 300);
    //var loopTimer = setTimeout('printCoordinates('+x+','+y+')', 10);
}