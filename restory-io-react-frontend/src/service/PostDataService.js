import axios from 'axios'

const POST_API_URL = "http://localhost:8000/post"

class PostDataService {
    
    addPost(post) {
        return axios.post(`${POST_API_URL}`, post)
    }

    deletePost(postID) {
        return axios.delete(`${POST_API_URL}/${postID}`)
    }

    updatePost(post) {
        return axios.put(`${POST_API_URL}`)
    }

    getAllPosts() {
        return axios.get(`${POST_API_URL}`)
    }

    getPost(postID) {
        return axios.get(`${POST_API_URL}/${postID}`)
    }

}
 
export default new PostDataService();