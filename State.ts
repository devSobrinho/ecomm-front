class State {
  constructor(private value) {}

  state() {
    return this.value;
  }

  setState(value) {
    if (value?.length) {
      this.value.push(value);
      return this.value;
    }
    this.value = value;

    return this.value;
  }
}

const state = new State([]);

state.const[(carrinho, setCarrinho)] = useState([]);
