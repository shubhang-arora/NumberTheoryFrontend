import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { ResponsiveContainer } from 'recharts';

import Graph from '../components/graph';

const Analytics = (props) => {
  let { analytics, loadingAnalytics } = props;
  return (
    <Row className="analytics-row">
      {loadingAnalytics &&
        analytics.map((graph, index) => (
          <Col key={index} md="6" sm="12" className="analytics-col">
            <Card>
              <Card.Header classsname="graph-card-header">
                <Card.Title>Graph Name</Card.Title>
              </Card.Header>
              <Graph data={graph} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default Analytics;
