import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CustomFormDispatcher } from '../redux';
import { Form, Row, Col, OverlayTrigger, Tooltip, Card } from 'react-bootstrap';
import FormElement from '../components/formElement';
import { IoMdInformationCircleOutline } from 'react-icons/io';
const CustomForm = () => {
  //Dispatcher
  const dispatch = useDispatch();
  const customFormDispatcher = new CustomFormDispatcher(dispatch);

  useEffect(() => {
    customFormDispatcher.fetchFormElements();
  }, []);

  const { formElements, formValues } = useSelector((state) => {
    return {
      formElements: state.customForm.formElements,
      formValues: state.customForm.formValues,
    };
  });

  const handleFormValuesChange = (id, value, type) => {
    customFormDispatcher.changeFormValue(id, value, type);
  };

  const [dropDownValue, setDropDownValue] = useState('');

  return (
    <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
      {/**
       * Form 1
       */}
      <Col md="6" sm="12" style={{ marginTop: '15px' }}>
        <Card className="from-card">
          <Card.Header className="form-card-header">
            <Card.Title className="form-title">Form A</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              {formElements.length &&
                formElements.map((element, index) => (
                  <Form.Group key={index}>
                    <Form.Label style={{ marginRight: '5px' }}>
                      {element.name}
                    </Form.Label>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={element.id}>{element.description}</Tooltip>
                      }
                    >
                      <IoMdInformationCircleOutline />
                    </OverlayTrigger>
                    <FormElement
                      value={
                        formValues[element.id] ? formValues[element.id] : ''
                      }
                      onChange={handleFormValuesChange}
                      element={element}
                    />
                  </Form.Group>
                ))}
            </Form>
          </Card.Body>
        </Card>
      </Col>
      {/**
       * Form 2
       */}
      <Col md="6" sm="12" style={{ marginTop: '15px', marginBottom: '15px' }}>
        <Card className="formCard">
          <Card.Header className="form-card-header">
            <Card.Title className="form-title">Form B</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ marginRight: '5px' }}>Input A</Form.Label>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Description for Input A</Tooltip>}
                >
                  <IoMdInformationCircleOutline />
                </OverlayTrigger>
                <Form.Control
                  value={dropDownValue}
                  onChange={(e) => setDropDownValue(e.target.value)}
                  as="select"
                >
                  <option>Select an option</option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </Form.Control>
              </Form.Group>
              {dropDownValue === 'true' && (
                <Form.Group>
                  <Form.Label>Input B</Form.Label>
                  <Form.Check name="inputB" label="Input B" type={'radio'} />
                </Form.Group>
              )}

              {dropDownValue === 'false' && (
                <Form.Group>
                  <Form.Label>Input C</Form.Label>
                  <Form.Check name="inputC" label="Input C" type={'checkbox'} />
                </Form.Group>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CustomForm;
