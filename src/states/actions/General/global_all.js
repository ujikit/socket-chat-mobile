import API from '../../../configs/API';

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

export {
  checkIsAuthenticatedDispatch,
};
