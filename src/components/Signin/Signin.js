import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Select,Input,MenuItem,FormHelperText, FormControl} from '@material-ui/core';
import {Redirect} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(./images/bgimage.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color : theme.palette.secondary.contrastText,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  centerDiv : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    type : 'student',
    toDashboard  : false
  });

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    setValues(oldValues => ({
      ...oldValues,
      toDashboard : true
    }))
  };

  if(values.toDashboard === true){
    return (
      <Redirect to= {'/'+values.type} />
    );
  }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={8} className={classes.image}>
        <Grid container className={classes.centerDiv}>
            <img src="./images/bmslogo.png" width="10%" alt="BMS logo"/> {/* bms logo*/}
          <Grid item>
            <Typography variant="h5" component="h1">
              BMS Lecture Portal
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} component={Paper} elevate={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src="./images/bmslogo.png" alt="BMS logo"/> {/* bms logo*/}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl>
              <Select
                value={values.type}
                onChange={handleChange}
                input={<Input name="type" id="user-type" />}
              >
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='dept'>Department</MenuItem>
                <MenuItem value='lecturer'>Lecturer</MenuItem>
                <MenuItem value='student'>Student</MenuItem>
              </Select>
              <FormHelperText>Select user type</FormHelperText>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
