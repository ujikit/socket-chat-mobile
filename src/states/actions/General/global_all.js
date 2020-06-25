import API from '../../../configs/API';

const resetPropsComponentDataDispatch = () => {
  return function(dispatch) {
    return dispatch({type: 'RESET_PROPS_COMPONENT_DATA_DISPATCH'});
  };
};

const setIsAuthenticatedDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'SET_IS_AUTHENTICATED', payload: data});
  };
};

const checkIsAuthenticatedDispatch = data => {
  return function(dispatch) {
    API.me(data)
      .then(response => {
        console.log('is_auth_success', response);
        dispatch({type: 'ME', payload: response.payload});
        return dispatch({type: 'CHECK_IS_AUTHENTICATED', payload: true});
      })
      .catch(error => {
        console.log('is_auth_error', JSON.stringify(error));
        return dispatch({type: 'CHECK_IS_AUTHENTICATED', payload: false});
      });
  };
};

const updatePageDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'UPDATE_PAGE', payload: data});
  };
};

const setLatLngMapDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'SET_LAT_LNG_MAP', payload: data});
  };
};

const scanQRCodeDataDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'SCAN_QR_CODE', payload: data});
  };
};

const chooseMerchantDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_MERCHANT', payload: data});
  };
};

const chooseMyVoucherDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_MY_VOUCHER', payload: data});
  };
};

const chooseDistrictDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_DISTRICT', payload: data});
  };
};

const chooseVoucherSpecificBranchDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_VOUCHER_SPECIFIC_BRANCH', payload: data});
  };
};

const chooseCategoryVoucherDispatch = body => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_CATEGOTY_VOUCHER', payload: body});
  };
};

const chooseRoleDispatch = body => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_ROLE', payload: body});
  };
};

const chooseUserDispatch = body => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_USER', payload: body});
  };
};

const searchDataDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'SEARCH_VOUCHER_PROPERTY', payload: data});
  };
};

const searchDispatch = (user_token, page, params) => {
  return function(dispatch) {
    API.search_voucher(user_token, page, params)
      .then(async response => {
        console.log('get_search_voucher_success', response);
        if (response.code == 200) {
          return dispatch({type: 'RESULT_SEARCH_VOUCHER', payload: response.payload});
        }
      })
      .catch(async error => {
        console.log('get_search_voucher', error.response);
        if (error.response.status == 401) {
          return ToastComponent(`Sesi anda telah habis. Mohon login kembali.`);
        }
        return ToastComponent(`Ada kesalahan pada server. ${error.message}`);
      });
  };
};

const loadMoreSearchDispatch = (user_token, merchant_id, page, params) => {
  return function(dispatch) {
    API.search_voucher(user_token, merchant_id, page, params)
      .then(async response => {
        console.log('get_search_voucher_success', response);
        if (response.code == 200) {
          return dispatch({type: 'LOAD_MORE_RESULT_SEARCH_VOUCHER', payload: response.payload});
        }
      })
      .catch(async error => {
        console.log('get_search_voucher', error.response);
        if (error.response.status == 401) {
          return ToastComponent(`Sesi anda telah habis. Mohon login kembali.`);
        }
        return ToastComponent(`Ada kesalahan pada server. ${error.message}`);
      });
  };
};


const setPushTokenDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'SET_PUSH_TOKEN_DISPATCH', payload: data});
  };
};

export {
  resetPropsComponentDataDispatch,
  setIsAuthenticatedDispatch,
  checkIsAuthenticatedDispatch,
  updatePageDispatch,
  setLatLngMapDispatch,
  scanQRCodeDataDispatch,
  chooseMerchantDispatch,
  chooseMyVoucherDispatch,
  chooseDistrictDispatch,
  chooseVoucherSpecificBranchDispatch,
  chooseCategoryVoucherDispatch,
  chooseRoleDispatch,
  chooseUserDispatch,
  searchDataDispatch,
  searchDispatch,
  loadMoreSearchDispatch,
  setPushTokenDispatch,
};
