import * as analyticsTypes from './analyticsTypes';

const initialState = {
  loading: false,
  analytics: {},
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case analyticsTypes.FETCH_ANALYTICS_SUCCESS:
      return {
        ...state,
        analytics: action.payload.analytics,
        loading: true,
        message: '',
      };
    case analyticsTypes.FETCH_ANALYTICS_FAILED:
      return {
        ...state,
        loading: true,
        errorMessage: action.payload.message,
      };
    case analyticsTypes.GOT_UPDATED_ANALYTICS:
      return {
        ...state,
        analytics: action.payload.data.analytics,
      };
    default:
      return state;
  }
};

export default reducer;
