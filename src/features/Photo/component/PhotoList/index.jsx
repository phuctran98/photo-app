import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    photos: PropTypes.array,
    onRemoveClick : PropTypes.func,
    onEditClick: PropTypes.func,
};
PhotoList.defaultProps = {
    photos: null,
    onRemoveClick : null,
    onEditClick : null
}
function PhotoList(props) {
    const { photos,onRemoveClick,onEditClick } = props
    return (

        <Row>
            {photos.map(photo =>(
            <Col xs="12" md="6" lg="3" key={photo.id}>
                <PhotoCard photo={photo} onRemoveClick={onRemoveClick} onEditClick={onEditClick}></PhotoCard>
            </Col>
            ))}
           
        </Row>

    );
}

export default PhotoList;