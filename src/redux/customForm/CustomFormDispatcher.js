import * as customFormTypes from './customFormTypes';

export class CustomFormDispatcher {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  fetchFormElements = () => {
    this.dispatch({ type: customFormTypes.FETCH_FORM });
  };
}
