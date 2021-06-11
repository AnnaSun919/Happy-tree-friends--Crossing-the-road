let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

//load image here 
let bg = new Image();
bg.src = './image/background-main12.png'
let cuddle = new Image();
cuddle.src ='./image/clearnutty.png'
let road = new Image();
road.src = './image/road2.png'
let carred = new Image();
carred.src ='./image/car1.png'

//put songs and scream here 

//the upper corner shows level, +1 when win a level 

//create a reatagle to be a check collinsion part 
function draw(){
    ctx.drawImage(bg,0,0,800,800)
    ctx.drawImage(road,0,canvas.height-200,canvas.width,100)
    ctx.drawImage(cuddle,canvas.width/2,canvas.height-100, 80,80)
    ctx.drawImage(carred,0,canvas.height-230,120,150)
}
//animation part 


//if got time add some effect when gameover 


window.addEventListener('load', () => {
    draw()
//key down (up and down)


  
})
