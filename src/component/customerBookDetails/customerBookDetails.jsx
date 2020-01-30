import React, { Component } from "react";
import customer from '../../service/service'

class customerBookDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: this.props.location.state.data,
            divHide: true
        }
        console.log("dffddddddddd", this.state.item)
    }

    render() {
        var Books = this.state.item.map((item, i) => {
            console.log(item);
            return (
                <div>
                    <div className="divHide" style={{ display: this.state.divHide ? 'block' : 'none' }}>
                        <div>
                            <div className="cart-image">
                                <img className='image' src={item.image}></img>
                                <div className="book-title">{item.title}
                                    <div className="book-author">{item.author}</div>
                                    <div className="book-price"> Rs.{item.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div className="border">
                    <div className="cart-title">Book Details({this.state.item.length})</div>
                    {Books}
                </div>
            </div>

        )
    }

}
export default (customerBookDetails)