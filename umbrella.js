class Umbrella {
    constructor(){
        var options = {
             isStatic: true,
             restitution: 0.5
        }
        this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_3.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        var radius = 25;
        this.body = Matter.Bodies.circle(100,350, radius, options);
        this.width = radius;
        this.height = radius;
        World.add(world, this.body);
   }

   display(){
        var pos = this.body.position;
        image(this.image, pos.x-90, pos.y-20,175,175);
   }
}