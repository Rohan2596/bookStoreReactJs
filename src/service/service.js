import Axios from "axios"

// import  {postAxios,getAxios} from ''
export default class Service {
    getAllBooks() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:4000/getBookDetails'
        })
            .then(result => {
                console.log(result);
                return result;
            });
    }
    searchBookByTitle(serchData){
        return Axios({
            method: 'GET',
            url: 'http://localhost:4000/searchBookByTitle?title='+serchData
        })
            .then(result => {
                return result;
            });
    }
}  
