const initialState = {
  is_authenticated: false,
}

const global_all = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'SET_IS_AUTHENTICATED':
    return {
      ...state,
      is_authenticated: action.payload
    }
    default:
      return state;
  }
}

export default global_all
