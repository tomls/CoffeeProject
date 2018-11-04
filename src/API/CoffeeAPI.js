import axios from 'Axios';

const APIURL = 'http://localhost:5000/api/coffee';

class CoffeeAPI {

    static GetCoffeesList(callback){
        axios.get(APIURL).then(response => {
            console.log(response);
            return callback(response.data);
        }).catch(error => {
            return error;
        });
    }

    static CreateCoffeeItem(data, callback){
        axios.post(APIURL, data).then(response => {
            console.log(response);
            return callback(response.data);
        }).catch(error => {
            return error;
        });
    }

    static DeleteCoffeeItem(id, callback){
        axios.delete(APIURL + '/' + id).then(response => {
            console.log(response);
            return callback(id);
        }).catch(error => {
            return error;
        });
    }
}

export default CoffeeAPI;