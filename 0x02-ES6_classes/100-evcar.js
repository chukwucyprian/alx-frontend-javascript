// 100-evcar.js (EVCar class)

import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const { _brand, _motor, _color, _range } = this;
    const car = new Car();
    car._brand = _brand;
    car._motor = _motor;
    car._color = _color;
    return car;
  }
}
