import React from 'react';
import { Form } from 'react-bootstrap';
const FormElement = (props) => {
  const { element } = props;

  switch (element.type) {
    case 'input':
      return (
        <Form.Control
          value={props.value}
          onChange={(e) =>
            props.onChange(element.id, e.target.value, element.type)
          }
          type="email"
          placeholder={element.name}
        />
      );
    case 'checkbox':
      return (
        <Form.Check
          checked={props.value === 'on'}
          onChange={(e) =>
            props.onChange(
              element.id,
              props.value === 'on'
                ? 'off'
                : props.value === 'off'
                ? 'on'
                : 'on',
              element.type,
            )
          }
          type="checkbox"
          label={element.name}
        />
      );
    case 'radio':
      let radios = [];

      let values = element.values;
      for (let i = 0; i < values.length; i++) {
        radios.push(
          <Form.Check
            onChange={() => props.onChange(element.id, values[i], element.type)}
            checked={values[i] === props.value}
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
      let options = [
        <option key="select_an_option" value="">
          Select an option
        </option>,
      ];
      for (let i = 0; i < dropDownValues.length; i++) {
        options.push(
          <option key={dropDownValues[i]}>{dropDownValues[i]}</option>,
        );
      }
      return (
        <Form.Control
          value={props.value}
          onChange={(e) =>
            props.onChange(element.id, e.target.value, element.type)
          }
          as="select"
        >
          {options}
        </Form.Control>
      );
    default:
      return <></>;
  }
};

export default FormElement;
