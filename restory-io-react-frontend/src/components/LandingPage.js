import React, { Component } from 'react';
import UserDataService from '../service/UserDataService'
import UserCard from './Material/UserCard';
import PostCard from './Material/PostCard';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        let emailID = localStorage.getItem('emailId')
        this.state = { 
            email : emailID,
            user : '',
            status : '',
            profileImage : '../Assets/Images/defaultProfile.jpg'
         }
    }

    componentWillMount() {
        UserDataService.getUserbyEmail(this.state.email).then(
            response => {
                console.log(response.data)
                this.setState({
                    user : response.data,
                    status : response.status
                })
            } 
        )
    }
    
    render() { 
        let {user, profileImage} = this.state
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div style={{position: "fixed", top: 0, left: "15%"}}>
                                <UserCard name={user.name}/><br/>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-8">
                            <PostCard /><br/>
                            <PostCard />
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LandingPage;