const initialState = {
  amount: "12.0",
  currencyCode: "USD",
};

export function rateReducer(state = initialState, action) {
  switch (action.type) {
    case "rate/changeAmount":
      return { ...state, amount: action.payload };
    case "rate/changeCurrencyCode":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

//selectors

export const getAmount = (state) => state.rate.amount;
export const getCurrencyCode = (state) => state.rate.currencyCode;
