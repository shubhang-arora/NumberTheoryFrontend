import * as analyticsTypes from './analyticsTypes';

export class AnalyticsDispatcher {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  fetchAnalytics = () => {
    this.dispatch({ type: analyticsTypes.FETCH_ANALYTICS });
  };

  watchAnalytics = () => {
    this.dispatch({ type: analyticsTypes.WATCH_ANALYTICS });
  };
}
