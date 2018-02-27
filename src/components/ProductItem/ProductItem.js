import React, { Component } from 'react';

class ProductItem extends Component {
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
     <button type="button" className="btn btn-success">edit</button>
      <button type="button" className="btn btn-danger ml-10">delete</button>
     </td>
       
      </tr>
                        
    );
  }
}

export default ProductItem;
