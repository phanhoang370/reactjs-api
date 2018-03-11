import * as Types from './../constants/ActionType'
var initialState = [
    // {
    //     id:1,
    //     name:'iphone 6',
    //     price:1000,
    //     status:true
    // },{
    //     id:2,
    //     name:'iphone x',
    //     price:10600,
    //     status:true
    // },{
    //     id:3,
    //     name:'iphone 8',
    //     price:10020,
    //     status:false
    // },{
    //     id:4,
    //     name:'iphone 7',
    //     price:10200,
    //     status:true
    // }
];

var findIndex = (products, id) => {
    var result=-1;
    products.forEach((product, index) => {
        if(product.id === id) {
            result=index;
        }
    });
    return result;
}
const products = (state = initialState, action) =>{
   var  index = -1;
   var id=action.id;
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
        state=action.products;
        return [...state];
        case Types.DELETE_PRODUCT:
            index=findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default:return [...state];
    }
}
export default products;