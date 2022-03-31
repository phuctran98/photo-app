import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner/Banner';
import Images from '../../../../constants/images';
import PhotoForm from '../../component/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto,editPhoto } from '../../photoSlice';
import './AddEdit.scss'
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
AddEdit.propTypes = {

};

function AddEdit(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId } = useParams()
    const isAddMode = !photoId
    // console.log(paramId)
    const handleSubmit = (values) => {
        if(isAddMode){
            const action = addPhoto(values)
            dispatch(action)
        }
        else{
            const action = editPhoto(values)
            dispatch(action)
        }
        history.push('/photos');
    }
    // console.log("list photo",)
    const editedPhoto  = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId)
        return foundPhoto
    })
    const ininitialValues = isAddMode ? 
    {
        tittle: '', 
        categoryId: null,
        photo: ''
    } : editedPhoto 
    return (
        <div>
            <Banner tittle="Pick your amazing photo" backgroundUrl={Images.PINK_BG} />
            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} ininitialValues={ininitialValues}></PhotoForm>
            </div>
        </div>
    );
}

export default AddEdit;