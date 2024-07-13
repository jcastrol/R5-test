import axios from "axios";

const URLBooks = 'https://openlibrary.org'; 
export const URLCover = 'https://covers.openlibrary.org/b/';

const apiBookLibrary = axios.create({
    baseURL: `${URLBooks}`, 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default apiBookLibrary;