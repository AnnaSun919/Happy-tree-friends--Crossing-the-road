let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

//Game start image here
//-------------------------------
let startBg = new Image();
startBg.src = "./image/startbg.jpeg";
let startBtn = document.querySelector("#start");

//Main image here
//-------------------------------
let bg = new Image();
bg.src = "./image/background-main2.jpg";
let cuddle = new Image();
cuddle.src = "./image/clearnutty.png";
let road = new Image();
road.src = "./image/road2.png";
let candyimg = new Image();
candyimg.src = "./image/candy/candy2.4.png";
let winImg = new Image();
winImg.src = "./image/nuttysafe.jpeg";

//------------------------------------------------------
//gameover image here
let gameoverBG = new Image();
gameoverBG.src = "./image/crash.jpg";

//audio here
let audiostart = new Audio();
audiostart.src = "./audio/happy-tree-friends-theme-song-1-hour.mp3";

//Default variables here
let cuddleY = canvas.height - 100;
let cuddleX = canvas.width / 2;
intervalId = null;
let gameover = false;
let candyAmount = 5;
let level = 1;
let win = false;
let car1 = new Cars();

let carArray = [[0, canvas.height - 200, 0]];

let candyArray = [
  [600, 520],
  [250, 350],
];

ctx.drawImage(startBg, 0, 0);

//the start button first
function start() {
  startBtn.style.display = "none";
  startBg.style.display = "none";
  audiostart.play();
  audiostart.volume = 0.1;
  draw();
}

function road1(height) {
  ctx.drawImage(road, 0, height, canvas.width, 100);
}

let sizeChange = 0.5;
let dw = 50;
let dh = 50;

function candy3(element) {
  ctx.drawImage(candyimg, element[0], element[1], dw, dh);

  if (dw < 40 || dw > 60) {
    sizeChange = -sizeChange;
  }

  element[0] = element[0] - sizeChange / 2;
  element[1] = element[1] - sizeChange / 2;
  dw = dw + sizeChange;
  dh = dh + sizeChange;

  if (
    element[0] < cuddleX + 100 &&
    element[0] + dw > cuddleX &&
    element[1] < cuddleY + 100 &&
    element[1] + dh > cuddleY
  ) {
    element[0] = Math.random() * (canvas.width - 100) + 100;
    element[1] = Math.random() * (canvas.height - 301) + 300;

    candyAmount = candyAmount - 1;
  }
}

function draw() {
  ctx.drawImage(bg, 0, 0, 800, 750);
  road1(canvas.height - 200);

  if (level === 1) {
    if (cuddleY === 50) {
      level = level + 1;
      cuddleY = canvas.height - 100;
      carArray.push([0, canvas.height - 400, 1]);
    }
  }

  if (level === 2) {
    road1(canvas.height - 400);

    if (cuddleY === 50) {
      level = level + 1;
      cuddleY = canvas.height - 100;
      carArray.push([0, canvas.height - 300, 0]);
    }
  }

  if (level === 3) {
    road1(canvas.height - 400);
    road1(canvas.height - 300);

    ctx.font = "bold 20px Verdana";
    //two candies
    candyArray.forEach((element) => {
      candy3(element);
    });

    if (candyAmount > 0) {
      ctx.fillText(`you need to collect : ${candyAmount} candy `, 20, 50);
    }
    if (cuddleY === 50 && candyAmount <= 0) {
      level = level + 1;
    }
  }
  if (level === 4) {
    win = true;
  }

  carArray.forEach((element) => {
    car1.drawCar(element);
  });

  ctx.drawImage(cuddle, cuddleX, cuddleY, 100, 100);
  ctx.font = "20px Verdana";
  ctx.fillText(`Level: ${level}`, canvas.width - 100, 50);

  //check collision here
  function checkGameover(element) {
    if (
      cuddleY === element[1] &&
      cuddleX - 100 <= element[0] &&
      cuddleX - 100 >= element[0] - 150
    ) {
      gameover = true;
    }
  }

  carArray.forEach((element) => {
    checkGameover(element);
  });

  if (win) {
    ctx.drawImage(winImg, 0, 0, 800, 800);

    setInterval(() => {
      cancelAnimationFrame(intervalId);
    }, 1000);

    setInterval(() => {
      location.reload();
    }, 2000);
  }

  if (gameover) {
    setInterval(() => {
      cancelAnimationFrame(intervalId);
      ctx.drawImage(gameoverBG, 0, 0, 800, 750);
    }, 1000);

    setInterval(() => {
      location.reload();
    }, 2000);
  } else {
    intervalId = requestAnimationFrame(draw);
    audiostart.play;
  }
}

//if got time add some effect when gameover

window.addEventListener("load", () => {
  ctx.drawImage(startBg, 0, 0);

  //start button set up
  startBtn.addEventListener("click", () => {
    start();
  });

  //key down (up and down// right and let)
  document.addEventListener("keydown", (event) => {
    //cuddle move up
    if (event.code == "ArrowUp") {
      cuddleY = cuddleY - 100;
    }
    //cuddle move down
    if (event.code == "ArrowDown") {
      if (cuddleY + 100 == canvas.height) {
        cuddleY = cuddleY + 0;
      } else {
        cuddleY = cuddleY + 100;
      }
    }
    //cuddle move left
    if (event.code == "ArrowLeft") {
      if (cuddleX == 0) {
        cuddleX = cuddleX - 0;
        console.log(cuddleX);
      } else {
        cuddleX = cuddleX - 100;
      }
    }
    //cuddle move right
    if (event.code == "ArrowRight") {
      if (cuddleX + 100 == canvas.width) {
        cuddleX = cuddleX + 0;
      } else {
        cuddleX = cuddleX + 100;
      }
    }
  });
});
