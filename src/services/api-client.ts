import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3c974ee28fc042b893299cf9ee3b5c18'
    }
})