import API from '../../../configs/API';

const getAllCategoryVoucherDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'GET_ALL_CATEGORY_VOUCHER', payload: data});
  };
};

const createCategoryVoucherDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'CREATE_CATEGORY_VOUCHER', payload: data});
  };
};

const deleteCategoryVoucherDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'DELETE_CATEGORY_VOUCHER', payload: data});
  };
};

export {
  getAllCategoryVoucherDispatch,
  createCategoryVoucherDispatch,
  deleteCategoryVoucherDispatch,
};
