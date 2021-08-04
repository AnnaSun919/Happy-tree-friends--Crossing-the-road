class Cars {
  constructor() {
    this.x = null;
    this.y = null;
    this.number = null;
    this.height = 120;
    this.width = 120;
    this.car1 = new Image();
    this.car2 = new Image();
    this.car3 = new Image();
    this.car1.src = "./image/car1.png";
    this.car2.src = "./image/car3.png";
    this.carimage = [this.car1, this.car2];
    // this.carimage.src = "./image/car1.png";
  }

  drawCar(element) {
    this.x = element[0];
    this.y = element[1];
    this.number = element[2];
    ctx.drawImage(
      this.carimage[element[2]],
      element[0],
      element[1],
      this.height,
      this.width
    );
    element[0] += 15;

    if (level === 3) {
      element[0] += 5;
    }

    if (element[0] > canvas.width) {
      element[2] = Math.round(Math.random() * 1);
      element[0] = 0 - Math.floor(Math.random() * 1000);
    }
  }
}
