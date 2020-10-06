import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Nav } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnalyticsDispatcher } from './redux';
function App() {
  const [activeKey, setActiveKey] = useState('task1');

  //Dispatcher
  const dispatch = useDispatch();
  const analyticsDispatcher = new AnalyticsDispatcher(dispatch);

  useEffect(() => {
    analyticsDispatcher.fetchAnalytics();
    analyticsDispatcher.watchAnalytics();
  }, []);

  const { analytics, loadingAnalytics } = useSelector((state) => {
    return {
      analytics: state.analytics.analytics,
      loadingAnalytics: state.analytics.loading,
    };
  });

  return (
    <Container
      style={{ padding: '10px 10px 10px 10px', backgroundColor: '#f9f9f9' }}
    >
      <Container>
        <Nav variant="pills" activeKey={activeKey}>
          <Nav.Item>
            <Nav.Link onClick={() => setActiveKey('task1')} eventKey="task1">
              Task 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setActiveKey('task2')} eventKey="task2">
              Task 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Container>
  );
}

export default App;
