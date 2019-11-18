var x = 50;
var x2 = 60;
var y2 = 60;
var y = 50;
var diameter = 50;
var speed = 3;
var speedY = 5;
var speed2 = 10;
var speedY2 = 15;
var squareX = 100;
var squareY = 100;
var text = text("You Win!" , width/2-100, height/2);
var textSize =  textSize(28);


function setup()
{
  createCanvas(600, 600);
}

function draw()
{
  background(40);

  createShapeOne();

  createShapeTwo();

  moveSquare();

  moveCircle();

  createPlayer();

  exit();

  youWin();

  createCircle();


}

function createShapeOne()
{
  noStroke();
  fill(100, 250, 15);
  circle(x, y, diameter);
}



function createShapeTwo()
{
  fill(200,100,30);
    circle(x2, y2, diameter);
}



function exit()
{
  text('Exit' , 520, 290);
  fill(100,200,15);
  rect(530,310,10,50);
}



function moveSquare()
{
  if(keyIsDown(LEFT_ARROW))
  {
    squareX-=10;
  }
  else if(keyIsDown(RIGHT_ARROW))
  {
    squareX+=10;
  }
  else if(keyIsDown(UP_ARROW))
  {
    squareY-=10;
  }
  else if(keyIsDown(DOWN_ARROW))
  {
    squareY+=10;
  }

} // needed a closing curly brace here

function moveCircle()
{
  if(x >= width-diameter/2 || x <= diameter/2)
  {
    speed *= -1;

  }
  else if(y >= height-diameter/2 || y <= diameter/2)
  {
    speedY *=-1;

  }


    if(x2 >= width-diameter/2 || x2 <= diameter/2)
    {
      speed2 *= -1;

    }
    else if(y2 >= height-diameter/2 || y2 <= diameter/2)
    {
      speedY2 *=-1;

    }

  x+= speed;
  y+= speedY;
  x2+= speed2;
  y2+= speedY2;
}



function createPlayer()
{
  fill(204, 103, 15);
  square(squareX, squareY, 30);
}



function youWin()
{
  if(squareX >=3& squareY >= 310)
  {
      text("You Win!", width/2, height/2);
  }


}


function createCircle()
{
} // needed closing curly brace here

function keyPressed()
    {
      if (key == 'd')
      {
        x += 10;
      }
      else if (key == 'a')
      {
        x -= 10;
      }
    }

    function mouseClicked()
    {
      mousex = mouseX;
      mousey = mouseY;

    }
