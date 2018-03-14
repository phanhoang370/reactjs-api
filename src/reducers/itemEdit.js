import * as Types from './../constants/ActionType'
var initialState = {};


const itemEdit = (state = initialState, action) =>{
    switch(action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:return [...state];
    }
}
export default itemEdit;