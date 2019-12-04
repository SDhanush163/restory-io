import axios from 'axios'

const USER_API_URL = "http://localhost:8000/user"

class UserDataService {
    
    addUser(user) {
        return axios.post(`${USER_API_URL}`, user)
    }

    deleteUser(username) {
        return axios.delete(`${USER_API_URL}/${username}`)
    }

    updateUser(user) {
        return axios.put(`${USER_API_URL}`, user)
    }

    validateUser(email, password) {
        return axios.get(`${USER_API_URL}/valid/${email}/${password}`)
    }

    getUserbyUsername(username) {
        return axios.get(`${USER_API_URL}/uname/${username}`)
    }

    getUserbyName(name) {
        return axios.get(`${USER_API_URL}/name/${name}`)
    }

    getUserbyEmail(email) {
        return axios.get(`${USER_API_URL}/mail/${email}`)
    }

}
 
export default UserDataService;