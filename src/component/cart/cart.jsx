import React, { Component } from 'react';
import './cart.css';
import { withRouter } from 'react-router-dom';
import getAllBooksService from '../../service/service'
import AllBooks from './book'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
class Cart extends Component {
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
                    <button className="cart-icon" onClick={() => this.onSubmit()}>
                        Cart
                        <ShoppingCartOutlinedIcon />
                    </button>
                </div>
                <AllBooks getAllBooksData={this.state.getBooks} />
            </div>
        );
    }
    onSubmit() {
        this.props.history.push('/cartIcon')
    }
}
export default withRouter(Cart);