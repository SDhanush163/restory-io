import React, { Component } from 'react';
import { AppBar, Container, Typography, Badge, CardActionArea, IconButton, Card, Toolbar, CardHeader, Menu, CardContent, Button, CardActions } from '@material-ui/core';
import GroupDataService from '../service/GroupDataService';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserDataService from '../service/UserDataService';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            pendingUsers: [],
            currentMembers: [],
            description: '',
            noOfPosts: 0,
            appDeny:[]
        }
    }
    componentWillMount() {
        // GroupDataService.getGroupByGroupName(this.state.groupName).then(response=>
        //     {
        //         console.log(response.data)
        //         this.setState({
        //             description:response.data.groupDescription,
        //             pendingUsers:response.data.pendingUsers,
        //             currentMembers:response.data.users,
        //             noOfPosts:response.data.posts.length,
                    
        //         })
        //     })
        // if(this.state.pendingUsers!=null){
        // var noOfPendingUser=this.state.pendingUsers.length;
        // var user=this.state.pendingUsers
        // let app=[]
        // while(noOfPendingUser>-1){
        //     UserDataService.getUserbyEmail(user[noOfPendingUser-1]).then(response=>{
        //         console.log(response.data.name);
        //         app.append(response.data.name)
        //     }
        //     )
        // }
        // this.setState({
        //     appDeny:app
        // })
    // }
    }
    render() {
        var count=0;
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" flexGrow="1">
                            Admin Page</Typography>
                        <IconButton styles={{marginright:-1,offset:10}}  color="inherit" aria-label="menu">
                            <Badge badgeContent={this.state.noOfPosts} color="secondary">
                                <NotificationsIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="row-cols-5 offset-3">
                <div style={{position: "sticky", top: 0, backgroundColor : "white", zIndex : 1}}>
                {this.state.appDeny.map(res =>
                    <Card>
                        <CardContent>
                            <Typography>
                                {res}
                            </Typography>                           
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                             Accept
                            </Button>
                            <Button size="small" color="primary">
                             Deny
                            </Button>
                        </CardActions>
                    </Card>
                )}
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Admin;
