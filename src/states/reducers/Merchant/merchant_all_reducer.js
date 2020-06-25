const initialState = {
  is_loading_result_merchant_reducer: true,
  result_merchant_reducer: [],
  current_page_result_merchant_reducer: 1,
  last_page_result_merchant_reducer: 1,
}

const merchant_result = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'GET_ALL_MERCHANT':
    return {
      ...state,
      is_loading_result_merchant_reducer: false,
      result_merchant_reducer: [...action.payload.data],
      current_page_result_merchant_reducer: action.payload.meta.pagination.current_page,
      last_page_result_merchant_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_GET_ALL_MERCHANT':
    return {
      ...state,
      result_merchant_reducer: [...state.result_merchant_reducer, ...action.payload.data],
      current_page_result_merchant_reducer: action.payload.meta.pagination.current_page,
      last_page_result_merchant_reducer: action.payload.meta.pagination.last_page
    }
    case 'CREATE_MERCHANT':
    return {
      ...state,
      result_merchant_reducer: [...state.result_merchant_reducer, action.payload]
    }
    case 'DELETE_MERCHANT':
    return {
      ...state,
      result_merchant_reducer: [...action.payload]
    }
    default:
      return state;
  }
}

export default merchant_result
