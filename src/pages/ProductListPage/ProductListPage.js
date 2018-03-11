import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import axios from 'axios';
//import apiCaller from './../../utils/apiCaller';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductsRequest} from './../../actions/index';

class ProductListPage extends Component {
  constructor (props) {
    super(props);

    // this.state={
    //   products:[]
    // };
  }
  componentDidMount() {
    // callApi('products', 'GET', null).then(res =>{
    //   // this.setState({
    //   //   products:res.data
    //   // });
    //   this.props.fetchAllProducts(res.data);
    // });
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    // var {products}=this.state;
    // callApi(`products/${id}`, 'DELETE', null).then(res =>{
    //   if(res.status === 200) {
    //     var index=this.findIndex(products, id);
    //     if(index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products
    //       });
    //     }
    //   }
    // });

  this.props.onDeteteProduct(id);

  }
  findIndex = (products, id) => {
    var result=-1;
    products.forEach((product, index) => {
      if(product.id === id) {
        result=index;
      }
    });
    return result;
  }
  render() {
    //var {products}=this.props;
    // var {products}=this.state;
    var {products}=this.props;
    
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/product/add" className="btn btn-default" >Add Product</Link>
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
          onDelete={this.onDelete}
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts : () =>{
      dispatch(actFetchProductsRequest());
    },
      onDeteteProduct :(id) => {
      dispatch(actDeleteProductsRequest(id));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
