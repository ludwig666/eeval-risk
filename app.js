const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!!'
    }
  }
};

Vue.createApp(HelloVueApp).mount('#app');

const Short = {
  data() {
    return {
      items: [110, 112, 113, 114, 115, 116, 117, 118, 119]
    }
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items)
    }
  }
};

Vue.createApp(Short).mount('#short');
const Long = {
  data() {
    return {
      items: [100, 102, 103, 104, 105, 106, 107, 108, 109]
    }
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items)
    }
  }
};

Vue.createApp(Long).mount('#long');
