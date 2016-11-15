import React, { PropTypes as T } from 'react';
import classnames from 'classnames';

import './TextField.css';

export default function TextField(props) {
  const {
    className,
    type,
    name,
    label,
    placeholder,
    value,
    validate,
    message,
    required,
    update,
  } = props;

  const textFieldClass = classnames(
    className,
    'TextField'
  )
  const labelClass = classnames(
    'TextField-label'
  )
  const inputClass = classnames(
    'TextField-input',
    { 'error': !validate() || (required && value.length === 0) }
  )
  const requiredMessageClass = classnames(
    'TextField-message',
    { 'hidden': value.length > 0 || !required }
  )
  const messageClass = classnames(
    'TextField-message',
    { 'hidden': value.length === 0 || validate() }
  )

  return (
    <div className={textFieldClass}>
      <label className={labelClass} htmlFor={name}>
        {label}
        {!required &&
          <span className="TextField-label-span"> - Opsional</span>
        }
      </label>
      <input className={inputClass} id={name} name={name} type={type} value={value} onChange={(e) => update(name, e.target.value)} placeholder={placeholder} required={required} />
      <span className={messageClass}>* {message}</span>
      <span className={requiredMessageClass}>* {label} harus diisi</span>
    </div>
  )
}

TextField.defaultProps = {
  type: 'text',
  value: '',
  validate: () => true,
  message: '',
  required: false,
}

TextField.propTypes = {
  type: T.string,                   // Input Type [Text, Email, Number, ...]
  name: T.string.isRequired,        // Name
  label: T.string.isRequired,       // Label
  placeholder: T.string.isRequired, // Placeholder
  value: T.string,                  // Value
  update: T.func.isRequired,        // Update Function
  validate: T.func,                 // Validation Function
  message: T.string,                // Error Message
  required: T.bool,                 // is Required
}
