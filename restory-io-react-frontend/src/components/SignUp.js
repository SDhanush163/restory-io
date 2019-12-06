import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import remy from '../restory.jpeg'
import UserDataService from '../service/UserDataService'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function useForceUpdate(){
  const [v, setValue] = useState(0); 
    return () => setValue(v => ++v);
}
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width : 50,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    emsgFirst:false,
    emsgl:false,
    emsgId:false,
    emsgP:false,
    emsgCP:false
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const update = useForceUpdate();
  var namePattern= /^[a-zA-Z]*$/;
  const validateFirstName = () => {
    let firstName =document.getElementById("firstName").value;
    if(firstName.length==0){
      values.emsgFirst=true
      update()
    }
    else if(!namePattern.test(firstName)){
      values.emsgFirst=true
      update()
    }
    else{
      values.emsgFirst=false
      update()
    }
  }
  const validateLastName = () =>{
    let lname =document.getElementById("lastName").value;
    if(lname.length==0){
      values.emsgl=true
      update()
    }
    else if(!namePattern.test(lname)){
      values.emsgl=true
      update()
    }
    else{
      values.emsgl=false
      update()
    } 
  };
  
  const validateEmail = () =>{
    let email = document.getElementById("email").value;
    var pattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!pattern.test(email)){
      values.emsgId=true
      update()
    }
    else{
      values.emsgId=false
      update()
    }
  }
  const validatePassword =()=>{
    let password = document.getElementById("password").value;
    let confirmPassword =document.getElementById("confirmPassword").value;
    if(password.length <6 || password.length>12 ){
      values.emsgP=true;
      update()
    }
    else if(password !== confirmPassword){
      values.emsgCP = true
      update()
    }
    else{
      values.emsgCP = false
      values.emsgP=false;
      update()
    }
  }
  const validateEmailBack= () =>{
    let email = document.getElementById("email").value;
    UserDataService.getUserbyEmail(email).then(response=>{
      if(response.data.email != null){
        console.log(response.data)
        alert("Email Id already registered. Use another email id or simply login.")
      }
    })
  }
  const goToLogin = (event)  => {
    event.preventDefault();
    let name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let username = document.getElementById("firstName").value.replace(/[aeiou]/gi, "")

    var user = {
      username : username,
      name : name,
      email : email,
      password : password
    }
    UserDataService.addUser(user)
    window.history.pushState({urlPath:'/'},"",'/')
    window.location.reload()
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="Remy Sharp" className={classes.avatar} srcSet ={remy}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                error={values.emsgFirst?true:false}
                id="firstName"
                label="First Name"
                autoFocus
                helperText="Only alphabets"
                onChange={validateFirstName}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={values.emsgl?true:false}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText="Only alphabets"
                onChange={validateLastName}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={values.emsgId?true:false}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText="Should be of format : example@xyz.com"
                onChange={validateEmail}
                onBlur={validateEmailBack}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={values.emsgP?true:false}
                name="password"
                label="Password"
                type={values.showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={validatePassword}
                helperText="Length should be between 6-12 characters"
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>),
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={values.emsgCP? true: false}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                helperText="Should match Password"
                onChange={validatePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props => goToLogin(props)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}