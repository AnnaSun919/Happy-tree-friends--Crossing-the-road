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
let candyimg = new Image();
candyimg.src = './image/candy/candy2.4.png'

let winImg = new Image()
winImg.src ="./image/nuttysafe.jpeg"



//------------------------------------------------------
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
let candyAmount = 2
let level = 1
let carX = 0
let carX2 = -100
let carX3 = -200
let win = false 

let candyArray =[[600,520],[350,350]]






ctx.drawImage(startBg,0,0)

//the start button first 
function start(){
  startBtn.style.display = 'none' 
  startBg.style.display = 'none'
  audiostart.play()
  audiostart.volume = 0.1
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


let sizeChange = 0.5
let dw = 50
let dh = 50


function candy3(element){
  ctx.drawImage(candyimg,element[0],element[1],dw,dh)

  if(dw < 40 ||dw> 60){
    sizeChange = - sizeChange
  }

  element[0] = element[0] - (sizeChange/2)
  element[1] = element[1] - (sizeChange/2)
  dw = dw + sizeChange
  dh = dh + sizeChange

  if(  element[0] < cuddleX + 100 &&
    element[0] + dw > cuddleX &&
    element[1] < cuddleY + 100 &&
    element[1] + dh > cuddleY){
   

     element[0] = Math.floor(Math.random()*canvas.width -300)
     element[1] = Math.floor(Math.random()*canvas.width -300)
  
    candyAmount = candyAmount -1


  }
      // candyAmount = candyAmount -1

}
// function movingcandy(){
//   ctx.beginPath()

//   ctx.drawImage(candyimg,0+100,canvas.height -200, 100,100)
//   candyimg.rotate(20*Math.PI/180);
  
//   ctx.closePath()




// function movingCandy(x,y,size){

//   ctx.drawImage(candyimg,x,y,size)



//  function Candy (candyX,candyY,dw,dh){
//     this.candyX = candyX
//     this.candyY = candyY;
//     this.dw = dw
//     this.dh = dh
// }





 




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
      carX = carX 
      carX2 = carX2 
      ctx.font = 'bold 20px Verdana'
      candyArray.forEach((element) => {
        candy3(element)
        })
      
      
      if(candyAmount>0){
        ctx.fillText(`you need to collect : ${candyAmount} candy(ies) `,  20, 50)
        }
    }
    ctx.drawImage(cuddle,cuddleX,cuddleY, 100 ,100)
    ctx.font = '20px Verdana'
    ctx.fillText(`Level: ${level}`, canvas.width - 100, 50)
   
  //check winning 
  // if(cuddleY === canvas.height -200 && cuddleX-100 <=candyX && cuddleX-100 >=candyX-100 ){
  //   console.log("candycollected")

  // }

  if(level ===1 || level ===2){
  if(cuddleY === 50){
    level = level+1
    cuddleY = canvas.height-100
  
  }
}

if(level ===3){
  if(cuddleY === 50 && candyAmount === 0 ){
    level = level+1
 
  
  }
}
  if(level === 4){
    win = true
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


if(win){

ctx.drawImage(winImg,0,0,800,750)

  setInterval(() => {
    location.reload()
    
  }, 2000);
  }
  

    if(gameover){

      
      setInterval(() => {
        audiostart.play()
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
