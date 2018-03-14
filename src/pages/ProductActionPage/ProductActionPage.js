import React, {Component} from 'react';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actAddProductsRequest,actEditProductsRequest,actUpdateProductsRequest} from './../../actions/index';
import {connect} from 'react-redux'

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            textName: '',
            textPrice: '',
            checkStatus: ''
        };
    }

    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            console.log(id);
            // callApi(`products/${id}`, 'GET', null).then(res => {
            //     var data = res.data;
            //     this.setState({
            //         id: data.id,
            //         textName: data.name,
            //         textPrice: data.price,
            //         checkStatus: data.status
            //     });
            // });
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEdit) {
            var {itemEdit} =nextProps;
            this.setState({
                id:itemEdit.id,
                textName:itemEdit.name,
                textPrice:itemEdit.price,
                checkStatus:itemEdit.status
            });
        }
    }

    onChange = (event) => {
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
        var {id, textName, textPrice, checkStatus} = this.state;
        var {history} = this.props;
        var product = {
            id: id,
            name: textName,
            price: textPrice,
            status: checkStatus
        };
        if (id) {
            // http://localhost:3000/product/:id => HTTP Method : PUT
            // callApi(`products/${id}`, 'PUT', {
            //     name: textName,
            //     price: textPrice,
            //     status: checkStatus
            // }).then(res => {
            //     history.goBack();
            // });
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            // callApi('products', 'POST', {
            //   name:textName,
            //     price:textPrice,
            //     status:checkStatus
            // }).then(res =>{
            //   //history.goBack();
            //   history.push("/product-list");
            // });
            this.props.onAddProduct(product);
            history.goBack();
        }

    }


    render() {
        var {textName, textPrice, checkStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form action="" method="POST" role="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>name product</label>
                        <input type="text" onChange={this.onChange} name="textName" value={textName}
                               className="form-control" placeholder="Input field"/>
                    </div>
                    <div className="form-group">
                        <label>price product</label>
                        <input type="number" name="textPrice" value={textPrice} onChange={this.onChange}
                               className="form-control" placeholder="Input field"/>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value={checkStatus} checked={checkStatus} onChange={this.onChange}
                                   name="checkStatus"/>
                            CON HANG
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/product-list" className="btn btn-danger ml-10">Back</Link>
                </form>
            </div>

        );
    }

}
const mapStateToProps = state => {
    return {
        itemEdit :state.itemEdit
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductsRequest(product));
        },
        onEditProduct:(id) => {
            dispatch(actEditProductsRequest(id));
        },
        onUpdateProduct:(product) => {
            dispatch(actUpdateProductsRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
