import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      
      <tr>
        <td>1</td>
        <td>1</td>
        <td>IPHONE X</td>
      <td><span className="label label-warning">con hang</span></td>
     <td>
     <button type="button" className="btn btn-success">edit</button>
      <button type="button" className="btn btn-danger ml-10">delete</button>
     </td>
       
      </tr>
                        
    );
  }
}

export default ProductItem;
