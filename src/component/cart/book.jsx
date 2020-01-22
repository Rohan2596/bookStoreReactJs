import React, { Component, useState } from 'react';
import './cart.css';
import './book.css'
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card'
import cart from './cart-icon'

class AllBooks extends Component {
   constructor(props) {
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
      this.handleOnHoverCard = this.handleOnHoverCard.bind(this)
      this.state = {
          array:[],
         item: null
      }
   };
   handleOnHoverCard = () => { this.setState({ cardHover: !this.state.cardHover }) }
   render() {
      var Books = this.props.getAllBooksData.map((item, i) => {
         return (

            <div className="div" >
               <Card className='card info' >
                  <div className='imageSpace' >
                     <img className='bookImg' src={item.image} alt={"bookImg"} ></img>
                  </div>
                  <div className='bookName'>{item.title}</div>
                  <div className='authorName'>{item.author}</div>
                  <div className='bookName'>Rs.{item.price}</div>
                  <button className='buttonBuyNow' onClick={() => this.onSubmit(item)} >ADD TO BAG
                </button>
                  <Card className="card bookInfo" >
                     <p id="bookTitleForDescription" gutterBottom> Book Detail</p>
                     <p id="description">{item.description}</p>
                  </Card>
               </Card>
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
      console.log(this.state.array.push({item}));
      console.log(this.state.array)
      
    //   this.props.history.push('/cartIcon',{details:item});

   }
}
export default withRouter(AllBooks); 
