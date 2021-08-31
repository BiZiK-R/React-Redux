const reducer = (state = 5, action) => {
    switch (action.type) {
      case 'INC':
        return ++state;
      case 'DEC':
        return --state;
      case 'RST':
        return 0;
      case 'RND':
        state += action.value;
        return state;
      default: 
        return state;
    }
}

export default reducer;