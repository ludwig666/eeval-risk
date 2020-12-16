class Position {
  constructor(price, lot) {
    this.price = price;
    this.lot = lot;
  }
}

const Order = {
  data() {
    return {
      price: 104.3,
      lot: 0.01,
      short: [new Position(100, 0.01)],
      long: [new Position(101, 0.02), new Position(102, 0.03)],
    };
  },
  methods: {
    buy_open() {
      this.long.push(new Position(this.price, this.lot));
    },
    sell_open() {
      this.short.push(new Position(this.price, this.lot));
    },
    reset() {
      this.short = [];
      this.long = [];
    },
  },
};

Vue.createApp(Order).mount("#order");

// leverage slider
var slider = new Slider("#ex13", {
  value: 1,
  ticks: [0, 1, 2, 3, 4],
  ticks_labels: ["x1", "x25", "x100", "x500", "x888"],
  tooltip: "hide",
});
