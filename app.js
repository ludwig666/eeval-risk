const Order = {
  data() {
    return {
      price: 104.3,
      short: [100],
      long: [101, 102],
    };
  },
  methods: {
    buy_open() {
      this.long.push(this.price);
    },
    sell_open() {
      this.short.push(this.price);
    },
    reset() {
      this.short = [];
      this.long = [];
    },
  },
};

Vue.createApp(Order).mount("#order");
