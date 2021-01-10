import axios from 'axios'

const instance = axios.create({
    baseURL:"https://tinder-backend-jaya.herokuapp.com/"
})

export default instance;