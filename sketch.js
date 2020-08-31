const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var rain ,drops = [];
var maxDrops = 275;
var man;
var l1i,l2i,l3i;
//var lightning;
//var rand = random(0,400)
var manI;

function preload(){
    manI = loadImage("images/manInUmbrella.png");
    l1i = loadImage("images/slazzer-edit-image (2).png")
    l2i = loadImage("images/slazzer-edit-image__3_-removebg-preview.png")
    l3i = loadImage("images/white-lightning-illustration-png-clip-art-thumbnail (1).png")
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

   // manI.scale = 0.45
 
    man = new Umbrella(150,600)
    
    for(var i =0 ; i< maxDrops ; i++){ 
        //rain = 
 drops.push(new Drop(random(0,400),random(0,650)))
    
 }  
 //lightning = createSprite(200,200,100,100);
//lightning.addImage("lighning",l1i)
/* lightning.scale = 2*/
}

function draw(){
    Engine.update(engine);
    background("black");
man.display()

    
    if(frameCount%100 === 0 && frameCount > 0 ){
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1:
                 lightning = createSprite(random(75,375),50);
                 lightning.addImage("lighning",l1i)
                 lightning.lifetime = 10
                break;
                case 2:
                    lightning = createSprite(random(75,375),50);
                    lightning.addImage("lighning",l2i)
                    lightning.lifetime = 10
                    break;
                    /*
                    case 3:
                        lightning.changeImage("l3i")
                        break;*/
                        default:
                            console.log("wow")
                            break;
        }
    }
  
   if(frameCount > 3)
   { 
       for(var i =0 ; i < drops.length ; i++)
       { 
       drops[i].display();
       drops[i].update()
    }  
} 
    /*for(var i =0 ; i < maxDrops ; i++){ 
        drops[i].update();
     }   */

     //console.log(lightning.depth,rand)
     drawSprites();
}   


