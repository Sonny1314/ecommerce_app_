import React from 'react'
import AppContext from './AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'
class HomeItem extends React.Component{
    render(){
        return(
            <div className="col-sm-3 mb-4">
                <div className="card p-3">
                    <div className="">
                        <img className="img-fluid" src = {this.props.product.imageUrl} alt=""/>
                    </div>
                    <hr/>
                    <h4 className="card-title">{this.props.product.name}</h4>
                    <p className="card-text">{this.props.product.description}</p>
                    <h5 className="card-text">Price: &#x20b9; <small>{this.props.product.price}</small></h5> 
                    <span className="card-text" ><small>Available Quantity :</small><small>{this.props.product.available_quantity}</small></span>
                    <div>
                    <button className="btn btn-sm btn-warning " onClick={()=>this.context.addToCart(this.props.product,1)}>cart</button>
                    </div>
                    
                </div>

            </div>
        )
    }
}
HomeItem.contextType = AppContext
export default HomeItem