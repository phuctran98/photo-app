import * as Types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";


export const actFetchImagessRequest = () =>{
    return (dispatch) =>{
        return callApi('images', 'GET', null).then(res=>{
            dispatch(actFetchImages(res.data))
            // console.log(res)
        })
    }
}

export const actFetchImages = (images) =>{
    return{
        type : Types.FETCH_IMAGES,
        images
    }
} 
export const actAddImageRequest = (image) =>{
    return (dispatch) =>{
        return callApi('images','POST',image).then(res=>{
            dispatch(actAddImage(res.data))
        })
    }
}

export const actAddImage = (image)=>{
    return {
        type : Types.ADD_IMAGE,
        image
    }
}
export const actDeleteImageRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`images/${id}`,'DELETE',id).then(res=>{
            // console.log(res.data)
            dispatch(actDeleteImage(id))
        })
    }
}

export const actDeleteImage = (id)=>{
    return {
        type : Types.DELETE_IMAGES,
        id
    }
}