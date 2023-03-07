const defaultState = {
  count: 0,
  name: 'test',
  age: 20,
};
const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      return { ...action.state, count: (state.count += 1) };
    case 'REDUCE_BUTTON_CLICK':
      return { ...action.state, count: (state.count -= 1) };
    default:
      return state;
  }
};
export default countReducer;
