import axios from 'axios'

const GROUP_API_URL = "http://localhost:8000/group"

class GroupDataService {
    
    addGroup(group) {
        return axios.post(`${GROUP_API_URL}`, group)
    }

    updateGroup(group) {
        return axios.put(`${GROUP_API_URL}`, group)
    }

    getGroupByGroupID(groupID) {
        return axios.get(`${GROUP_API_URL}/id/${groupID}`)
    }

    getGroupByGroupName(groupName) {
        return axios.get(`${GROUP_API_URL}/name/${groupName}`)
    }

}
 
export default new GroupDataService();