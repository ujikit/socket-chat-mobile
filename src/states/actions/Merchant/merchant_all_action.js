import API from '../../../configs/API';

const getAllMerchantDispatch = (user_token, page) => {
  return function(dispatch) {
    API.get_all_merchant(user_token, page)
      .then(response => {
        console.log("get_all_merchant_success", response);
        return dispatch({type: 'GET_ALL_MERCHANT', payload: response.payload});
      })
      .catch(error => {
        console.log("get_all_merchant_error", error);
        console.log("get_all_merchant_error", error.response);
      });
  };
};

const loadMoreGetAllMerchantDispatch = (user_token, page) => {
  return function(dispatch) {
    API.get_all_merchant(user_token, page)
      .then(response => {
        console.log("load_more_get_all_merchant_success", response);
        return dispatch({type: 'LOAD_MORE_GET_ALL_MERCHANT', payload: response.payload});
      })
      .catch(error => {
        console.log("load_more_get_all_merchant_error", error);
        console.log("load_more_get_all_merchant_error", error.response);
      });
  };
};

const createMerchantDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CREATE_MERCHANT', payload: data});
  };
};

const deleteMerchantDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'DELETE_MERCHANT', payload: data});
  };
};

export {
  getAllMerchantDispatch,
  loadMoreGetAllMerchantDispatch,
  createMerchantDispatch,
  deleteMerchantDispatch,
};
