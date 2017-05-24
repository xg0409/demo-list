export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBTRACT':
      if(state == 0){
        return 0;
      }
      return state - 1;
    default:
      return state;
  }
}