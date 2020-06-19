import axios from 'axios';

// const API = 'https://lifeguard.api.storyx.company/api/v1';
// const API = 'http://192.168.100.7:4000/api'; // must use IP for android
const API = 'http://localhost:4000/api'; // must use IP for android

export const instance = axios.create({
    baseURL: API,
    timeout: 1000 * 60,
});

export const authorizeApi = (token) => {
    instance.defaults.headers = {
        ...instance.defaults.headers,
        'Authorization': 'Bearer ' + token,
    };
};
export const deAuthorizeApi = () => {
    delete instance.defaults.headers['Authorization'];
};

export const authentication = (data) => instance.post('/login', data);

// Manipulate books
export const getBooks = () => instance.get('/books')

export const addBook = book => instance.post('/books', book)

export const updateBook = book => instance.put('/books/' + book._id, book)

export const deleteBook = book => instance.delete('/books/' + book._id, book._id)

// Manipulate users
export const getAllUsers = () => instance.get('/users')

export const addUser = (user) => instance.post('/register', user)

export const refresh = () => instance.get('/')

export const updateLocation = ({ accuracy, altitude, lat, long }) =>
    instance.put('/users/me/location', { long, lat, altitude, accuracy });

export const addJob = (data) => instance.post('/users/me/jobs', data);
export const getJobs = () => instance.get('/users/me/jobs');
