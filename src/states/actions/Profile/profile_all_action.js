import API from '../../../configs/API';

const meDispatch = data => {
  return function(dispatch) {
    return dispatch({type: 'ME', payload: data});
  };
};

export {
  meDispatch,
};
