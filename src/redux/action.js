export const SET_STORE_DATA = (body) => {
    return (dispatch) => {
      dispatch({
        type: 'STORE_DATA',
        payload: {
          data: body,
        },
      });
    };
  };