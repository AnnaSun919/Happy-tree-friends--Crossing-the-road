let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')


//Game start image here
//-------------------------------
let startBg =new Image()
startBg.src ='./image/startbg.jpeg'
let startBtn =document.querySelector("#start")

//Main image here 
//-------------------------------
let bg = new Image();
bg.src = './image/background-main12.png'
let cuddle = new Image();
cuddle.src ='./image/clearnutty.png'
let road = new Image();
road.src = './image/road2.png'
let carred = new Image();
carred.src ='./image/car1.png'

//gameover image here
let gameoverBG = new Image()
gameoverBG.src = './image/crash.jpg'

//audio here
let audiostart = new Audio()
audiostart.src ='./audio/happy-tree-friends-theme-song.mp3'



//Default stuff here 
let cuddleY = canvas.height-100
let cuddleX = canvas.width/2
intervalId = null
let gameover = false;
let candy = 0
let level = 1
let carX = 0
let carX2 = -100
let carX3 = -200

ctx.drawImage(startBg,0,0)

//the start button first 
function start(){
  startBtn.style.display = 'none'
  startBg.style.display = 'none'
  audiostart.play()
  draw()
}

function road1(height){
  ctx.drawImage(road,0,height,canvas.width,100)
}

function car1( y){
  ctx.drawImage(carred,carX,y,120,120)
  carX = carX +10
  if(carX > 800){
    carX = -Math.floor(Math.random()*100)
  }
 return carX;
}

function car2( y){
  ctx.drawImage(carred,carX2,y,120,120)
  carX2 = carX2 +15
  if(carX2 > 800){
    carX2 = -Math.floor(Math.random()*1000)
  }
 return carX2;
}

function car3( y){
  ctx.drawImage(carred,carX3,y,120,120)
  carX3 = carX3 + 20
  if(carX3 > 800){
    carX3 = -Math.floor(Math.random()*1000)
  }
 return carX3;
}

function draw(){
 
    ctx.drawImage(bg,0,0,800,750)

    road1(canvas.height-200)

    car1(canvas.height -200)

    if(level === 2){
      road1(canvas.height-400)
      car2(canvas.height -400)
      carX = carX + 5
    }

    if(level===3){
      road1(canvas.height-400)
      road1(canvas.height-300)
   
      car2(canvas.height -400)
      car3(canvas.height -300)
      carX = carX + 10
      carX2 = carX2 +15
    }
    ctx.drawImage(cuddle,cuddleX,cuddleY, 100 ,100)
    ctx.font = '20px Verdana'
    ctx.fillText(`Level: ${level}`, canvas.width - 100, 50)
   
  //check winning 
  if(cuddleY === 50){
    level = level+1
    cuddleY = canvas.height-100
  
  }
  if(level === 4){
    location.reload()
  }


   //check collision here
    if(cuddleY===canvas.height -200  && cuddleX-100 <=carX && cuddleX-100 >=carX-150){
        gameover= true;
    }
    if(cuddleY===canvas.height -400  && cuddleX-100 <=carX2 && cuddleX-100 >=carX2-150){
      gameover= true;
  }
  if(cuddleY===canvas.height -300  && cuddleX-100 <=carX3 && cuddleX-100 >=carX3-150){
    gameover= true;
}




    if(gameover){

      cuddleX = cuddleX+10
      setInterval(() => {
        cancelAnimationFrame(intervalId)
        ctx.drawImage(gameoverBG,0,0, 800, 750)
        
      }, 1000);
        
        setInterval(() => {
          location.reload()
          
        }, 2000);
       
      }

      else{
        intervalId = requestAnimationFrame( draw )
        audiostart.play 
      }
}



//if got time add some effect when gameover 


window.addEventListener('load', () => {
 
ctx.drawImage(startBg,0,0)

//start button set up 
  startBtn.addEventListener('click', () => {
    start()
  })
  
//key down (up and down// right and let)
document.addEventListener('keydown', (event) =>{
  //cuddle move up
  if (event.code == 'ArrowUp') {
      cuddleY = cuddleY - 100
  }
  //cuddle move down
   if (event.code == 'ArrowDown') {
    
    if(cuddleY+100 == canvas.height){
      cuddleY = cuddleY + 0
   
    }
    else{
      cuddleY = cuddleY + 100
    }
  }
  //cuddle move left 
  if (event.code == 'ArrowLeft') {
    
    if(cuddleX == 0){
      cuddleX = cuddleX -0
      console.log(cuddleX)
    }
    else{
      cuddleX = cuddleX - 100
    }
  }
  //cuddle move right
  if (event.code == 'ArrowRight') {
    
    if(cuddleX+100 == canvas.width){
      cuddleX = cuddleX +0
    }
    else{
      cuddleX = cuddleX + 100
    }
  }
})
})
