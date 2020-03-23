

function setup()
{
  
  //create the canvas
  createCanvas(800,800);
 
}

function draw() 
{
  
    //clear the canvas
    background("lightblue");


    //create the main tower of castle
    fill("brown");
    rect(475,475,175,175);

     //create the left tower wall and the left balcony of the castle
    fill("brown");
    rect(400,350,75,300);

    rect(380,280,110,70);


    //create the right side tower and the right balcony of the castle
    fill("brown");
    rect(650,350,75,300);
     rect(630,280,110,70);

    //create the upper tower  of the castle
    fill("brown");
    rect(525,150,75,325);



    //create all the windows of the castle
    fill("white");
    rect(410,400,50,70);

    rect(660,400,50,70);

    rect(535,200,50,70);

    rect(535,300,50,70);



    fill("yellow");

    //create the door of the castle
    rect(530,575,75,75);

    //give final touches to the main tower of the castle
    rect(475,455,30,20);
    rect(515,455,30,20);
    rect(555,455,30,20);
    rect(595,455,30,20);
    rect(635,455,15,20);

    //give final touches to the left balcony of the castle 
    rect(380,260,30,20);
    rect(420,260,30,20);
    rect(460,260,30,20);

    //give final touches to the right balcony of the castle
    rect(630,260,30,20);
    rect(670,260,30,20);
    rect(710,260,30,20);

    //create the hut of the castle's upper tower
    triangle(515,150,615,150,565,80);

    //add some desingns to all the castle towers
    fill("black");
    rect(550,550,20,10);
    rect(500,500,20,10);
    rect(700,600,20,10);
    rect(625,500,20,10);
    rect(425,350,20,10);
    rect(475,590,20,10);
    rect(450,300,20,10);
    rect(650,350,20,10);
    rect(430,630,20,10);
    rect(535,400,20,10);
    rect(565,175,20,10);
    rect(445,500,20,10);

    //create the stick of the flag
    rect(430,180,5,80);
    ellipse(433,178,10,10);

    //create the flag
    fill("green");
    rect(435,180,60,30);
}