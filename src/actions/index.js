import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller'


export const actFetchProductsRequest = (products) => {
    return (dispatch) => {
        return callApi('products', 'GET', NULL).then(res =>{
            dispatch(actFetchProducts(res.data));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}