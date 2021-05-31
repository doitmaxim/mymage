import axios from 'axios'


const key = '?key=21805822-4209b9170b5b5ac952d24594a&';

export default () => {
    return axios.create({
        baseURL: `https://pixabay.com/api/${key}`
    })
}