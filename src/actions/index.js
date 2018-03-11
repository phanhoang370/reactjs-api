import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller'


export const actFetchProductsRequest = (products) => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res =>{
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
      products
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        });
    };
}

export const actDeleteProduct = (id) => {
    return {
        type:Types.DELETE_PRODUCT,
        id
    }
}