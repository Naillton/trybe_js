class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string;

  constructor(
    b: string,
    s: number,
    r: string,
    c: string,
  ) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(`
      VENHA COMPRAR JÁ A TV
      ${this.brand}
      ${this.size}
      ${this.resolution}
      ${this.connections}
    `);
  };
}

const tv1 = new TV(
  'Samsung',
  48,
  '4K',
  'HDMI'
);

tv1.turnOn();