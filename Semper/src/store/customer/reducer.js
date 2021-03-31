export const HANDLE_LOGIN = "HANDLE_LOGIN";
export const HANDLE_LOGOUT = "HANDLE_LOGOUT";
export const HANDLE_PROGRESS = "HANDLE_PROGRESS";

const defaultState = {
  customerData: [],
  isLoading: false
};

export const CustomerReducer = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case HANDLE_LOGIN: {
      return {
        ...state,
        customerData: action.payload,
        isLoading: false
      }
    }
    case HANDLE_PROGRESS: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default:
      return state
  }

}