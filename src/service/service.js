import Axios from "axios"
// import {postAxios,getAxios} from ''
export default class Service {
    constructor() {
        this.Url = "http://192.168.0.140:3000/";
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
        console.log("derrtetyy",details)
        return Axios({
            method: 'POST',
            url: this.Url + 'customerDetails',
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
    getCustomerDetails(details) {
        console.log("login....",details)
        return Axios({
            method: 'POST',
            url: this.Url + `getCustomer`,
            data: details
        })
            .then(result => {
                console.log("result",result.data.result)
                return result.data.result;
            });
    }
}  