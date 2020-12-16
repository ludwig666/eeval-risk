class Position {
  constructor(price, lot) {
    this.price = price;
    this.lot = lot;
  }
}

function radians_per_ratio(ratio) {
  return 2 * Math.PI * ratio;
}

function fill_arc(ratio) {
  var x = 50 + 50 * Math.sin(radians_per_ratio(ratio));
  var y = 50 - 50 * Math.cos(radians_per_ratio(ratio));
  var large_arc = ratio > 0.5 ? 1 : 0;
  return `M 50 50 L 50 0 A 50 50 0 ${large_arc} 1 ${x} ${y} L 50, 50`;
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
  computed: {
    d: function () {
      var ratio = this.price / 100.0;
      if (this.price > 100.0) {
        ratio = 0.999999;
      }

      if (this.price < 0) {
        ratio = 0.0;
      }

      return fill_arc(ratio);
    },
    d2: function () {
      var ratio = (2 * this.price) / 100.0;
      if (this.price > 100.0) {
        ratio = 0.999999;
      }

      if (this.price < 0) {
        ratio = 0.0;
      }

      return fill_arc(ratio);
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
