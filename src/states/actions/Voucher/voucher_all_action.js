import API from '../../../configs/API';

const getAllAdminVoucherDispatch = (user_token, id_merchant, page) => {
  return function(dispatch) {
    API.get_all_admin_voucher(user_token, id_merchant, page)
      .then(response => {
        console.log("get_all_admin_voucher_success", response);
        return dispatch({type: 'GET_ALL_ADMIN_VOUCHER', payload: response.payload});
      })
      .catch(error => {
        console.log("get_all_admin_voucher_error", error);
        console.log("get_all_admin_voucher_error", error.response);
      });
  };
};

const loadMoreGetAllAdminVoucherDispatch = (user_token, id_merchant, page) => {
  return function(dispatch) {
    API.get_all_admin_voucher(user_token, id_merchant, page)
      .then(response => {
        console.log("load_more_get_all_admin_voucher_success", response);
        return dispatch({type: 'LOAD_MORE_GET_ALL_ADMIN_VOUCHER', payload: response.payload});
      })
      .catch(error => {
        console.log("load_more_get_all_admin_voucher_error", error);
        console.log("load_more_get_all_admin_voucher_error", error.response);
      });
  };
};

const createVoucherDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CREATE_VOUCHER', payload: data});
  };
};

const deleteVoucherDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'DELETE_VOUCHER', payload: data});
  };
};

// 1.VOUCHER NOT TRANSFERED
const getAllVoucherNotTransferedDispatch = (user_token, page, params) => {
  console.log('api_getAllVoucherNotTransferedDispatch', user_token, page, params);
  return function(dispatch) {
    return API.get_all_voucher_not_transfered(user_token, page, params)
    .then(async response => {
      console.log('get_all_voucher_not_transfered_success', response);
      if (response.code == 200) {
        return dispatch({type: 'GET_ALL_VOUCHER_SHARED_BY_ADMIN', payload: response.payload});
      }
    })
    .catch(async error => {
      console.log('get_all_voucher_not_transfered_error', error);
      console.log('get_all_voucher_not_transfered_error', error.response);
    });
  };
};

const loadMoreVoucherNotTransferedDispatch = (user_token, page, params) => {
  console.log('api_loadMoreVoucherNotTransferedDispatch', user_token, page, params);
  return function(dispatch) {
    API.get_all_voucher_not_transfered(user_token, page, params)
      .then(response => {
        console.log("get_all_voucher_not_transfered_success", response);
        return dispatch({type: 'LOAD_MORE_VOUCHER_SHARED_BY_ADMIN', payload: response.payload});
      })
      .catch(error => {
        console.log("get_all_voucher_not_transfered_error", error);
        console.log("get_all_voucher_not_transfered_error", error.response);
      });
  };
};
// ./VOUCHER NOT TRANSFERED


// 2.VOUCHER TRANSFERED TO MEMBER
const getAllVoucherTransferedToMemberDispatch = (user_token, page, params) => {
  console.log('api_getAllVoucherTransferedToMemberDispatch', user_token, page, params);
  return function(dispatch) {
    return API.get_all_voucher_shared_to_member(user_token, page, params)
    .then(async response => {
      console.log('get_all_voucher_transfered_to_member_success', response);
      if (response.code == 200) {
        return dispatch({type: 'GET_ALL_VOUCHER_TRANSFERED_TO_MEMBER', payload: response.payload});
      }
    })
    .catch(async error => {
      console.log('get_all_voucher_transfered_to_member_error', error);
      console.log('get_all_voucher_transfered_to_member_error', error.response);
    });
  };
};

const loadMoreVoucherTransferedToMemberDispatch = (user_token, page, params) => {
  console.log('api_loadMoreVoucherTransferedToMemberDispatch', user_token, page, params);
  return function(dispatch) {
    API.get_all_voucher_shared_to_member(user_token, page, params)
      .then(response => {
        console.log("get_all_voucher_transfered_to_member_success", response);
        return dispatch({type: 'LOAD_MORE_VOUCHER_TRANSFERED_TO_MEMBER', payload: response.payload});
      })
      .catch(error => {
        console.log("get_all_voucher_transfered_to_member_error", error);
        console.log("get_all_voucher_transfered_to_member_error", error.response);
      });
  };
};
// ./VOUCHER TRANSFERED TO MEMBER


// 3.VOUCHER TRANSFERED TO MEMBER AND USED
const getAllVoucherTransferedToMemberAndUsedDispatch = (user_token, page, params) => {
  console.log('api_getAllVoucherTransferedToMemberAndUsedDispatch', user_token, page, params);
  return function(dispatch) {
    return API.get_all_voucher_shared_to_member_and_used(user_token, page, params)
    .then(async response => {
      console.log('get_all_voucher_transfered_to_member_and_used_success', response);
      if (response.code == 200) {
        return dispatch({type: 'GET_ALL_VOUCHER_TRANSFERED_TO_MEMBER_AND_USED', payload: response.payload});
      }
    })
    .catch(async error => {
      console.log('get_all_voucher_transfered_to_member_and_used_error', error);
      console.log('get_all_voucher_transfered_to_member_and_used_error', error.response);
    });
  };
};

const loadMoreVoucherTransferedToMemberAndUsedDispatch = (user_token, page, params) => {
  console.log('api_loadMoreVoucherTransferedToMemberAndUsedDispatch', user_token, page, params);
  return function(dispatch) {
    API.get_all_voucher_shared_to_member_and_used(user_token, page, params)
      .then(response => {
        console.log("get_all_voucher_transfered_to_member_and_used_success", response);
        return dispatch({type: 'LOAD_MORE_VOUCHER_TRANSFERED_TO_MEMBER_AND_USED', payload: response.payload});
      })
      .catch(error => {
        console.log("get_all_voucher_transfered_to_member_and_used_error", error);
        console.log("get_all_voucher_transfered_to_member_and_used_error", error.response);
      });
  };
};
// ./VOUCHER TRANSFERED TO MEMBER AND USED

const resultHomeVoucherDispatch = (user_token, page, params) => {
  return function(dispatch) {
    API.get_all_admin_voucher(user_token, page, params)
      .then(async response => {
        console.log('result_home_voucher_success', response);
        if (response.code == 200) {
          return dispatch({type: 'RESULT_HOME_VOUCHER', payload: response.payload});
        }
      })
      .catch(async error => {
        console.log("result_home_voucher_error", error.response);
      });
  };
};

const loadMoreResultHomeVoucherDispatch = (user_token, page, params) => {
  return function(dispatch) {
    API.get_all_admin_voucher(user_token, page, params)
      .then(async response => {
        console.log('load_more_result_home_voucher_success', response);
        if (response.code == 200) {
          return dispatch({type: 'LOAD_MORE_RESULT_HOME_VOUCHER', payload: response.payload});
        }
      })
      .catch(async error => {
        console.log("load_more_result_home_voucher_error", error.response);
      });
  };
};

// used by ResultSearch load more Pagination
const incrementCurrentPageDispatch = () => {
  return function(dispatch) {
    return dispatch({type: 'INCREMENT_CURRENT_PAGE'});
  };
};
// ./RESULT SEARCH

export {
  getAllAdminVoucherDispatch,
  loadMoreGetAllAdminVoucherDispatch,
  getAllVoucherNotTransferedDispatch,
  loadMoreVoucherNotTransferedDispatch,
  getAllVoucherTransferedToMemberDispatch,
  loadMoreVoucherTransferedToMemberDispatch,
  getAllVoucherTransferedToMemberAndUsedDispatch,
  loadMoreVoucherTransferedToMemberAndUsedDispatch,
  createVoucherDispatch,
  deleteVoucherDispatch,
  resultHomeVoucherDispatch,
  loadMoreResultHomeVoucherDispatch,
  incrementCurrentPageDispatch,
};
