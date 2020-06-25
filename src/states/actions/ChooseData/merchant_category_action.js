const chooseMerchantCategoryDispatch = body => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_MERCHANT_CATEGORY', payload: body});
  };
};

export {
  chooseMerchantCategoryDispatch,
};
