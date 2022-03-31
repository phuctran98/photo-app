import React from 'react';
import PropTypes from 'prop-types';
import './PhotoCard.scss'
import { Button } from 'reactstrap';

PhotoCard.propTypes = {
    photo: PropTypes.string,
    onRemoveClick : PropTypes.func,
    onEditClick: PropTypes.func,
};
PhotoCard.defaultProps = {
    photo: null,
    onRemoveClick : null,
    onEditClick: null,
}
function PhotoCard(props) {
    const { photo,onRemoveClick,onEditClick } = props
    const handleDelete = () =>{
        if(onRemoveClick){
            onRemoveClick(photo)
        }
    }
    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    }
    return (
        <div className="photo">
            <img src={photo.photo} ></img>
            <div className="photo__overlay">
                <p>{photo.title}</p>
                <div className="photo__actions">
                    <div>
                        <Button color="info" onClick={handleEditClick}>Sửa</Button>
                    </div>
                    <div  onClick={handleDelete}>
                        <Button color="danger">Xóa</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;