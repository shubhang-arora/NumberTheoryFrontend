import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CustomFormDispatcher } from '../redux';
import {
  Form,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Image,
} from 'react-bootstrap';
import FormElement from '../components/formElement';
import { IoMdInformationCircleOutline } from 'react-icons/io';
const CustomForm = () => {
  //Dispatcher
  const dispatch = useDispatch();
  const customFormDispatcher = new CustomFormDispatcher(dispatch);

  useEffect(() => {
    customFormDispatcher.fetchFormElements();
  }, []);

  const { formElements } = useSelector((state) => {
    return {
      formElements: state.customForm.formElements,
    };
  });

  return (
    <Row style={{ marginTop: '20px' }}>
      <Col md="6" sm="12">
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
                <FormElement element={element} />
              </Form.Group>
            ))}
        </Form>
      </Col>
      <Col md="6" sm="12">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CustomForm;
