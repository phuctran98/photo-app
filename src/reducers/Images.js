import * as Types from "../constants/ActionTypes";

const initState = []
let findIndex = (state,id) =>{
    var result = -1
    state.forEach((element,index) => {
        if(element.id === id){
            result = index
        }
    });
    return result 
}
const images = (state = initState, action) => {
    switch (action.type) {
        case Types.FETCH_IMAGES:
            // console.log(action)
            state = action.images
            // console.log(state)
            return [...state]
        case Types.ADD_IMAGE:
            // console.log(action)
            state.push(action.image)
            return [...state]
        case Types.DELETE_IMAGES:
            var index = findIndex(state,action.id)
            state.splice(index,1)
            return [...state]
        default:
            return state
    }
}


export default images