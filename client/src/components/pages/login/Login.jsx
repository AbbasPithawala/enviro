import React from "react";
import { useState, useRef, useContext } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import { Context } from "./../../../context/Context";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import LoginIcon from "@material-ui/icons/LoginIcon";
// import LockIcon from '@mui/icons-material/Lock';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {axiosInstance} from "./../../../config";
import "./login.css";


export default function Login(){

    const userRef = useRef();
    const passwordRef = useRef();

  
    const { dispatch, isFetching } = useContext(Context);
    const [errorMsg, setErrorMsg] = useState("")
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [checkBox, setCheckBox] = useState(false)
    const [username, setUsername] = useState("")
    const [password, usePassword] = useState("")


  
  
    const onCheckBoxChange = async(e)=>{
      if(e.target.checked === true){
        setCheckBox(true)
      }else{
        setCheckBox(false)
      }
    }

const handleSubmit = async(e)=>{
  e.preventDefault()
  if(checkBox != true){
    setErrorMsg("Please select the checkbox!")
    setError(true)
    setOpen(true)
  }else{
    if(userRef.current.value == "" || passwordRef.current.value ==""){
      setErrorMsg("Please fill the above details!")
      setError(true)
      setOpen(true)
    }else{
      if(passwordRef.current.value.length < 7){
        setErrorMsg("Password cannot be less than 8 characters!")
        setError(true)
        setOpen(true)
      }else{
        dispatch({ type: "LOGIN_START" });
        try{
          const res = await axiosInstance.post("/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value
          })
          if(res.data[0] != undefined){
            dispatch({type: "LOGIN_SUCCESS", payload: res.data })
          }else{
            setErrorMsg("Inavlid Login details!")
            setError(true)
            setOpen(true)
          }
        }catch(err){
          setErrorMsg(err.message)
          setError(true)
          setOpen(true)
        }
       

      }
    }
  }

}

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }
  setOpen(false);
};
const action = (
  <React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);


    return(
<div className="loginBody">
      <div className="login">
        <div className="loginWrapper">
          <form className="loginForm"
          
           >

            <Box className="loginInput" >
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                type="text"
                id="input-with-sx"
                label="Username"
                variant="standard"
                inputRef={userRef}
              />
            </Box>
            <Box className="loginInput">
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Password"
                variant="standard"
                inputRef={passwordRef}
              />
            </Box>
            

            <div className="loginRmb">
              <input className="loginCheckbox" onClick = {onCheckBoxChange} type="checkbox" />
              <p>Remember me</p>
            </div>

            <Button className="loginButton" variant="contained" color="primary"  onClick={handleSubmit} type="submit" disabled={isFetching}>
            {/* <Button className="loginButton" variant="contained" color="primary" type="submit"> */}
            {/* <LoginIcon sx={{  mr: 1, my: 0.5 }} style={{ color: "white" }} /> */}
              Login
            </Button>


{/* 
            <Button className="googleLoginButton" onClick = {google } variant="contained">
              <GoogleIcon sx={{  mr: 1, my: 0.5 }} style={{ color: "white" }} />
              Login with Google
            </Button> */}

            

           
            <p className="txt">or</p>
            <div className="toRegister">
              Not a member ?
              <Button variant="contained" color="inherit">
              <Link className="registerButton" to="/register">
                Sign Up?
              </Link>
              </Button>
              </div>
          </form>
          {error &&
              <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        action={action} 
      >
         <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              > 
                {/* {/* Wrong username / password */}
                 {errorMsg}
             </Alert> 
              
        </Snackbar>
        
            }
        </div>
      </div>
    </div>

    )
}



