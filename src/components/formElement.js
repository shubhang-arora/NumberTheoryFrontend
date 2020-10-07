import React from 'react';
import { Form } from 'react-bootstrap';
const FormElement = (props) => {
  console.log(props);
  const { element } = props;
  console.log(element);
  switch (element.type) {
    case 'input':
      return <Form.Control type="email" placeholder={element.name} />;
    case 'checkbox':
      return <Form.Check type="checkbox" label={element.name} />;
    case 'radio':
      let radios = [];

      let values = element.values;
      for (let i = 0; i < values.length; i++) {
        radios.push(
          <Form.Check
            name="hello"
            key={values[i]}
            label={values[i]}
            value={values[i]}
            type={'radio'}
          />,
        );
      }
      return radios;
    case 'dropdown':
      let dropDownValues = element.values;
      let options = [];
      for (let i = 0; i < dropDownValues.length; i++) {
        options.push(<option>{dropDownValues[i]}</option>);
      }
      return <Form.Control as="select">{options}</Form.Control>;
    default:
      return <></>;
  }
};

export default FormElement;
