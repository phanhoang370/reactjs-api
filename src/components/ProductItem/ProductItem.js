import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
  onDelete = (id) => {
      
      if(confirm("Are you sure delete data ?")) { //eslint-disable-line
        console.log(id);
        this.props.onDelete(id);
      }
  }
  render() {
    var {index, product}=this.props;
    

    var statusName = product.status ? 'con hang' : 'het hang' ;
    var statusClass = product.status ? 'label label-warning' : 'label label-default' ;
    
    return (
      
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      <td><span className={statusClass}>{statusName}</span></td>
     <td>
     <Link to={`/product/${product.id}/edit`} className="btn btn-success" >edit</Link>
      <button type="button" className="btn btn-danger ml-10" onClick={() =>this.onDelete(product.id)}>delete</button>
     </td>
       
      </tr>
                        
    );
  }
}

export default ProductItem;
