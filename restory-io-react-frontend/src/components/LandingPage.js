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
import storage from './Firebase/index'
import SidebarComponent from './SidebarComponent' 

class LandingPage extends Component {
    constructor(props) {
        super(props);
        let emailID = localStorage.getItem('emailId')
        this.state = { 
            groupID : '',
            fileName : 'Choose a file ...',
            email : emailID,
            user : '',
            groupsRender : [],
            postsRender : [],
            cardsRender : [],
            status : '',
            image: null,
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
                this.renderPosts()
                }
            )
    }

    renderPosts = () => {
        for(const [i, val] of this.state.user.groups.entries()) {
            GroupDataService.getGroupByGroupID(val).then(res => {
                let groups = res.data
                this.setState({groupsRender : [...this.state.groupsRender, res.data]})
                for(const [i, val] of this.state.groupsRender.entries()) {
                    for(const [j, val] of val.posts.entries()) {
                        PostDataService.getPost(val).then(res => {
                            let postsToBeRendered = res.data 
                            
                            let postBeingRendered = {
                                user : this.state.user.name,
                                group : groups.groupName,
                                text : postsToBeRendered.textBody
                            }
                            this.setState({
                                postsRender : [...this.state.postsRender, res.data],
                                cardsRender : [...this.state.cardsRender, postBeingRendered]
                            })
                            
                        })
                    }
                }
            })
        }
    }

    handleUpload = e => {
        let { image } = this.state;
        image = e.target.files[0];
        this.setState(() => ({ image }));
        this.setState({ 
            fileName: e.target.files[0].name,
         });
         
         console.log(image)
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
                  this.setState({ url })
                  console.log({url});
                });
                
            });
        }

    handlePostSubmit = (e) => {
        // e.preventDefault()
        let {user} = this.state
        let id = this.guid()
        let textbody = document.getElementById("textbody").value
        let timestamp = new Date()

        let fileID = this.guid()

        let post = {
            postID : id,
            textBody : textbody,
            author : this.state.user.username,
            timeStamp : timestamp,
            groupID : this.state.groupID,
            fileID : fileID
        }
        console.log(post)
        GroupDataService.getGroupByGroupID(post.groupID).then(res => {
            let group = res.data
            
            group.posts.push(id)
            GroupDataService.updateGroup(group)
        })

        if(user.posts == undefined) {
            console.log("Posts undefined")
            user.posts = [id]
        }
        else{
            user.posts.push(id)
        }
        UserDataService.updateUser(user)
        PostDataService.addPost(post)

        // PostDataService.addPost
    }

    handleGroupChange = e => {
        console.log(e.target.value)
        this.setState({
            groupID : e.target.value
        })
    }

    render() { 
        let {fileName, user} = this.state
        const groupItems = []

        if(user.groups != null) {
            for (const [i, value] of user.groups.entries()) {
                GroupDataService.getGroupByGroupID(value).then(res => {
                    let group = res.data
                    groupItems.push(<option key={i} value={group.groupID}>{group.groupName}</option>)
            })}}
        
            // console.log(groupItems)
        return ( 
            <React.Fragment>
                <div>

                    <div className="row">
                        <div className="col-4">
                            <SidebarComponent />
                        </div>
                        <div className="col-5">

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
                                        onBlur={this.handleGroupChange}
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
                            {this.state.cardsRender.map((val, i) => (
                                <div><PostCard username={val.user} groupname={val.group} textBody={val.text} imgUrl={this.state.url} /><br/> </div>
                            ))}
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