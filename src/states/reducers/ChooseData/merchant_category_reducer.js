const initialState = {
  choose_merchant_category_reducer: {id: null, name: null},
}

const merchant_category = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'CHOOSE_MERCHANT_CATEGORY':
    return {
      ...state,
      choose_merchant_category_reducer: action.payload
    }
    default:
      return state;
  }
}

export default merchant_category
