import axios from "axios";

const URLBooks = 'https://www.googleapis.com/books/v1'; 

const apiBookGoogle = axios.create({
    baseURL: `${URLBooks}/volumes`, 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiBookGoogle;