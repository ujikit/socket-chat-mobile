const initialState = {
  me_reducer: {
    id: null,
    username: null,
    id_socket: null,
    role: null,
  },
}

const global_all = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'ME':
    return {
      ...state,
      me_reducer: action.payload
    }
    default:
      return state;
  }
}

export default global_all
