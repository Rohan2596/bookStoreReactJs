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
   sliceTitle;
   componentDidMount() {
      new getAllBooksService().getAllBooks().then(response => {
         var allBooks = response.data.result;
         for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].title.length>25)
            {
               allBooks[i].title=allBooks[i].title.slice(0, 25);
               allBooks[i].title=allBooks[i].title+"...";
            }
         }
         console.log(allBooks);
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
         let allBooks=data.data.result;
         for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].title.length>25)
            {
               allBooks[i].title=allBooks[i].title.slice(0, 25);
               allBooks[i].title=allBooks[i].title+"...";
            }
         }
            this.setState({ getBooks: allBooks });

      }).catch((err) => {
         console.log(err);
      })
   }
   handleSortBy=(event)=>{
      new getAllBooksService().sortBook(event.target.value).then((data) => {
         let allBooks=data.data.result;
         for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].title.length>25)
            {
               allBooks[i].title=allBooks[i].title.slice(0, 25);
               allBooks[i].title=allBooks[i].title+"...";
            }
         }
            this.setState({ getBooks: allBooks });
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
            <div className='subMain'>
            <div className='lower'>
               <h3 id="bookStore">Books</h3>
               <select id="sortByDropDown" onChange={this.handleSortBy.bind(this)}>
                     <option value="relevancce">Sort by relevance</option>
                     <option value="-1">Price:low to high</option>
                     <option value="1">Price:hight to low</option>
                     <option value="date">Newest arraivals</option>
               </select>
               <AllBooks getAllBooksData={this.state.getBooks} />
            </div>
         </div>

            {/* <AllBooks getAllBooksData={this.state.getBooks} /> */}
         </div>
      );
   }
}
export default withRouter(Dashboard);