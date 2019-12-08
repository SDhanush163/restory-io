import React, { Component } from 'react';
import GroupDataService from '../service/GroupDataService';
import { AppBar, InputAdornment, Typography, Input, Card, CardContent, CardHeader, CardActionArea } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarComponent from './SidebarComponent';
import UserDataService from '../service/UserDataService';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class SearchGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            user : ''
        }
        this.searchGroup=this.searchGroup.bind(this)
    }

    componentWillMount() {
        GroupDataService.getAllGroups().then(res => {
            console.log(res.data)
            this.setState({groups : res.data})
        })
        UserDataService.getUserbyEmail(localStorage.getItem('emailId')).then(res => {
            console.log(res.data)
            this.setState({ user : res.data })
        })
    }

    searchGroup(value) {
        console.log(value)
        GroupDataService.getGroupByGroupName(value).then(response => {
            this.setState({
                groups: response.data,
            })
        })
    }
    
    handleAddToGroup = e => {
        e.preventDefault()
        let {user} = this.state
        if(user.groups != null) {
            if(user.groups.indexOf(e.target[0].value !== -1)) {
                console.log("Group already added to user")
            }
            else {
                console.log(e.target[0].value)
                user.groups = [...user.groups, e.target[0].value]
                UserDataService.updateUser(user)
                console.log("Group Added")
            }
        }
        else {
            console.log("New group added")
            user.groups = [e.target[0].value]
            UserDataService.updateUser(user)
        }
    }

    render() {
        const groupItems = []

            for (const [i, value] of this.state.groups.entries()) {
                groupItems.push(
                    <div key={i}>
                    <Card>
                        <CardContent>
                            <form onSubmit={this.handleAddToGroup}>
                                <input type="hidden" value={value.groupID} />
                            <Typography variant="h3">{value.groupName}</Typography><br/>
                            <Typography>{value.groupDescription}</Typography>
                            <Typography variant="caption">{value.admin}</Typography>  
                            <Button
                            type="submit"
                            color="primary"
                            style={{float:"right"}}
                            ><AddIcon/>Add to group
                            </Button><br/>       
                            </form> 
                        </CardContent>
                        <CardActionArea>
                            
                        </CardActionArea>
                    </Card><br/></div>
                )
            }
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-3">
                    <SidebarComponent />
                </div>
                <div className="col-6">
                    <Card>
                    <CardHeader
                    title="Search any group"
                    />

                    <Typography variant="h6">
                        <Input id="search" startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>}
                            placeholder="Search Group" 
                            style={{width : "80%"}}
                            >
                            </Input>
                            <Button onClick={this.searchGroup}>Search</Button>
                    </Typography>
                    </Card><br/>
                    
                    <div style={{background:"offwhite", zIndex:1}} >
                            {/* {this.state.groups.maps((response,index) =>
                            <Card>
                            <CardContent>
                                <Typography>
                                    {response}
                                </Typography> 
                                <Typography>
                                    {this.state.groupsDes[index]}
                                </Typography>   
                            </CardContent>
                            </Card>)
                            } */}
                            {groupItems}
                    </div>
                    </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default SearchGroup;