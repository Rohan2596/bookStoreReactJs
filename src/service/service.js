import Axios from "axios"

// import  {postAxios,getAxios} from ''
export default class Service {
    getAllBooks() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:3000/getBookDetails'
        })
            .then(result => {
                console.log(result);
                return result;
            });
    }
    searchBookByTitle(serchData){
        return Axios({
            method: 'GET',
            url: 'http://localhost:3000/searchBookByTitle?title='+serchData
        })
            .then(result => {
                return result;
            });
    }
    customerDetails(details){
        return Axios({
            method: 'POST',
            url: 'http://localhost:3000/customerDetails',
            data: details
        })
            .then(result => {
                return result;
            });

    }
}  
