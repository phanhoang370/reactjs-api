import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import axios from 'axios';
import apiCaller from './../../utils/apiCaller';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductListPage extends Component {
  constructor (props) {
    super(props);

    this.state={
      products:[]
    };
  }
  componentDidMount() {
    callApi('products', 'GET', null).then(res =>{
      this.setState({
        products:res.data
      });
    });
  }

  render() {
    //var {products}=this.props;
    var {products}=this.state;
    
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/product/add" className="btn btn-default" >them san pham</Link>
          <ProductList>
            {this.showProduct(products)}
          </ProductList>
      </div>
                        
    );
  }
  showProduct(products) {
    var result= null;
    if(products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem 
          key={index}
          product={product}
          index={index}
          />
        );
      });
    }
    return result;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);
