import React, { Component } from 'react';
import { AppBar, Container, Typography, Badge, CardActionArea, IconButton, Card, Toolbar, CardHeader, Menu, CardContent } from '@material-ui/core';
import GroupDataService from '../service/GroupDataService';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CssBaseline from '@material-ui/core/CssBaseline';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            pendingUsers: [],
            currentMembers: [],
            description: '',
            noOfPosts: 0
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
    }
    render() {
        return (
            <Container component="main">
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" flexGrow="1">
                            Admin Page                       </Typography>
                        <IconButton styles={{marginright:-1}}  color="inherit" aria-label="menu">
                            <Badge badgeContent={this.state.noOfPosts} color="secondary">
                                <NotificationsIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Card >
                    <CardContent color="textSecondary" gutterBottom>
                    </CardContent>
                </Card>
                {this.state.pendingUsers.map(pendingUser =>
                    <Card>
                        <CardActionArea>
                            <CardHeader >

                            </CardHeader>
                        </CardActionArea>
                    </Card>
                )}

            </Container>
        );
    }
}

export default Admin;
