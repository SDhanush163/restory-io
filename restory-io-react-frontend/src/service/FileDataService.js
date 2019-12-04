import axios from 'axios'

const FILE_API_URL = "http://localhost:8000/file"

class FileDataService {
    
    addFile(file) {
        return axios.post(`${FILE_API_URL}`, file)
    }

    deleteFile(fileID) {
        return axios.delete(`${FILE_API_URL}/${fileID}`)
    }

    getFile(fileID) {
        return axios.get(`${FILE_API_URL}/${fileID}`)
    }

}
 
export default FileDataService;