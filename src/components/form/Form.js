import React, { useState } from 'react';

import mapReactDescendants from 'utilities/map-react-descendants';
import * as styles from './form.module.scss';

export function Form({ children, onSubmit }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validators, setValidators] = useState({}); // ToDo - Should this be in state?

  function handleChange({ target }) {
    const { name, value } = target;
    const validationErrors = validateInput(name, value);
    
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationErrors });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formIsValid = validateForm();
    if (formIsValid) {
      onSubmit(values);
    }
  }

  function validateForm() {
    const inputNames = Object.keys(validators);
    const formErrors = {};
    let isValid = true;

    inputNames.forEach(inputName => {
      const inputValue = values[inputName];
      const validationErrors = validateInput(inputName, inputValue);

      formErrors[inputName] = validationErrors;
      if (validationErrors.length) isValid = false;
    });

    setErrors(formErrors);
    return isValid;
  }

  function validateInput(inputName, inputValue) {
    let vErrors = [];
    if (validators[inputName].includes('required') && inputValue === '') {
      vErrors.push('Please enter');
    }
    if (validators[inputName].includes('alphabetic') && /[^A-Za-z -']/.test(inputValue)) {
      vErrors.push('Please only use alphabetic characters, spaces, apostrophes and hyphens for');
    }
    // ToDo - add more validators
    return vErrors;
  }

  return (
    <form onSubmit={handleSubmit} >
      {
        // Map all descendants and convert recognised inputs to controlled components
        // ToDo - Error handle identically named inputs
        // ToDo - Reduce unnecessary rerenders: currently this will trigger an extra rerender for every recognised input due to dynamically adding the input value to state at O(n) time complexity.
        mapReactDescendants(children, child => {
          // For any recognised inputs
          if (child.type === Input) {

            const inputName = child.props.name;
            const validationRules = child.props.validators;

            // Add initial input value to state
            if (values[inputName] === undefined) {
              setValues({ ...values, [inputName]: '' });
            }
            // Add initial errors value to state
            if (errors[inputName] === undefined) {
              // setErrors({ ...errors, [inputName]: '' });
              setErrors({ ...errors, [inputName]: [] });
            }

            if (validationRules && validators[inputName] === undefined) {
              setValidators({ ...validators, [inputName]: validationRules });
            }

            // Convert input to controlled component
            return React.cloneElement(child, {
              value: values[inputName],
              errors: errors[inputName],
              handleChange
            });
          }
          return child;
        })
      }
    </form>
  )
}

export function Input({ name, label, labelPrefix, value, note, type = "text", placeholder = "", handleChange, isMultiline, errors }) {
  return (
    <label className={styles.label}>
      {label}
      {
        note &&
        <span className={styles.note}>
          {note}
        </span>
      }
      {
        isMultiline
          ? <textarea
              name={name}
              value={value}
              onChange={handleChange}
              className={styles.textArea}
            />
          : <input
              name={name}
              value={value}
              onChange={handleChange}
              type={type}
              placeholder={placeholder}
              className={styles.input}
            />
      }
      {
        errors &&
        errors.map((error, i) => (
          <span key={i} className={styles.errorMessage}>
            {`${error} ${labelPrefix} ${label}`}
          </span>
        ))
      }
    </label>
  )
}

export function Button({ children }) {
  return (
    <button
      type="submit"
      className={styles.button}
    >
      {children}
    </button>
  )
}