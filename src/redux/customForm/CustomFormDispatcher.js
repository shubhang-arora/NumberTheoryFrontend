import * as customFormTypes from './customFormTypes';

export class CustomFormDispatcher {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  fetchFormElements = () => {
    this.dispatch({ type: customFormTypes.FETCH_FORM });
  };

  changeFormValue = (id, value, type) => {
    this.dispatch({
      type: customFormTypes.CHANGE_FORM_VALUE,
      payload: { id, value, type },
    });
  };
}
