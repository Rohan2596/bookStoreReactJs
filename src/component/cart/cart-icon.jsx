import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './cart-icon.css'
class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.count = 1
        this.array = []
        this.totalPrice= 0
        
        this.state = {
            item: null,
            
        }

        this.state.item = this.props.location.state.selectedBooks;
        console.log("====>", this.state.item[0].image)
        console.log("===>"+this.state.item)
    }
    
    bookDetails = (array) => {
        this.array = array
    }

    decrement = () => {
        if (this.count > 1)
            this.count--
        this.setState({ count: this.count })
    }

    increment = () => {
        this.count++
        this.setState({ count: this.count })
    }
    remove=(i)=>{
        this.state.item.splice(i,1)
        this.setState({item:this.state.item});
    }
    render() {
        
        var Books = this.state.item.map((item, i) => {
            {this.totalPrice=this.totalPrice+parseInt(item.price)}
            return (
                <div >
                    {/* <div className="cart-title">My Cart(2)</div> */}
                    <div className="cart-image">
                    <img className="image" src={item.image}/>
                    <div className="book-title">{item.title}
                        <div className="book-author">{item.author}</div>
                        <div className="book-price"> Rs.{item.price}</div>
                        <div>
                            <button className="minus-plus" onClick={() => {this.decrement()}}>-</button>
                                <input className="text" value={this.count} ></input>
                            <button className="minus-plus" onClick={() => {this.increment()}}>+</button>
                            <button className="remove">Remove</button>
                        </div>
                    </div>
                </div>
                </div>
            )
        })
        return (
            <div className="border">
                <div className="cart-title">My Cart({this.state.item.length})</div>
                {Books}
                <div id="total-price"><p id="totalprice">Total Price: {this.totalPrice}</p></div>
                <button className="place-order">PLACE ORDER</button>
            </div>)
    }
}
export default withRouter(CartIcon);