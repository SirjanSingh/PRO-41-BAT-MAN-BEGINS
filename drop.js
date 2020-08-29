class Drop {
    constructor(x,y){
var options = {
    isStatic : false,
    friction :0,
    restitution : 0.2
}
this.body = Bodies.circle(x,y,2,options)
this.radius = 2;
World.add(world , this.body)
    }

    update(){
        if(this.body.position.y>height||this.body.position.x>400||this.body.position.x<0){
          Body.setPosition(this.body, {x: random(0,400), y: random(0,200)})
        }
    }
    display(){
        var pos =this.body.position;
ellipseMode(RADIUS)
fill(rgb(random(0,150),random(0,216),random(217,255)))
ellipse(pos.x,pos.y,2,)
    }
}