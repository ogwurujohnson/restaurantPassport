import axios from 'axios';
import { retrieve } from './localStorage';

export default function() {
    const token = retrieve('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}