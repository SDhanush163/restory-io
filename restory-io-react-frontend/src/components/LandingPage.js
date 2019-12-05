import React, { Component } from 'react';
import UserDataService from '../service/UserDataService'
import GroupDataService from '../service/GroupDataService'
import PostDataService from '../service/PostDataService'
import FileDataService from '../service/FileDataService'
import UserCard from './Material/UserCard';
import PostCard from './Material/PostCard';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import SendIcon from '@material-ui/icons/Send';
import Select from '@material-ui/core/Select';
import storage from '../Firebase/index'


class LandingPage extends Component {
    constructor(props) {
        super(props);
        let emailID = localStorage.getItem('emailId')
        this.state = { 
            groupID : '',
            fileName : 'Choose a file ...',
            email : emailID,
            user : '',
            status : '',
            imagePath: '',
            url: "",
        }
    }

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

    guid = () => {
        let {s4} = this
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
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

    uploadToFirebase = () => {
        const { image } = this.state;
          const uploadTask = storage.ref(`images/${image.name}`).put(image);
          uploadTask.on(
            "state_changed",
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                  this.setState({url : url})
                });
            });

    }

    handleUpload = e => {
        this.setState({ 
            fileName: e.target.files[0].name,
            image : "C:/Users/ds84/Desktop/Restory.io/SampleImages" + e.target.files[0].name
         });
         this.uploadToFirebase()
        }

    handlePostSubmit = (e) => {
        e.preventDefault()
        let id = this.guid()
        let textbody = document.getElementById("textbody").value
        let timestamp = new Date()

        let fileID = this.guid()
        
        let post = {
            postID : id,
            textBody : textbody,
            author : this.state.username,
            timeStamp : timestamp,
            groupID : this.state.groupID,
            fileID : fileID
        }
    }
    
    handleGroupChange = e => {
        this.setState({
            groupID : e.target.value
        })
    }

    render() { 
        let {fileName, user} = this.state
        const groupItems = []
        const postItems = []

        if(user.groups != null) {
        for (const [i, value] of user.groups.entries()) {

            GroupDataService.getGroupByGroupID(value).then(res => {
                let group = res.data
                groupItems.push(<option key={i} value={group.groupID}>{group.groupName}</option>)
            })
            
        }}

        if(user.posts != null) {
        for (const [index, val] of user.groups.posts.entries()) {
            let post = PostDataService.getPost(val)
            let file = FileDataService.getFile(post.fileID)
            let group = GroupDataService.getGroupByGroupID(post.groupID)
            postItems.push(<PostCard username={user.name} groupname={group.groupName} imgUrl={file.url} altText={file.altText} textBody={post.textBody}/>)
        }}
 
        return ( 
            <React.Fragment>
                <div>

                    <div className="row">
                        <div className="col-5 offset-3">
                            
                            <div style={{position: "sticky", top: 0, backgroundColor : "white", zIndex : 1}}>
                                <Card>
                                    {/* <h4 style={{marginLeft : "10px"}}>Create Post</h4> */}
                                    <CardContent>
                                        <form onSubmit={this.handlePostSubmit}>
                                        <TextField 
                                        id="textbody"
                                        label="What's on your mind"
                                        multiline
                                        rows="3"
                                        margin="normal"
                                        style = {{width : "100%"}}
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="start">
                                                <CreateIcon />
                                              </InputAdornment>
                                            ),
                                          }}
                                        />
                                        <label htmlFor="groupName">Group</label>
                                         <Select
                                        native
                                        onChange={this.handleGroupChange}
                                        inputProps={{
                                            name: 'group',
                                            id: 'groupName',
                                        }}
                                        style = {{width : "91%"}}
                                        >
                                        {groupItems}
                                        </Select><br/><br/>
                                        <Button type="button" variant="contained" component="label">
                                            <PublishIcon />
                                            <input onChange={this.handleUpload} id="uploadFile" type="file" style={{display : "none"}}/>  
                                        </Button>
                                        <label style={{marginLeft : 10}}>{fileName}</label>
                                       
                                        <Button style={{float : "right"}} color="primary" variant="outlined" type="submit"><SendIcon/></Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div><br/>
                            {postItems}
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <div style={{position: "sticky", top: 0, eight : 0}}>
                                <UserCard name={user.name}/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LandingPage;