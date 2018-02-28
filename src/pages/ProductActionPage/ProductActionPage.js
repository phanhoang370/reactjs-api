import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:'',
      textName:'',
      textPrice:'',
      checkStatus:''
    };
  }
  componentDidMount() {
    var {match}=this.props;
    if(match) {
      var id =match.params.id;
      console.log(id);
      callApi(`products/${id}`, 'GET', null).then(res => {
        var data=res.data;
        this.setState({
          id:data.id,
          textName:data.name,
          textPrice:data.price,
          checkStatus:data.status
        });
      });
    }
  }
  onChange =(event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    var {id,textName, textPrice, checkStatus}=this.state;
    var {history} =this.props;
    
    if(id){
      // http://localhost:3000/product/:id => HTTP Method : PUT
      callApi(`products/${id}`, 'PUT', {
        name:textName,
          price:textPrice,
          status:checkStatus
      }).then(res =>{
        history.goBack();
      });
    }else{
      callApi('products', 'POST', {
        name:textName,
          price:textPrice,
          status:checkStatus
      }).then(res =>{
        //history.goBack();
        history.push("/product-list");
      });
    }
    
  }


  render() {
    var {textName, textPrice, checkStatus}=this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form action="" method="POST" role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label >name product</label>
              <input type="text" onChange={this.onChange} name="textName" value={textName} className="form-control"  placeholder="Input field" />
            </div>
            <div className="form-group">
              <label >price product</label>
              <input type="number" name="textPrice" value={textPrice} onChange={this.onChange} className="form-control"  placeholder="Input field" />
            </div>
            <div className="form-group">
              <label >Status</label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value={checkStatus} checked={checkStatus} onChange={this.onChange} name="checkStatus" />
                CON HANG
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/product-list"  className="btn btn-danger ml-10">Back</Link>
          </form>
      </div>
                        
    );
  }
  
}

export default ProductActionPage;
