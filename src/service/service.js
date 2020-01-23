import Axios from "axios"

// import  {postAxios,getAxios} from ''
export default class Service {
    getAllBooks() {
        return Axios({
            method: 'GET',
            url: 'http://3.19.232.27:3000/getBookDetails'
        })
            .then(result => {
                console.log(result);
                return result;
            });
    }
    searchBookByTitle(serchData){
        return Axios({
            method: 'GET',
            url: 'http://3.19.232.27:3000/searchBookByTitle?title='+serchData
        })
            .then(result => {
                return result;
            });
    }
    customerDetails(details){
        return Axios({
            method: 'POST',
            url: 'http://3.19.232.27:3000/customerDetails',
            data: details
        })
            .then(result => {
                return result;
            });
    }
    sortBook(data){
        return Axios({
            method: 'GET',
            url: 'http://3.19.232.27:3000/sortBookByAttribute?attribute='+data
        })
            .then(result => {
                return result;
            });
    }
}  
