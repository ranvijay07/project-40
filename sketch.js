var home, homeImage;
var gameState = "home";
var man, manImg;
var ground;
var background, backgroundImg;
var help1Img;
var yes1, yes1Img;
var no1, no1Img;
var soifa;
var cardboard1;
var cardboard2;
var cardboard3;
//var cardboard4;
var cardboard5;
var cardboard6;
var cardboard7;
var cardboard8;
var cardboard9;
var cardboard10;
var cardboard11;
var cardboard12;
var cardboard13;
var cardboard14;
var cardboard15;
var cardboard16;
var cardboard17;
var cardboard18;
var cardboard19;
var cardboard20;
var cardboard21;
var cardboard22;
var cardboard23;
var cardboard24;
var cardboard25;
var cardboard26;
var cardboard27;
var cardboard28;
var cardboard29;
var cardboard30;
var cardboard31;
var happyMan,happyManImg;
var sadMan,sadManImg;
var cupImg
var edges



function preload() {
    homeImage = loadImage("images/home.png")
    manImg = loadImage("images/man.png")
    background1Img = loadImage("images/background.jpg")
    help1Img = loadImage("images/help1.jpg")
    yes1Img = loadImage("images/yes1.webp")
    no1Img = loadImage("images/no.webp")
    soifaImg = loadImage("images/soifa.png")
    happyManImg = loadImage("images/happyman1.png")
    sadManImg = loadImage("images/soifa.png")
    cupImg=loadImage("images/cat.png")
}

function setup() {
    createCanvas(1400, 750)

    home = createSprite(800, 500, width, height)
    home.addImage("starting screen", homeImage)

    ground = createSprite(400, 350, 800, 10);
    ground.x = ground.width / 2;
    ground.visible = false;

    background1 = createSprite(800, 200, 10, 10);
    background1.addImage("b1", background1Img)
    background.visible = true;

    man = createSprite(400, 650)
    man.addImage("player", manImg)
    man.scale = 0.1

    happyMan = createSprite(400, 500)
    happyMan.addImage("man", happyManImg)
    happyMan.scale = 0.1
    //man.debug=true
    sadMan = createSprite(400, 600)
    sadMan.addImage("sad", sadManImg)
    sadMan.scale = 1

    help1 = createSprite(1000, 550)
    help1.addImage("h1", help1Img)
    help1.scale = 0.2

    yes1 = createSprite(900, 500);
    yes1.addImage("y1", yes1Img)
    yes1.scale = 0.1

    no1 = createSprite(1100, 500);
    no1.addImage("n1", no1Img)
    no1.scale = 0.05

    soifa = createSprite(20, 25, 5, 5);
    soifa.addImage("help", manImg)
    soifa.scale = 0.02
    soifa.shapeColor = "yellow"
    

    cardboard1 = createSprite(100, 70, 100,20);
    cardboard1.shapeColor = "brown";

    cardboard2 = createSprite(200, 50, 20, 100);
    cardboard2.shapeColor = "brown";
    cardboard3 = createSprite(190, 130, 100, 20);
    cardboard3.shapeColor = "brown";
    cardboard5 = createSprite(120, 250, 70, 20);
    cardboard5.shapeColor = "brown";
    cardboard6 = createSprite(250, 100, 20, 100);
    cardboard6.shapeColor = "brown";
    cardboard7 = createSprite(300, 70, 20, 120);
    cardboard7.shapeColor = "brown";
    cardboard8 = createSprite(300, 150, 90, 20);
    cardboard8.shapeColor = "brown";
    cardboard9 = createSprite(350, 130, 20, 100);
    cardboard9.shapeColor = "brown";
    cardboard10 = createSprite(350, 50, 100, 20);
    cardboard10.shapeColor = "brown";
    cardboard11 = createSprite(400, 100, 20, 100);
    cardboard11.shapeColor = "brown";
    cardboard12 = createSprite(400, 200, 20, 100);
    cardboard12.shapeColor = "brown";
    cardboard13 = createSprite(400, 350, 20, 100);
    cardboard13.shapeColor = "brown";
    cardboard14 = createSprite(350, 230, 50, 20);
    cardboard14.shapeColor = "brown";
    cardboard15 = createSprite(250, 230, 100, 20);
    cardboard15.shapeColor = "brown";
    cardboard16 = createSprite(200, 300, 20, 120);
    cardboard16.shapeColor = "brown";
    cardboard17 = createSprite(135, 200, 20, 320);
    cardboard17.shapeColor = "brown";
    cardboard18 = createSprite(200, 300, 20, 120);
    cardboard18.shapeColor = "brown";
    cardboard19 = createSprite(250, 350, 120, 20);
    cardboard19.shapeColor = "brown";
    cardboard20 = createSprite(325, 350, 160, 20);
    cardboard20.shapeColor = "brown";
    cardboard21 = createSprite(10, 200, 160, 20);
    cardboard21.shapeColor = "brown";
    cardboard22 = createSprite(10, 200, 10, 160);
    cardboard22.shapeColor = "brown";
    cardboard23 = createSprite(10, 200, 10, 160);
    cardboard23.shapeColor = "brown";
    cardboard24 = createSprite(200, 500, 20, 560);
    cardboard24.shapeColor = "brown";
    cardboard25 = createSprite(200, 460, 120, 20);
    cardboard25.shapeColor = "brown";
    cardboard26 = createSprite(200, 440, 20, 500);
    cardboard26.shapeColor = "brown";
    cardboard27 = createSprite(10, 400, 120, 20);
    cardboard27.shapeColor = "brown";
    cardboard28 = createSprite(100, 480, 20, 430);
    cardboard28.shapeColor = "brown";
    cardboard29 = createSprite(100, 560, 80, 20);
    cardboard29.shapeColor = "brown";
    cardboard30 = createSprite(10, 500, 80, 20);
    cardboard30.shapeColor = "brown";
    cardboard31 = createSprite(10, 620, 80, 20);
    cardboard31.shapeColor = "brown";
    
    
    
    cup = createSprite(500, 520, 20, 120);
    cup.addImage("c1",cupImg)
    cup.shapeColor = "yellow";
    cup.scale=0.3

}

function draw() {


    if (gameState === "home") {
        background("black")
        home.visible = true

        man.visible = false;
        background1.visible = false;
        help1.visible = false
        yes1.visible = false;
        no1.visible=false;
        happyMan.visible=false
        sadMan.visible=false
        // console.log(soifa);
        soifa.visible = false;
        

        
        cardboard1.visible = false;
        cardboard2.visible = false;
        cardboard3.visible = false;
        //cardboard4.visible=false;
        cardboard5.visible = false;
        cardboard6.visible = false;
        cardboard7.visible = false;
        cardboard8.visible = false;
        cardboard9.visible = false;
        cardboard10.visible = false;
        cardboard11.visible = false;
        cardboard12.visible = false;
        cardboard13.visible = false;
        cardboard14.visible = false;
        cardboard15.visible = false;
        cardboard16.visible = false;
        cardboard17.visible = false;
        cardboard18.visible = false;
        cardboard19.visible = false;
        cardboard20.visible = false;
        cardboard21.visible = false;
        cardboard22.visible = false;
        cardboard23.visible = false;
        cardboard24.visible = false;
        cardboard25.visible = false;
        cardboard26.visible = false;
        cardboard27.visible = false;
        cardboard28.visible = false;
        cardboard29.visible = false;
        cardboard30.visible = false;
        cardboard31.visible = false;
        cup.visible = false
        
        fill("white")
        textSize(50)
        text("Welcome to the game!", 500, 50)
        
        fill("white")
        textSize(50)
        text("This game will test how helpful you can be to a stranger", 150, 100)
        
        fill("white")
        textSize(50)
        text("You get 2 options, you can either help the person or decide not to", 50, 150)
        
        fill("white")
        textSize(50)
        text("The decision is yours", 500, 200)
        
        if (keyDown("space")) {
            gameState = "level1"
        }

    }
    
    if (gameState === "level1") {
        home.visible = false;
        sadMan.visible = false;
        background1.visible = true;
        man.visible = true
        yes1.visible = true;
        help1.visible = true;
        no1.visible=true
        
        if (keyDown(RIGHT_ARROW)) {
            console.info('right');
            man.x = man.x + 20
        }
        if (keyDown(LEFT_ARROW)) {
            console.info('left');
            man.x = man.x - 20
        }
        
        
        
        if(mousePressedOver(yes1)){
            gameState="level11"    
        }
        
        
        // if (keyDown(DOWN_ARROW)) {
            //     gameState = "level11";
            //     console.log("yes")
        // }
    }
    
    if (gameState === "level11") {
        
        createCanvas(1400,750)
        background("white");
        // home.visible = false;
        background1.visible = false;
        man.visible = false;
        help1.visible = false;
        yes1.visible = false;
        no1.visible=false;
        
        // if (keyDown(DOWN_ARROW)) {
            //     gameState = "level11";
            //     console.log("yes")
            // }
            
            // soifa = createSprite(20, 25, 18, 18);
            // soifa.addImage("help", manImg)
            // soifa.scale = 0.1
            // soifa.shapeColor = "yellow"
            soifa.visible = true; 
            cup.visible = true
            
            cardboard1.visible = true;
            cardboard2.visible = true;
            cardboard3.visible = true;
            //cardboard4.visible=false;
            cardboard5.visible = true;
            cardboard6.visible = true;
            cardboard7.visible = true;
            cardboard8.visible = true;
            cardboard9.visible = true;
            cardboard10.visible = true;
            cardboard11.visible = true;
            cardboard12.visible = true;
            cardboard13.visible = true;
            cardboard14.visible = true;
            cardboard15.visible = true;
            cardboard16.visible = true;
            cardboard17.visible = true;
            cardboard18.visible = true;
            cardboard19.visible = true;
            cardboard20.visible = true;
            cardboard21.visible = true;
            cardboard22.visible = true;
            cardboard23.visible = true;
            cardboard24.visible = true;
            cardboard25.visible = true;
            cardboard26.visible = true;
            cardboard27.visible = true;
            cardboard28.visible = true;
            cardboard29.visible = true;
            cardboard30.visible = true;
            cardboard31.visible = true; 
            
            
            fill("white")
            textSize(50)
            text("Hello. I need help finding my cat!!! would you help me?", 1200, 100)
            // soifa.y = 60;
            // soifa.x = 40;
            
            if (keyDown(UP_ARROW)) {
                soifa.y = soifa.y - 3;
            }
            if (keyDown(DOWN_ARROW)) {
                soifa.y = soifa.y + 3;
            }
            if (keyDown(RIGHT_ARROW)) {
                soifa.x = soifa.x + 3;
            }
            if (keyDown(LEFT_ARROW)) {
                soifa.x = soifa.x - 3;
            }
            
            edges=createEdgeSprites();
            
            if (soifa.isTouching(cardboard1)||soifa.isTouching(cardboard2)
            ||soifa.isTouching(cardboard3)
            ||soifa.isTouching(cardboard5)||soifa.isTouching(cardboard6)
            ||soifa.isTouching(cardboard7)||soifa.isTouching(cardboard8)
            ||soifa.isTouching(cardboard9)||soifa.isTouching(cardboard10)
            ||soifa.isTouching(cardboard11)||soifa.isTouching(cardboard12)
            ||soifa.isTouching(cardboard13)||soifa.isTouching(cardboard14)
            ||soifa.isTouching(cardboard15)||soifa.isTouching(cardboard16)
            ||soifa.isTouching(cardboard17)||soifa.isTouching(cardboard18)
            ||soifa.isTouching(cardboard19)||soifa.isTouching(cardboard20)
            ||soifa.isTouching(cardboard21)||soifa.isTouching(cardboard22)
            ||soifa.isTouching(cardboard23)||soifa.isTouching(cardboard24)
            ||soifa.isTouching(cardboard25)||soifa.isTouching(cardboard26)
            ||soifa.isTouching(cardboard27)||soifa.isTouching(cardboard28)
            ||soifa.isTouching(cardboard29)||soifa.isTouching(cardboard30)
            ||soifa.isTouching(cardboard31)||soifa.isTouching(edges)){
                soifa.x=20;
                soifa.y=25;
                soifa.velocityX=0;
                soifa.velocityY=0;
            }
            
            if (soifa.isTouching(cup)) {
                createCanvas(1400,750)
                background("white")
                
                soifa.visible=false;
                cup.visible=false;
                cardboard1.visible = false;
                cardboard2.visible = false;
                cardboard3.visible = false;
            //cardboard4.visible=false;
                cardboard5.visible = false;
                cardboard6.visible = false;
                cardboard7.visible = false;
                cardboard8.visible = false;
                cardboard9.visible = false;
                cardboard10.visible = false;
                cardboard11.visible = false;
                cardboard12.visible = false;
                cardboard13.visible = false;
                cardboard14.visible = false;
                cardboard15.visible = false;
                cardboard16.visible = false;
                cardboard17.visible = false;
                cardboard18.visible = false;
                cardboard19.visible = false;
                cardboard20.visible = false;
                cardboard21.visible = false;
                cardboard22.visible = false;
                cardboard23.visible = false;
                cardboard24.visible = false;
                cardboard25.visible = false;
                cardboard26.visible = false;
                cardboard27.visible = false;
                cardboard28.visible = false;
                cardboard29.visible = false;
                cardboard30.visible = false;
                cardboard31.visible = false;
                happyMan.visible=true
                cup.visible=true
                no1.visible=false;
                fill("blue")
                textSize(50)
                text("Thank you so much for helping me!!", 400, 350)
                
                fill("blue")
                textSize(50)
                text("As you can see i bought this cat for my children",330, 400)
                
                fill("blue")
                textSize(50)
                text("They would be very happy!!", 500, 450)
                
            }  
            
        }else if(mousePressedOver(no1)){
            gameState="level22"
        }
        if(gameState==="level22"){
            createCanvas(1400,750);
            background("white")
            
            man.visible = false;
            background1.visible = false;
            help1.visible = false
            yes1.visible = false;
            no1.visible=false;
            happyMan.visible=false
            sadMan.visible=true
            fill("red")
            textSize(50)
            text("You had a choice of helping the person but didn't",300, 400)
            fill("red")
            textSize(50)
            text("Better luck next time",600, 450)
            
        }
        
        drawSprites();
    }
    