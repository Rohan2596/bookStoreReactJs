import Axios from "axios"
// import {postAxios,getAxios} from ''
export default class Service {
    constructor() {
        this.Url = "http://18.189.22.123:3000/";
    }
    getAllBooks() {
        return Axios({
            method: 'GET',
            url: this.Url + 'getBookDetails'
        })
            .then(result => {
                console.log(result);
                return result;
            });
    }
    searchBookByTitle(serchData) {
        return Axios({
            method: 'GET',
            url: this.Url + 'searchBookByTitle?title=' + serchData
        })
            .then(result => {
                return result;
            });
    }
    customerDetails(details) {
        return Axios({
            method: 'POST',
            // url: this.Url + 'customerDetails',
            url: 'http://localhost:3000/customerDetails',
            data: details
        })
            .then(result => {
                return result;
            });
    }
    sortBook(data) {
        return Axios({
            method: 'GET',
            url: this.Url + 'sortBookByAttribute?attribute=' + data
        })
            .then(result => {
                return result;
            });
    }
}  