class Wall
{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
               let option={
            isStatic:true
        }
       this. body=Bodies.rectangle(this.x,this.y,option)
        World.add(world,this.body)
this.w=w
this.h=h
    }
    show(){
        push()
        fill("pink")
        rect(position.x,position.y)
        pop()
    }
}