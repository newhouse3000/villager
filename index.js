fill(255, 0, 0);

var eye = 50;
var unibrow = 175;
var mouth = 30;
noStroke();
draw= function() {
    background(21, 178, 235);
    rotate(13);
fill(230, 212, 97);
rect(100,100,202,236); //face
fill(158, 129, 43);
rect(138,297,135, mouth); //mouth
fill(184, 136, 13);
rect(170,267,56,100); //nose
rotate(0);
fill(231, 240, 238);
rect(123,233,59,eye); //left eye

rect(216,233,59,eye); //right eye
fill(105, 81, 9);

rect(113,unibrow,177,33); //unibrow
rotate(2);
fill(37, 232, 7);
rect(254,233,33,eye); //right pupil

rect(161,233,33,eye); //left pupil
eye = eye - 0.5;
unibrow = unibrow + 0.4;
mouth = mouth - 0.4;
if(mousePressed)
{Program.restart();}
if(unibrow===225)
{noLoop();}

if(eye===15)

{eye=+50;
noLoop();
}
if(mouth===5)
{noLoop();}


};
