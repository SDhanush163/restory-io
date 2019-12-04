import React, { Component } from 'react';
import UserDataService from '../service/UserDataService'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        let emailID = localStorage.getItem('emailId')
        this.state = { 
            email : emailID,
            user : '',
            status : ''
         }
    }

    componentWillMount() {
        UserDataService.getUserbyEmail(this.state.email).then(
            response => {
                console.log(response)
                // this.setState({
                //     user : response.data,
                //     status : response.status
                // })
            } 
        )
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <h1>Home</h1>
            </React.Fragment>
         );
    }
}
 
export default LandingPage;