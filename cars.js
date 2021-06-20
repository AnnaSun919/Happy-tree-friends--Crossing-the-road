class Cars {
  constructor() {
    this.x = null;
    this.y = null;
    this.height = 120;
    this.width = 120;
    this.carimage = new Image();
    this.carimage.src = "./image/car1.png";
  }

  drawCar(element) {
    this.x = element[0];
    this.y = element[1];
    ctx.drawImage(
      this.carimage,
      element[0],
      element[1],
      this.height,
      this.width
    );
    element[0] += 15;

    if (level === 3) {
      element[0] += 5;
    }
  }

  reload(element) {
    if (element[0] > canvas.width) {
      element[0] = 0 - Math.floor(Math.random() * 1000);
    }
  }
}
