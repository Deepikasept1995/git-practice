const car = {
  brand: "BMW",
  speed: "50MPH",
  drive: function() {
    console.log (`${this.brand} is driving at ${this.speed}`);
  }
};
car.drive();