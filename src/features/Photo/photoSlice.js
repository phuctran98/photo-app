import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
    name: 'photo',
    initialState: [{
        id: 91176,
        categoryId: 5,
        photo: 'https://picsum.photos/id/532/300/300',
        title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
    },
    {
        id: 82605,
        categoryId: 1,
        photo: 'https://picsum.photos/id/43/300/300',
        title: 'Ad officia magna veniam sunt.'
    },
    {
        id: 74760,
        categoryId: 3,
        photo: 'https://picsum.photos/id/722/300/300',
        title: 'Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.'
    },
    {
        id: 39588,
        categoryId: 5,
        photo: 'https://picsum.photos/id/294/300/300',
        title: 'Deserunt in tempor est id consectetur cupidatat.'
    },
    {
        id: 72133,
        categoryId: 4,
        photo: 'https://picsum.photos/id/229/300/300',
        title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
    },
    {
        id: 95333,
        categoryId: 1,
        photo: 'https://picsum.photos/id/862/300/300',
        title: 'Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.'
    },
    {
        id: 62419,
        categoryId: 3,
        photo: 'https://picsum.photos/id/515/300/300',
        title: 'Excepteur nisi aliquip ex aliqua consectetur id laboris cillum elit dolor dolor anim sint.'
    },
    {
        id: 12569,
        categoryId: 5,
        photo: 'https://picsum.photos/id/730/300/300',
        title: 'Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.'
    },
    {
        id: 47434,
        categoryId: 3,
        photo: 'https://picsum.photos/id/287/300/300',
        title: 'Veniam officia est nulla proident labore.'
    },
    {
        id: 52685,
        categoryId: 3,
        photo: 'https://picsum.photos/id/859/300/300',
        title: 'Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.'
    },
    {
        id: 69928,
        categoryId: 5,
        photo: 'https://picsum.photos/id/110/300/300',
        title: 'Nisi velit fugiat voluptate fugiat magna officia qui fugiat ad non.'
    },],
    reducers: {
        addPhoto: (state, action) => {
            const newPhoto = action.payload
            state.push(newPhoto)
        },
        editPhoto: (state,action) =>{
            const editItem = action.payload
            console.log('editItem',editItem)
            const findIndex = state.findIndex(photo => photo.id === editItem.id)
            console.log('findIndex',findIndex)
            if(findIndex>0){
                state[findIndex] = editItem
            }
        },
        deletePhoto : (state,action)=>{
            const removePhotoId = action.payload
            state = state.filter(photo => photo.id !== removePhotoId)
            return state
        }
    }
})
const { reducer, actions } = photo
export const { addPhoto,deletePhoto,editPhoto } = actions
export default reducer