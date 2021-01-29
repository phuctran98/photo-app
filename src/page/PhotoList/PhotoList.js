import "./PhotoList.scss";
import React,{Component} from 'react';
import { Button } from "reactstrap";

class PhotoList extends Component{ 
    onDelete = (id) =>{
        this.props.onDelete(id)
    }
    render(){
        const {data} = this.props
        return(
            <div className = "photo">
                <img src={data.img}></img>
                <div className = "overlay">
                        <p className="title">{data.title}</p> 
                        <div className="photo__action">
                            <div>
                                <Button color="btn btn-outline-light ">Edit</Button>
                            </div>
                            <div>
                                <Button color="btn btn-outline-danger " onClick = {()=>this.onDelete(data.id)}>Delete</Button>
                            </div>
                        </div>
                        
                </div>
            </div>
        )
    }
    
}

export default PhotoList