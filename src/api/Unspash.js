import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -cRpJ_4pUw-5362sck_r1VXgwzPcxu-AJA0mCo7W-O8'
    }
});