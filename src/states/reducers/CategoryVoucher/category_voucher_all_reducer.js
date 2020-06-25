const initialState = {
  all_category_voucher_reducer: [],
}

const category_voucher_all = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'GET_ALL_CATEGORY_VOUCHER':
    return {
      ...state,
      all_category_voucher_reducer: [...action.payload]
    }
    case 'CREATE_CATEGORY_VOUCHER':
    return {
      ...state,
      all_category_voucher_reducer: [...state.all_category_voucher_reducer, action.payload]
    }
    case 'DELETE_CATEGORY_VOUCHER':
    return {
      ...state,
      all_category_voucher_reducer: [...action.payload]
    }
    default:
      return state;
  }
}

export default category_voucher_all
