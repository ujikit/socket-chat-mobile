const initialState = {
  me_reducer: {},
}

const profile_all = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'ME':
    return {
      ...state,
      me_reducer: {...state.me_reducer, ...action.payload}
    }
    default:
      return state;
  }
}

export default profile_all
