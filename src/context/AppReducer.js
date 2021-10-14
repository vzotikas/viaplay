const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SERIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_SERIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (serie) =>
            serie._links.self.title !== action.payload._links.self.title
        ),
      };

    case "ADD_SERIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (serie) =>
            serie._links.self.title !== action.payload._links.self.title
        ),
        watched: [action.payload, ...state.watched],
      };

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (serie) =>
            serie._links.self.title !== action.payload._links.self.title
        ),
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (serie) =>
            serie._links.self.title !== action.payload._links.self.title
        ),
      };

    default:
      return state;
  }
};

export default AppReducer;
