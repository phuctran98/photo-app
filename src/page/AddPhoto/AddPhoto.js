import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React from 'react';
import { connect } from "react-redux";


import "./AddPhoto.scss";
import * as Actions from "../../action/index";


class AddPhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // src: null,
            txtTitile : '',
            txtCategory : '', 
            txtImg : ''
        }
        this.randomPhoto = this.randomPhoto.bind(this)
    }
    randomPhoto = async () => {
        var random = Math.round((Math.random() * 1000))
        let photo = `https://picsum.photos/id/${random}/300/300`
        this.setState({
            txtImg: photo
        })
    }
    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onSave = (e)=>{
        e.preventDefault()
        let { txtTitile, txtCategory, txtImg } = this.state
        var { history } = this.props

        var image = {
            // id: id,
            title: txtTitile,
            category: txtCategory,
            img: txtImg
        }
        // console.log(image)
        this.props.actAddImageRequest(image)
        // console.log(history)
        history.goBack()
    }
    render() {
        var {txtTitile, txtCategory, txtImg} = this.state
        return (
            <div className="addPhoto">
                <Form onSubmit={this.onSave}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text"
                            placeholder="Eg: Wow nature"
                            name="txtTitile"
                            value={txtTitile}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select"
                            placeholder="What is your category ?"
                            name="txtCategory"
                            value={txtCategory}
                            onChange={this.onChange}>
                            <option value="Education">Education</option>
                            <option value="Nature">Nature</option>
                            <option value="Animal">Animal</option>
                            <option value="Technology">Technology</option>
                        </Input>
                    </FormGroup>
                    <Button color="info" onClick={() => this.randomPhoto()} >Random a photo</Button>

                    <img className="btn-randomPhoto"
                        src={txtImg}
                        name="txtImg"
                        value={txtImg}
                        onChange={this.onChange}>

                    </img>
                    <Button type="submit">Add to album</Button>
                </Form>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         images: state.images
//     }
// }
const mapDispatchToProps = (dispatch,props) =>{
    return{
        actAddImageRequest : (image) =>{
            dispatch(Actions.actAddImageRequest(image))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddPhoto)