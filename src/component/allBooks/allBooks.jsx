import React, { Component } from 'react';
import '../dashboardComponent/dashboard.css';
import './allBooks.css'
import {withRouter} from 'react-router-dom';

class AllBooks extends Component {
   render() {
      console.log("received data from dashboard", this.props);
      var Books = this.props.getAllBooksData.map((item, i) => {
         console.log("keys" + JSON.stringify(item));

         return (
            (i+1) % 5 === 0 ? <br /> :
            <div className="div">
               <div className='card' >
                  <div className='imageSpace' >
                     <img className='bookImg' src={item.image} alt={"bookImg"} ></img>
                  </div>
                  <div className='bookName'>{item.title}</div>
                  <div className='authorName'>{item.author}</div>
                  <div className='bookName'>Rs.{item.price}</div>
                  <div className='buttonBuyNow' onClick={this.onSubmit}  >BUY NOW</div>
                  </div>
               </div>
               
              
         )

      })
      return (
         <div className='subMain'>
            <div className='lower'>
               <h3>Books</h3>
               <div>
                  <div>
                     {Books}
                  </div>

               </div>
            </div>
         </div>
         
      )
   }
   onSubmit=()=>{
      this.props.history.push('/customer')
   }
}
export default withRouter(AllBooks);