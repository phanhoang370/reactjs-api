import React, { Component } from 'react';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'',
      textName:'',
      textPrice:'',
      checkStatus:''
    }
  }

  render() {
    var {textName, textPrice, checkStatus}=this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form action="" method="POST" role="form">
            <div className="form-group">
              <label >name product</label>
              <input type="text" onChange={this.onChange} name="textName" className="form-control"  placeholder="Input field" />
            </div>
            <div className="form-group">
              <label >price product</label>
              <input type="number" name="textPrice" className="form-control"  placeholder="Input field" />
            </div>
            <div className="form-group">
              <label >Status</label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="checkStatus" />
                CON HANG
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
                        
    );
  }
  
}

export default ProductActionPage;
