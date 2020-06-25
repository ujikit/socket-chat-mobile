const initialState = {
  is_authenticated: false,
  root_navigator_page_reducer: 0,
  set_lat_lng_map_reducer: { latitude: null, longitude: null },
  scan_qr_code_data_reducer: { id: null, name: null, email: null },
  choose_merchant_reducer: { id: null, name: null },
  choose_my_voucher_reducer: { id: null, name: null },
  choose_district_reducer: { id: null, name: null },
  choose_category_voucher_reducer: {id: null, name: null},
  choose_role_user_reducer: {name: null},
  choose_user_reducer: {id: null, name: null},
  choose_voucher_specific_branch_reducer: [],
  search_voucher_parameter_reducer: { name: null, merchant_id: null, voucher_category_id: null },
  load_more_search_reducer: [],
  set_push_token_reducer: null
}

const global_all = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'RESET_PROPS_COMPONENT_DATA_DISPATCH':
    return {
      ...state,
      set_lat_lng_map_reducer: { latitude: null, longitude: null },
      scan_qr_code_data_reducer: { id: null, name: null, email: null },
      choose_merchant_reducer: { id: null, name: null },
      choose_my_voucher_reducer: { id: null, name: null },
      choose_district_reducer: { id: null, name: null },
      choose_role_user_reducer: {name: null },
      choose_user_reducer: { id: null, name: null },
      choose_category_voucher_reducer: {id: null, name: null},
      search_voucher_parameter_reducer: { name: null, merchant_id: null, voucher_category_id: null },
      choose_voucher_specific_branch_reducer: [],
    }
    case 'SET_IS_AUTHENTICATED':
    return {
      ...state,
      is_authenticated: action.payload
    }
    case 'CHECK_IS_AUTHENTICATED':
    return {
      ...state,
      is_authenticated: action.payload
    }
    case 'UPDATE_PAGE':
    return {
      ...state,
      root_navigator_page_reducer: action.payload
    }
    case 'SET_LAT_LNG_MAP':
    return {
      ...state,
      set_lat_lng_map_reducer: action.payload
    }
    case 'SCAN_QR_CODE':
    return {
      ...state,
      scan_qr_code_data_reducer: action.payload
    }

    case 'CHOOSE_MERCHANT':
    return {
      ...state,
      choose_merchant_reducer: action.payload
    }
    case 'CHOOSE_MY_VOUCHER':
    return {
      ...state,
      choose_my_voucher_reducer: action.payload
    }
    case 'CHOOSE_DISTRICT':
    return {
      ...state,
      choose_district_reducer: action.payload
    }
    case 'CHOOSE_VOUCHER_SPECIFIC_BRANCH':
    return {
      ...state,
      choose_voucher_specific_branch_reducer: [...action.payload]
    }
    case 'CHOOSE_CATEGOTY_VOUCHER':
    return {
      ...state,
      choose_category_voucher_reducer: action.payload
    }
    case 'CHOOSE_ROLE':
    return {
      ...state,
      choose_role_user_reducer: action.payload
    }
    case 'CHOOSE_USER':
    return {
      ...state,
      choose_user_reducer: action.payload
    }

    case 'SEARCH_VOUCHER_PROPERTY':
    return {
      ...state,
      search_voucher_parameter_reducer: action.payload
    }
    case 'LOAD_MORE_SEARCH':
    return {
      ...state,
      load_more_search_reducer: action.payload
    }
    case 'SET_PUSH_TOKEN_DISPATCH':
    return {
      ...state,
      set_push_token_reducer: action.payload,
    }
    default:
      return state;
  }
}

export default global_all
