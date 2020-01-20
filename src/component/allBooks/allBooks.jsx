import React, { Component } from 'react';
import '../dashboardComponent/dashboard.css';
import './allBooks.css'
import { withRouter } from 'react-router-dom';
class AllBooks extends Component {
   constructor(props) {
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
         item: null
      }
   };
   render() {
      var Books = this.props.getAllBooksData.map((item, i) => {
         return (

            <div className="div">
               <div className='card' >
                  <div className='imageSpace' >
                     <img className='bookImg' src={item.image} alt={"bookImg"} ></img>
                  </div>
                  <div className='bookName'>{item.title}</div>
                  <div className='authorName'>{item.author}</div>
                  <div className='bookName'>Rs.{item.price}</div>
                  <button className='buttonBuyNow' onClick={() => this.onSubmit(item)} >BUY NOW</button>
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

   onSubmit(item) {
      this.setState({ item: item });
      this.props.history.push('/customer')
   }
}
export default withRouter(AllBooks); 