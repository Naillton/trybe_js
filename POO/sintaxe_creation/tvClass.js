"use strict";
class TV {
    constructor(b, s, r, c) {
        this._connectedTo = '';
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
        this.connectedTo;
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(newValue) {
        if (newValue === this._connections) {
            this._connectedTo = newValue;
        }
        else {
            this._connectedTo = "Sorry, connection unavailable!";
        }
    }
    turnOn() {
        console.log(`
      VENHA COMPRAR JÁ A TV
      ${this._brand}
      ${this._size}
      ${this._resolution}
      ${this._connections}
    `);
    }
    ;
}
const tv1 = new TV('Samsung', 48, '4K', 'HDMI');
tv1.turnOn();
tv1.connectedTo = 'HDMIS';
console.log(tv1.connectedTo);
