var x = 150;

var x2 = 60;

var y2 = 60;

var y = 310;

var diameter = 50;

var speed = 3;

var speedY = 5;

var speed2 = 10;

var speedY2 = 15;

var squareX = 100;

var squareY = 100;

// p5 uses these two names (text and textSize) as keywords

//var text;// = text("You Win!");

//var textSize = 28;

var mousex = 0;

var mousey = 0;

var myXs = [];

var myYs = [];

var myDiameters = [];



function setup()

   {
     createCanvas(800, 600);

       for(var i = 0; i < 20; i++)

       {
           myXs[i] = getRandomX(800);

           myYs[i] = getRandomY(600);

           myDiameters[i] = getRandomDiameter(100);

       }

   }

function draw()

{


  background(40);

text("You Win!", width/2, height/2);

  text('Exit' , 520, 290);

  fill(10,200,15);

  rect(530,310,10,50);

fill(30,100,69);

circle(x,y, diameter);

moveCircle();

ellipse(mousex, mousey, 15, 50);


for(var i = 0; i < myXs.length; i++)

{

  fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));

            circle(myXs[i], myYs[i], myDiameters[i]);

}


        if (keyIsDown(83))

        {

            y += 10;

        }

        else if (keyIsDown(87))

        {

            y -= 10;

        }



        if (y >= 300)

        {

            y = 50;

        }

}

function mouseMoved()

{

  mousex = mouseX;

      mousey = mouseY;

}


function getRandomX(x)

   {

       return Math.floor(Math.random()*x)+10;
   }

   function getRandomY(y)

   {

       return Math.floor(Math.random()*y) + 10;

   }

   function getRandomDiameter(diameter)

   {

       return Math.floor(Math.random()*diameter)+10

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



}



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
