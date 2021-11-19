import axios from 'axios';

var baseURL='https://synamatic-backend.herokuapp.com';
// baseURL = 'http://127.0.0.1:8000';
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default class API {
    getMovies = async params => {
        let url = '/movies/';
        let query = new URLSearchParams();
        for (const key in params) {
            if (params[key] != null) {
                query.append(key, params[key]);
            }
        }

        if (query.toString() != '') {
            url += '?' + query.toString();
        }
        const places = await api
            .get(url)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return places;
    };
}
