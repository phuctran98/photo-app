import React from 'react';
import PropTypes from 'prop-types';
import "./Banner.scss"

Banner.propTypes = {
    tittle : PropTypes.string,
    backgroundUrl : PropTypes.string
};

Banner.defaultProps = {
    tittle : '',
    backgroundUrl : ''
}

function Banner(props) {
    const {tittle,backgroundUrl} = props
    const bannerStyle = backgroundUrl ? `url(${backgroundUrl})` : ''
    return (
        <div className="banner" style={{backgroundImage: bannerStyle}}>
            <h1 className="banner__tittle">{tittle}</h1>
        </div>
    );
}

export default Banner;