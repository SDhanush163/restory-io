import React, { Component } from 'react';
import GroupDataService from '../service/GroupDataService';
import { AppBar, InputAdornment, Typography, Input, Card, CardContent, CardHeader, CardActionArea } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarComponent from './SidebarComponent';
import UserDataService from '../service/UserDataService';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class SubbedGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            user : ''
        }
    }

    componentWillMount() {
        UserDataService.getUserbyEmail(localStorage.getItem('emailId')).then(res => {
            console.log(res.data)
            let user = res.data
            this.setState({ user : res.data })
            if(user.groups !== null){
            for(const [i, val] of user.groups.entries()) {
                GroupDataService.getGroupByGroupID(val).then(res => {
                    console.log(res.data)
                    this.setState({groups : [...this.state.groups, res.data]})
                })
            }
        }
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-3">
                    <SidebarComponent />
                </div>
                <div className="col-6">
                    <div style={{background:"offwhite", zIndex:1}} >
                        {console.log("Groups rendered   ")}
                        {this.state.groups.map((value, i) => (
                            <div key={i}>
                            <Card>
                                <CardContent>
                                <Typography variant="h3">{value.groupName}</Typography><br/>
                                <Typography>{value.groupDescription}</Typography>
                                <Typography variant="caption">{value.admin}</Typography>
                                </CardContent>
                            </Card><br/></div>
                        ))}
                    </div>
                    </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default SubbedGroup;