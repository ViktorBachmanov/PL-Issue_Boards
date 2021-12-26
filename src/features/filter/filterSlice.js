const initialState = {
  pattern: '.',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'filter/set': {
      let newPattern = action.payload;
      if (newPattern === '*') {
        newPattern = '.';
      }
      return { pattern: newPattern };
    }
    default:
      return state;
  }
}
