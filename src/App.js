import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AnalyticsDispatcher } from './redux';
import './App.css';
import Analytics from './views/analytics';
import CustomForm from './views/form';
function App() {
  const [activeKey, setActiveKey] = useState('task1');

  //Dispatcher
  const dispatch = useDispatch();
  const analyticsDispatcher = new AnalyticsDispatcher(dispatch);

  // Effect to fetch and listen to analytics updates from server
  useEffect(() => {
    analyticsDispatcher.fetchAnalytics();
    analyticsDispatcher.watchAnalytics();
  }, []);

  // Fetch data from redux store
  const { analytics, loadingAnalytics } = useSelector((state) => {
    return {
      analytics: state.analytics.analytics,
      loadingAnalytics: state.analytics.loading,
    };
  });

  return (
    <Container className="App">
      <Container className="App-container">
        {/**
         * Nav Bar
         */}
        <Card>
          <Nav className="nav" variant="pills" activeKey={activeKey}>
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
        </Card>

        {/**
         * Task 1
         */}
        {activeKey === 'task1' && (
          <Analytics
            analytics={analytics}
            loadingAnalytics={loadingAnalytics}
          />
        )}
        {/**
         * Task 2
         */}
        {activeKey === 'task2' && <CustomForm />}
      </Container>
    </Container>
  );
}

export default App;
