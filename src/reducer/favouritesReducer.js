export function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAV":
      if (state.includes(action.payload)) {
        return state.filter((id) => id !== action.payload);
      }

      return [...state, action.payload];

    default:
      return state;
  }
}
