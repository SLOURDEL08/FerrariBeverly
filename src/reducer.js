const initialState = {
  currentIndex: 0,
  items: [/* Vos données d'items ici */],
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PREV_SLIDE':
      return {
        ...state,
        currentIndex: Math.max(0, state.currentIndex - 1),
      };
    case 'NEXT_SLIDE':
      return {
        ...state,
        currentIndex: Math.min(state.items.length - 3, state.currentIndex + 1),
      };
    default:
      return state;
  }
};

export default sliderReducer;
