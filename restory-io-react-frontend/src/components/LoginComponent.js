import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import remy from '../restory.jpeg'
import { FormHelperText } from '@material-ui/core';
import UserDataService from '../service/UserDataService';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Restory.IO
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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
    width : 50,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const setCurrentEmail = (event) => {
    event.preventDefault()
    var email=document.getElementById("email").value;
    
    var password = document.getElementById("password").value;
    UserDataService.validateUser(email,password).then(
      response => {
        if(response.data) {
          localStorage.setItem("emailId",email);
         //this.context.router.push("/home")
          window.history.pushState({urlPath:'/home'},"",'/home')
          window.location.reload()
        }
        else {
          alert("Invalid Email or Password")
        }
      }
    )
  };
  const setEmail = () => {
    if(localStorage.emailId){
      document.getElementById("email").value=localStorage["emailId"];
    };
  };
  let emsgId=" ";
  let emsgP =" ";
  const validatePassword = (values) => {
    var pattern=new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    if(values.password == "" )  {
      emsgId="Password cannot be empty"
    }  
    if(!pattern.test(values.email)){
      emsgP="Enter a valid email Id"
    }
    
  };

  return (
    <Container component="main" maxWidth="xs" onLoad={setEmail}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="Remy Sharp" className={classes.avatar} srcSet ={remy} >
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} method="POST">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={emsgId}
            onChange={validatePassword}
          />
          <FormHelperText/>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            maxLength={12}
            name="password"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            helperText={emsgP}
            onChange={validatePassword}
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
          <FormHelperText/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={setCurrentEmail}
            onFocus={validatePassword}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}