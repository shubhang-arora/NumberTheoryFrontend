import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import * as Icons from 'react-icons/all';
import Graph from '../components/graph';

const Analytics = (props) => {
  let { analytics, loadingAnalytics } = props;
  const colors = [
    '#64abde',
    '#4388ba',
    '#367bad',
    '#2c74a8',
    '#206699',
    '#165787',
  ];

  const getIcons = (icon) => {
    var IconComponent = Icons[icon];
    return <IconComponent size="4em" />;
  };

  return (
    <Row className="analytics-row">
      {/**
       * Side Panel
       */}
      <Col md="3" sm="12">
        {loadingAnalytics &&
          analytics[0].sidePanel.map((graph, index) => (
            <Row key={index}>
              <Col>
                <Card style={{ border: '0px' }}>
                  <Card.Body
                    style={{
                      backgroundColor: colors[index],
                    }}
                  >
                    <Row>
                      <Col md="8" sm="7" xs="7">
                        <div
                          style={{ marginBottom: '15px' }}
                          className="row d-flex align-items-center"
                        >
                          <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0">
                              {graph.value}
                            </h3>
                          </div>
                        </div>
                        <h6 className="mb-4">{graph.name}</h6>
                      </Col>
                      <Col md="4" sm="4" xs="5" style={{ top: '50%' }}>
                        {getIcons(graph.icon)}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
      </Col>
      {/**
       * Main Panel
       */}
      <Col md="9" style={{ marginTop: '10px' }}>
        <Row>
          {loadingAnalytics &&
            analytics[0].mainPanel.map((graph, index) => (
              <Col key={index} md="4" xs="12" className="analytics-col">
                <Card>
                  <Card.Header className="graph-card-header">
                    <Card.Title>{graph.information.name}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    {/**
                     * Graph Component
                     */}
                    <Graph data={graph} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
};
export default Analytics;
