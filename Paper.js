class Paper{
    constructor(x,y,width,height){
       var options={
           isStatic:true,
           restitution:0.3,
           density:1.2 

        }
         this.body = Bodies.circle(300, 400,70 ,options);   
         World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        fill("white")
        ellipse(pos.x,pos.y,70)
    }
}