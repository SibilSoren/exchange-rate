const initialState = {
  name: "Sibil",
  isLoggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

//selectors

export const getName = (state) => state.user.name;
export const getIsLoggedIn = (state) => state.user.isLoggedIn;
