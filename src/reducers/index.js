import {combineReducers} from 'redux';
import products from './products';
import itemEdit from './itemEdit';
const appReducers = combineReducers({
    products:products,
    itemEdit:itemEdit

});

export default appReducers;