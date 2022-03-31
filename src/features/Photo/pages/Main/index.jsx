import React from 'react';
import PropTypes from 'prop-types';
import Banner from './../../../../components/Banner/Banner'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PhotoList from '../../component/PhotoList';
import { useDispatch, useSelector } from 'react-redux';
import {deletePhoto} from '../../photoSlice'
import { useHistory } from "react-router-dom";

Main.propTypes = {
    
};

function Main(props) {
    const dispatch = useDispatch()
    const photos = useSelector(state=>state.photos)
    let history = useHistory();
    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhoto = photo.id
        const action = deletePhoto(removePhoto) 
        dispatch(action)
      }
    const handlePhotoEditClick = (photo) =>{
        const editPhotoUrl = `/photos/${photo.id}`
        history.push(editPhotoUrl)
    }
    return (
        <div>
            <Banner tittle="Your awesome photos " ></Banner>
            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>
                <PhotoList photos={photos} onRemoveClick={handlePhotoRemoveClick} onEditClick={handlePhotoEditClick}></PhotoList>
            </Container>
        </div>
    );
}

export default Main;