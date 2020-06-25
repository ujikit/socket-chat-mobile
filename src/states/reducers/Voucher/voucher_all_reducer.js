const initialState = {
  result_home_voucher_reducer: [],
  is_loading_result_home_voucher_reducer: true,
  current_page_result_home_voucher_reducer: 1,
  last_page_result_home_voucher_reducer: 1,

  result_admin_voucher_reducer: [],
  is_loading_result_admin_voucher_reducer: true,
  current_page_result_admin_voucher_reducer: 1,
  last_page_result_admin_voucher_reducer: 1,

  result_voucher_shared_by_admin_reducer: [],
  is_loading_result_voucher_shared_by_admin_reducer: true,
  current_page_result_voucher_shared_by_admin_reducer: 1,
  last_page_result_voucher_shared_by_admin_reducer: 1,
  result_voucher_transfered_to_member_reducer: [],
  is_loading_result_voucher_transfered_to_member_reducer: true,
  current_page_result_voucher_transfered_to_member_reducer: 1,
  last_page_result_voucher_transfered_to_member_reducer: 1,
  result_voucher_transfered_to_member_and_used_reducer: [],
  is_loading_result_voucher_transfered_to_member_and_used_reducer: true,
  current_page_result_voucher_transfered_to_member_and_used_reducer: 1,
  last_page_result_voucher_transfered_to_member_and_used_reducer: 1,

  result_search_voucher_reducer: [],
  is_loading_result_search_voucher_reducer: true,
  current_page_result_search_voucher_reducer: 1,
  last_page_result_search_voucher_reducer: 1,
}

const voucher_all = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'GET_ALL_ADMIN_VOUCHER':
    return {
      ...state,
      result_admin_voucher_reducer: [...action.payload.data],
      is_loading_result_admin_voucher_reducer: false,
      current_page_result_admin_voucher_reducer: action.payload.meta.pagination.current_page,
      last_page_result_admin_voucher_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_GET_ALL_ADMIN_VOUCHER':
    return {
      ...state,
      result_admin_voucher_reducer: [...state.result_admin_voucher_reducer, ...action.payload.data],
      current_page_result_admin_voucher_reducer: action.payload.meta.pagination.current_page,
      last_page_result_admin_voucher_reducer: action.payload.meta.pagination.last_page
    }

    // 1.VOUCHER SHARED BY ADMIN
    case 'GET_ALL_VOUCHER_SHARED_BY_ADMIN':
    return {
      ...state,
      result_voucher_shared_by_admin_reducer: [...action.payload.data],
      is_loading_result_voucher_shared_by_admin_reducer: false,
      current_page_result_voucher_shared_by_admin_reducer: action.payload.meta.pagination.current_page,
      last_page_result_voucher_shared_by_admin_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_VOUCHER_SHARED_BY_ADMIN':
    return {
      ...state,
      result_voucher_shared_by_admin_reducer: [...state.result_voucher_shared_by_admin_reducer, ...action.payload.data],
      current_page_result_voucher_shared_by_admin_reducer: action.payload.meta.pagination.current_page,
      last_page_result_voucher_shared_by_admin_reducer: action.payload.meta.pagination.last_page
    }
    // ./VOUCHER SHARED BY ADMIN

    // 2.VOUCHER TRANSFERED TO MEMBER
    case 'GET_ALL_VOUCHER_TRANSFERED_TO_MEMBER':
    return {
      ...state,
      result_voucher_transfered_to_member_reducer: [...action.payload.data],
      is_loading_result_voucher_transfered_to_member_reducer: false,
      current_page_result_voucher_transfered_to_member_reducer: action.payload.meta.pagination.current_page,
      last_page_result_voucher_transfered_to_member_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_VOUCHER_TRANSFERED_TO_MEMBER':
    return {
      ...state,
      result_voucher_transfered_to_member_reducer: [...state.result_voucher_transfered_to_member_reducer, ...action.payload.data],
      current_page_result_voucher_transfered_to_member_reducer: action.payload.meta.pagination.current_page,
      last_page_result_voucher_transfered_to_member_reducer: action.payload.meta.pagination.last_page
    }
    // ./VOUCHER TRANSFERED TO MEMBER

    // 3.VOUCHER TRANSFERED TO MEMBER AND USED
    case 'GET_ALL_VOUCHER_TRANSFERED_TO_MEMBER_AND_USED':
    return {
      ...state,
      result_voucher_transfered_to_member_and_used_reducer: [...action.payload.data],
      is_loading_result_voucher_transfered_to_member_and_used_reducer: false,
      current_page_result_voucher_transfered_to_member_and_used_reducer: action.payload.meta.pagination.current_page,
      last_page_result_voucher_transfered_to_member_and_used_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_VOUCHER_TRANSFERED_TO_MEMBER_AND_USED':
    return {
      ...state,
      result_voucher_transfered_to_member_and_used_reducer: [...state.result_voucher_transfered_to_member_and_used_reducer, ...action.payload.data],
      current_page_result_voucher_transfered_to_member_and_used_reducer: action.payload.meta.pagination.current_page,
      last_page_result_voucher_transfered_to_member_and_used_reducer: action.payload.meta.pagination.last_page
    }
    // ./VOUCHER TRANSFERED TO MEMBER AND USED

    case 'RESULT_HOME_VOUCHER':
    return {
      ...state,
      result_home_voucher_reducer: [...action.payload.data],
      is_loading_result_home_voucher_reducer: false,
      current_page_result_home_voucher_reducer: action.payload.meta.pagination.current_page,
      last_page_result_home_voucher_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_RESULT_HOME_VOUCHER':
    return {
      ...state,
      result_home_voucher_reducer: [...state.result_home_voucher_reducer, ...action.payload.data],
      current_page_result_home_voucher_reducer: action.payload.meta.pagination.current_page,
      last_page_result_home_voucher_reducer: action.payload.meta.pagination.last_page
    }
    case 'CREATE_VOUCHER':
    return {
      ...state,
      result_admin_voucher_reducer: [action.payload, ...state.result_admin_voucher_reducer]
    }
    case 'DELETE_VOUCHER':
    return {
      ...state,
      result_admin_voucher_reducer: [...action.payload]
    }

    // RESULT_SEARCH
    case 'GET_ALL_RESULT_SEARCH_VOUCHER':
    return {
      ...state,
      result_search_voucher_reducer: [...action.payload.data],
      is_loading_result_search_voucher_reducer: false,
      current_page_result_search_voucher_reducer: action.payload.meta.pagination.current_page,
      last_page_result_search_voucher_reducer: action.payload.meta.pagination.last_page
    }
    case 'LOAD_MORE_GET_ALL_RESULT_SEARCH_VOUCHER':
    return {
      ...state,
      result_search_voucher_reducer: [...state.result_search_voucher_reducer, ...action.payload.data],
      current_page_result_search_voucher_reducer: action.payload.meta.pagination.current_page,
      last_page_result_search_voucher_reducer: action.payload.meta.pagination.last_page
    }
    // used by ResultSearch load more Pagination
    case 'INCREMENT_CURRENT_PAGE':
    return {
      ...state,
      current_page_result_voucher_shared_by_admin_reducer: state.current_page_result_voucher_shared_by_admin_reducer+1
    }
    // ./RESULT_SEARCH
    default:
      return state;
  }
}

export default voucher_all
