import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './cart-icon.css'
import Customer from '../customerDetails/customerDetails'
class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.count = 1
        this.totalPrice = 0
        this.state = {
            item: null,

        }

        this.state.item = this.props.location.state.selectedBooks
        console.log("====>", this.state.item[0].image)
        // console.log("===>"+this.state.item.image)
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

    remove = (item) => {
        console.log(this.state.item.length);
        let a;
        for(let i=0;i<this.state.item.length;i++) {
            // a = this.state.item[i].find(o => o.title == item.title)
            if(this.state.item[i].title==item.title)
            {console.log("ssss")
            this.state.item.splice(i,1);
            this.setState({item:this.state.item})
            }
        }
        
        console.log("===>"+a);
        
        console.log(item.title);
    }

    render() {
        var Books = this.state.item.map((item, i) => {
            console.log(item)
            { this.totalPrice = this.totalPrice + parseInt(item.price) }
            return (
                <div>
                    <div className="cart-image1">
                        <img className="image" src={item.image}></img>
                        <div className="book-title">{item.title}
                            <div className="book-author">{item.author}</div>
                            <div className="book-price" > Rs.{item.price}</div>
                            <div>
                                <button className="minus-plus" onClick={() => { this.decrement() }}>-</button>
                                <input className="text" value={this.count} ></input>
                                <button className="minus-plus" onClick={() => { this.increment() }}>+</button>
                                <button className="remove" onClick={() => { this.remove(item) }}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="border">
                    <div className="cart-title">My Cart({this.state.item.length})</div>
                    {Books}
                    <div className="total-price"><p id="totalprice">Total Price: {this.totalPrice}</p></div>
                    <button className="place-order">PLACE ORDER</button>
                </div>
                {/* <Customer/> */}
            </div>
        )
    }
}
export default withRouter(CartIcon);