import "./Home.scss";
import { NavLink } from "react-router-dom";
import PhotoList from "../PhotoList/PhotoList";

import React, { Component } from 'react';
import { connect } from "react-redux";
import * as Actions from "../../action/index";

class Home extends Component {
    constructor(props) {
        super(props);
        this.showPhotoList = this.showPhotoList.bind(this)
    }
    onDelete = (id) =>{
        this.props.actDeleteImageRequest(id)
        // console.log("delete",id)
    }
    showPhotoList(datas){
        return datas.map((data,key) => {
            return (
                <PhotoList data={data} key = {key} onDelete = {this.onDelete}>

                </PhotoList>
            )

        })
    }
    componentDidMount(){
        this.props.actFetchImagessRequest()
    }
    render() {
        let { images } = this.props
        return (
            <div className="home">
                <div className="text-center container">
                    <div className="link-addPhoto">
                        <NavLink
                            exact
                            to="/photos/add"
                            activeClassName="header__link--active">
                            Add PhoTo
                        </NavLink>
                    </div>
                    <div className="photoList">
                        {this.showPhotoList(images)}
                    </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
        actFetchImagessRequest : () =>{
            dispatch(Actions.actFetchImagessRequest())
        },
        actDeleteImageRequest : (id) =>{
            dispatch(Actions.actDeleteImageRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)