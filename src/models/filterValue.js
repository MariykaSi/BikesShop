const filterValue = {
  state: {
    priceFrom: 0,
    priceTo: 1000
  },
  reducers: {
    filterPriceFrom(state, payload) {
      state.priceFrom = Number(payload);
    },
    filterPriceTo(state, payload) {
      state.priceTo = Number(payload);
    }
  }
};

export default filterValue;
