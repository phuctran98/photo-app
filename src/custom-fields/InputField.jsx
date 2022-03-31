import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label,Input,FormFeedback  } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field : PropTypes.object.isRequired,
    form : PropTypes.object.isRequired,

    type : PropTypes.string,
    label : PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props
        const {errors, touched} = form
    const { name, value, onChange, onBlur } = field
    const showError = errors[name] && touched[name] 
    //khi co error va da touch vao doi tuong nay
    
    return (
        <FormGroup className="InputField">
            {label && <Label for={name} style={{marginBottom:"1rem"}}>{label}</Label>}

            <Input type={type} id={name} disabled={disabled}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                //co the thay bang {...field} khi dung cai nay phai biet no chuyen vao bao nhieu props
                placeholder={placeholder}
                invalid={showError} />
            {showError&&<FormFeedback>{errors[name]}</FormFeedback>}
            {/* <ErrorMessage name={name} component={FormFeedback} />     */}
        </FormGroup>
    );
}

export default InputField;