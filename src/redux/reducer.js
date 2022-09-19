const initialState = {
    userData: [],
  };
  
  const ModalReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case 'STORE_DATA':
        return {
          ...prevState,
          userData: action.payload.data,
        };
      case 'RESET_STORE_DATA':
        return {
          initialState,
        };
      default:
        return prevState;
    }
  };
  
  export default ModalReducer;