import * as customFormTypes from './customFormTypes';

const initialState = {
  loading: false,
  formElements: [],
  formValues: {},
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case customFormTypes.FETCH_FORM_SUCCESS:
      return {
        ...state,
        formElements: action.payload.formElements,
        loading: true,
        message: '',
      };
    case customFormTypes.FETCH_FORM_FAILED:
      return {
        ...state,
        loading: true,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
};

export default reducer;
