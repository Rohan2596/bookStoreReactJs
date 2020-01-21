import React, { Component } from 'react';
import './dashboard.css';
//import Button from '@material-ui/core/Button';
class dashBoard extends Component {
  render() {
    return (
      <div className="titlebar">
        <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="aa" className="image" />
        {/* <Button className="abc" variant="contained" color="primary">
      Hello World
    </Button> */}
      </div>
    );
  }
}

export default dashBoard;