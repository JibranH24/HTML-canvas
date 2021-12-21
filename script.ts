"use strict"


let c=<HTMLCanvasElement>document.getElementById("myCanvas")
let ctx=<CanvasRenderingContext2D>c.getContext("2d")


requestAnimationFrame(bounceAnimation)



const numBalls=6

class Ball{                        //create class to represent all the balls. uses curly brackets
    
     x=Math.floor(Math.random()*c.width)          //these are properties of the ball, they dont need let
     y=Math.floor(Math.random()*c.height)
     dx=10
     dy=10
     ballRadius= 40

     constructor(dx:number,dy:number){
         this.dx=dx
         this.dy=dy
     }
    
     draw(){                                //
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.ballRadius, 0, 2 * Math.PI)   //"this" makes the code work on this instance of the class
        ctx.fillStyle="red"
        ctx.fill()
        ctx.stroke()
    
    }
     move(){
        this.x+=this.dx
        this.y+=this.dy

        if(this.y + this.dy > c.height-this.ballRadius || this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
        if(this.x + this.dx > c.width-this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }
     }
     gravity(){        //makes the balls curve
         this.dy+=.1
     }
     drag(){           //slows the balls down eventually
         this.dx*=.995
         this.dy*=.995
     }
     


}
let balls:Ball[]=[]    //empty array that the created balls get added into.balls is the array of Ball objects thats what the :Ball[] is.

for (let i=0;i<numBalls;i++){
   balls.push( new Ball(6,5))   //new creats a new instance of a class so a new Ball is created then pushed into array

}




function bounceAnimation(){
    ctx.fillStyle="rgba(225,0,0,0.1)"
    ctx.clearRect(0,0,c.width,c.height) //Clears the canvas

    for (let i=0;i<numBalls;i++){
     balls[i].draw()   //gives reference to the ball on the "i"th position in the array and then is iterating throigh so all balls are getting the method
     balls[i].move()
     balls[i].gravity()
     //balls[i].drag()
    //   if (i<numBalls-1){
    //       ctx.moveTo(balls[i].x,balls[i].y)
    //       ctx.lineTo(balls[i+1].x,balls[i+1].y)  //this code adds a line between each ball
    //       ctx.stroke()
    //   }
    }
    

   requestAnimationFrame(bounceAnimation) // calls the next frame (1/60th of a second later)

}