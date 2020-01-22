import React, { Component, useState } from 'react';
import '../dashboardComponent/dashboard.css';
import './allBooks.css'
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
class AllBooks extends Component {
   constructor(props) {
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
      this.handleOnHoverCard = this.handleOnHoverCard.bind(this)
      this.state = {
         item: null
      }
   };
   handleOnHoverCard = () => { this.setState({ cardHover: !this.state.cardHover }) }
   render() {
      // const [isShown,setIsShown]=useState(false);
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
                  <button className='buttonBuyNow' onClick={() => this.onSubmit(item)} >BUY NOW</button>
                  <Card className="card bookInfo" >
                     <p id="bookTitleForDescription" gutterBottom> Book Detail</p>
                     <p id="description">{item.description}</p>
                  </Card>
               </Card>
            </div>
         )
      })
      return (
         <div>
            <div>
               {Books}
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
