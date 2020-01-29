import React, { Component } from 'react';
import './footer.css'

class footer extends Component {
    render() {
        return (
            <div className="border2" style={{ textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%"}}>
                Copyright @ 2020, Bookstore Private Limited. All Rights Reserved
            </div>
        )
    }
}
export default (footer);