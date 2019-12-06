import React, { Component } from 'react';
import GroupDataService from '../service/GroupDataService';
import { AppBar, InputAdornment, Typography, Input, TextField,Card, CardContent } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
class SearchGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            groupsDes: []
        }
        this.searchGroup=this.searchGroup.bind(this)
    }
    searchGroup(value) {
        console.log(value)
        GroupDataService.getGroupByGroupName(value).then(response => {
            this.setState({
                groups: response.data.groupName,
                groupsDes: response.data.groupDescription
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <AppBar>
                    <Typography variant="h6">
                        <Input id="search" startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>}
                            placeholder="Search Group" onChange={this.searchGroup}></Input>
                    </Typography>
                    </AppBar>
                    <div className="row-cols-5">
                    <div style={{background:"offwhite", zIndex:1}} >
                            {this.state.groupName.maps((response,index) =>
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
                            }
                    </div>
                    </div>
                
            </React.Fragment>
        );
    }
}

export default SearchGroup;