import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID XhXvB42baZlTd_Bn6By9ZMYwjdOU9Rq27YAXmMx0JfE'
    }
});