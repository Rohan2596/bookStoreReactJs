import React, { Component } from 'react';
import './orderPlaced.css'
class OrderPlaced extends Component {
    render() {
        return (
            <div className='main'>
                <div className='upper'>
                    <div className='dashboard'>
                        <div className='logo'>
                            <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="Smiley face" />
                        </div>
                        <div className='title'>Bookstore</div>
                        <div className='search'>Search</div>
                    </div>
                </div>
                <div className='subOrder'>
                    <div className='orderTitle' style={{ width: '100%' }} >Order Placed SuccessFully</div>
                    <div className='para'><p>Hurray!!!your order is confirmed the order is #1234 save the order id for
                 further communication</p></div>
                </div>
                <div className='details'>
                    <div className='tableTitle'>
                        <div style={{ width: '33%', textAlign: 'center', marginTop: '0.25%', paddingTop: '0.75%' }}>Email us</div>
                        <div style={{ width: '33%', textAlign: 'center', marginTop: '0.25%', paddingTop: '0.75%' }}>Contact us</div>
                        <div style={{ width: '33%', textAlign: 'center', marginTop: '0.25%', paddingTop: '0.75%' }}>Address</div>
                    </div>
                    <div className='subDetails'>
                        <div style={{ width: '33%', textAlign: 'center', borderRight: '1px solid gray', paddingTop: '2%' }}>admin@bookstore.com</div>
                        <div style={{ width: '33%', textAlign: 'center', borderRight: '1px solid gray', paddingTop: '2%' }}>+91 7894561230</div>
                        <div style={{ width: '33%', textAlign: 'center', paddingTop: '2%' }}>Bridgelabz solutions LLP,Malhotra Chambers, First Floor, Govandi East, Mumbai, Maharashtra 400088</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderPlaced;