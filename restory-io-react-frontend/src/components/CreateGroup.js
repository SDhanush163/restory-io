import React, { Component } from 'react';
import { Typography, AppBar,Container, TextField, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import GroupDataService from '../service/GroupDataService';
import UserDataService from '../service/UserDataService';
import SidebarComponent from './SidebarComponent';
class CreateGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            admin : ''
        }
        this.submit= this.submit.bind(this)
    }
    componentWillMount(){
        var email=localStorage.getItem('emailId')
        UserDataService.getUserbyEmail(email).then(response =>{
            console.log(response.data)
            this.setState({
                admin:response.data.name
            })
            console.log("name"+this.state.admin)
        })
    }
    submit(e){
        
        var gname=document.getElementById("groupName").value
        var des=document.getElementById("description").value
        var p=document.getElementsByName("privacy")[0].value//this.refs.privacy.value//document.getElementsByName("privacy").value
        var group={
            groupName:gname,
            groupDescription:des,
            privacy:p,
            admin:this.state.admin
        }
        GroupDataService.addGroup(group).then(response=>{
            window.history.pushState({urlPath:'/home'},"",'/home')
            window.location.reload()
        })
        e.preventDefault()
    }
    render() {
        return (
            <Container component="main"maxWidth="xs" >
                <main style={{ marginTop: '100px', marginLeft: '150px' }}></main>
                <AppBar>
                <Typography component="h1" variant="h4" align="center">Group Details</Typography>
                </AppBar>
                <div className="row">
                    <div className="col-6">
                        <SidebarComponent />
                    </div>
                    <main style={{ cellSpacing : '10px', marginLeft: '200px' }}></main>
                    <div className="col-10">
                    <form padding="10px" cellSpacing="10px">
                    <TextField 
                    variant= "outlined"
                    margin="normal" required
                    multiline
                    fullWidth
                    maxrow="1"
                    helperText ="Unique name for your group"
                    name="groupName"
                    id="groupName"
                    label="Group Name">
                    </TextField><br/><br/>
                    <TextField 
                    variant ="outlined"
                    required multiline fullWidth
                    rows="4"
                    helperText="About your group" 
                    name="description"
                    id="description"
                    label="Description"
                    >
                        Description
                    </TextField><br/><br/>
                    <TextField
                    variant="outlined"
                    name="admin"
                    label="Admin"
                    fullWidth
                    disabled
                    InputLabelProps={{shrink:true}} 
                    id="admin"
                    multiline
                    rowsMax="1"
                    value={this.state.admin}
                    ></TextField><br/><br/>
                    <FormControl component="fieldset">
                    <FormLabel >Privacy</FormLabel>
                        <RadioGroup ref="privacy" aria-label="privacy" name="privacy" id="privacy" >
                        <FormControlLabel  value="true" control={<Radio name="privacy" />} label="Public" />
                        <FormControlLabel value="false" control={<Radio name="privacy"/>} label="Private" />
                        </RadioGroup>
                    </FormControl>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.submit}
                    >
                       Create
                    </Button>
                </form>
                </div>
                </div>
            </Container>            
        );
    }
}
export default CreateGroup;