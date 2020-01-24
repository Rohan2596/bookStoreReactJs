import React,{ Component } from "react"
import './toolbar.css'
class ToolBar extends Component {
  render() {
    return (
      
        <div className='dashboard'>
          <div className='logo'>
            <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="optional" />
          </div>
          <div className='title'>Bookstore</div>
        </div>
      
    )
  }
}
export default (ToolBar);
