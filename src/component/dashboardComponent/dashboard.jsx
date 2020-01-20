import React, { Component } from 'react';
import './dashboard.css';
import { withRouter } from 'react-router-dom';
import getAllBooksService from '../../service/service'
import AllBooks from '../allBooks/allBooks'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         getBooks: [],
      }
   }
   getAllBooksData = []

   componentDidMount() {
      new getAllBooksService().getAllBooks().then(response => {
         var allBooks = response.data.result;
         this.setState({ getBooks: allBooks })
      })
   }

   handleSearch = (event) => {
      if (event.target.value.length >= 1) {
         this.setState({ searchValue: event.target.value });
      }
   }

   handleSearchBook = () => {
      let searchDataValue = this.state.searchValue
      new getAllBooksService().searchBookByTitle(searchDataValue).then((data) => {
         if (data.data.result.length > 0)
            this.setState({ getBooks: data.data.result });

      }).catch((err) => {
         console.log(err);
      })
   }

   render() {
      return (
         <div className='main' >
            <div className='upper'>
               <div className='dashboard'>
                  <div className='logo'>
                     <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="optional" />
                  </div>
                  <div className='title'>Bookstore</div>
                  <div className="search">
                     <InputBase
                        type="search"
                        placeholder="Search…"
                        onChange={this.handleSearch}
                        onKeyDown={this.handleSearchBook}
                        startAdornment={(
                           <InputAdornment position="start">
                              <IconButton>
                                 <SearchIcon />
                              </IconButton>
                           </InputAdornment>
                        )}
                     />
                  </div>
               </div>
            </div>
            <AllBooks getAllBooksData={this.state.getBooks} />
         </div>
      );
   }
}
export default withRouter(Dashboard);