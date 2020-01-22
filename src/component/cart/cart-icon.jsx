import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './cart-icon.css'
class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.count = 1
        this.array = []
        // this.state={
        //     item:null
        // }
       
        // this.state.item = this.props.location.state.details
        // console.log(this.props.location.state.details)
        // console.log("===>"+this.state.item.image)
    }

    bookDetails = (array) => {
        this.array = array
    }
    
    decrement = () => {
        if(this.count>1)
            this.count--
        this.setState({count: this.count})
    }

    increment = () => {
        this.count++
        this.setState({count: this.count})
    }

    render() {
        return (
            <div className="border">
                <div className="cart-title">My Cart(2)</div>
                <div className="cart-image">
                    <img className="image" src={this.state.item.image}></img>
                    <div className="book-title">{this.state.item.title}
                        <div className="book-author">{this.state.item.author}</div>
                        <div className="book-price"> Rs.{this.state.item.price}</div>
                        <div>
                            <button className="minus-plus" onClick={() => {this.decrement()}}>-</button>
                                <input className="text" value={this.count} ></input>
                            <button className="minus-plus" onClick={() => {this.increment()}}>+</button>
                            <button className="remove">Remove</button>
                        </div>
                    </div>
                </div>
                    <button className="place-order">PLACE ORDER</button>
            </div>
        )
    }
}
export default withRouter(CartIcon);