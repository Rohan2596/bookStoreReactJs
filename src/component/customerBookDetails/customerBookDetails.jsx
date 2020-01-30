import { Component } from "react";
import customer from '../../service/service'

class customerBookDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }
        new customer().getCustomer(this.state).then((data) => {
            console.log(data)
        })
    }
    
    render() {
        let book = new customer().getCustomer(this.state)
        var Books = this.state.item.map((item, i) => {
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
    }

}