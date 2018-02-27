var initialState = [
    {
        id:1,
        name:'iphone 6',
        price:1000,
        status:true
    },{
        id:2,
        name:'iphone x',
        price:10600,
        status:true
    },{
        id:3,
        name:'iphone 8',
        price:10020,
        status:false
    },{
        id:4,
        name:'iphone 7',
        price:10200,
        status:true
    }
];

const products = (state = initialState, action) =>{
    switch(action.type) {
        default:return [...state];
    }
}
export default products;