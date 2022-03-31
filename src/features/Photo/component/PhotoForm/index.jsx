import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/InputField'
import SelectField from '../../../../custom-fields/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import { FormGroup,Button } from 'reactstrap';
import * as yup from 'yup';

PhotoForm.propTypes = {
    onSubmit : PropTypes.func,
    ininitialValues : PropTypes.object
};
PhotoForm.defaultProps = {
    onSubmit : null,
    ininitialValues : null
}
// Custom Field
// Cầu nối giữa UI control va Formik
//UI control là một controll component voi props
// - name: tên xác định control
// - value: giá trị của control
// - onChange: trigger hàm này khi dữ liệu mới đã thay đổi
// - onBrur: xác định khi nào control này bị touched
function PhotoForm(props) {
    const {ininitialValues} = props
    // const initialValue = {
    //     title: '',
    //     categoryId: null,
    //     photo : ''
    // }
    const schema = yup.object().shape({
        title : yup.string().required('This field is required'),
        categoryId : yup.number().required('This field is required').nullable(),//vi categoryId de null
        photo : yup.string().when('categoryId', {
            is: 1,
            then: yup.string().required('This field is required.'),
            otherwise: yup.string().notRequired(),
        })
    });
      
    return (
        <Formik 
            initialValues={ininitialValues}
            
            validationSchema = {schema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps
                // console.log(values,errors,touched)
                return (
                    <Form>
                        <FastField
                            // props cua fastfield
                            name="title"
                            component={InputField}
                            //props truyen vao inputfield
                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        ></FastField>

                        <FastField
                            name="categoryId"
                            component={SelectField}
                            //props truyen vao inputfield
                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        >

                        </FastField>
                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="Photo"
                        >
                        </FastField>
                        <FormGroup>
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;