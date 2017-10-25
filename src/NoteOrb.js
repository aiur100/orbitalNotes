/**
 * NoteOrb
 *
 * This is an object representing the orb on the screen.
 * 
 * @param tPoint
 * @param xPoint
 * @param yPoint
 * @param note
 * @param color
 * @constructor
 */
var NoteOrb  = function(tPoint,xPoint,yPoint,note,color){
    this.tPoint = tPoint;
    this.xPoint = xPoint;
    this.yPoint = yPoint;
    this.note   = note;
    this.speed  = 10;
    this.canvas = document.getElementById('frame');

    //This is a function for listening for clicks.

    function register(xPos,yPos) {
        if ((xPos >= (this.xPoint-20) && xPos <= (this.xPoint+20)) && (yPos >= (this.yPoint-60) && yPos <= (this.yPoint+60))) {
            printCoordinates(xPos,yPos);
        }
    }

    this.increaseSpeed = function(){
        this.speed--;
    };
    /**
     * Draws the orb on the screen.
     */
    this.drawOrb = function(){
        this.c = this.canvas.getContext("2d");

        this.c.clearRect((this.xPoint-7), (this.yPoint-7), 17, 17);

        this.xPoint = Math.round(160*(Math.sin(this.tPoint)));
        this.yPoint = Math.round(70*(Math.cos(this.tPoint)));

        this.xPoint = this.xPoint + 250;
        this.yPoint = this.yPoint + 150;

        //printCoordinates(this.xPoint,this.yPoint);

        if(this.xPoint == 409 && this.yPoint == 143) {
            sounds(this.note);
        }

        this.tPoint = this.tPoint + 0.01;


        this.c.fillStyle = color;

        this.c.fillRect(this.xPoint, this.yPoint, 10, 10);

        setTimeout(this.drawOrb.bind(this), this.speed);
    };


    this.coord = function(event) {
        this.xPointCoord = (event.clientX - 300);
        this.yPointCoord = event.clientY;
        console.log(this.xPointCoord+' '+this.xPoint);
        //register(this.xPointCoord,this.yPointCoord);

    };

    this.clicks = document.getElementById('frame').addEventListener("mousedown",this.coord, false);

};