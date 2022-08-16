import { useState } from "react";
import "./register.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Modal from "@mui/material/Modal";
import Typography from '@mui/material/Typography';
// import { axiosInstance } from "../../../config";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [checkBox, setCheckBox] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");

  const [open, setOpen] = useState(false);
  // const modalOpen = () => setOpen(true);
  // const modalClose = () => setOpen(false);
const onCheckBoxChange = async(e)=>{
  if(e.target.checked === true){
    setCheckBox(true)
  }else{
    setCheckBox(false)
  }
}


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);

//     if(username === "" || email ==="" || password ===""){
//       setErrorMsg('Field is required');
//       setOpen(true);
//       setError(true)
//     }else if(checkBox === false){
//       setErrorMsg('Please check The box');
//       setOpen(true);
//       setError(true)
//     }else{

//       const specialChars = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
//       //console.log(specialChars.test(x));
   
//     if(specialChars.test(username)){
//       setErrorMsg('You cannot use any other characters apart from Letters, Alphabets and underscores in username!');
//       setOpen(true);
//       setError(true)
//     }else{
//       try {
//         const res = await axiosInstance.post("/auth/register", {
//           username,
//           email,
//           password,
//         });
        
//         if(res.data.username){
//           setSuccess(true);
//           setOpen(true);
//           res.data && window.location.replace("/login");
//         }else{
//           setOpen(true);
//           setError(true);
//           setErrorMsg(res.data.message);
//         }
//       } catch (err) {
//         setError(true);
//         setOpen(true);
//       }
//     }
//   }
    
//   };

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

  return (
    <div className="registerBody">
      <div className="register">
        <div className="registerWrapper">
        
          <form className="registerForm" 
        //   onSubmit={handleSubmit}
          >

            <Box className="registerInput">
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                type="text"
                id="input-with-sx"
                label="Username"
                variant="standard"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box className="registerInput">
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                type="text"
                id="input-with-sx"
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="registerInput">
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                type="text"
                id="input-with-sx"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <div className="registerRmb">
              <input className="registerInput" onClick = {onCheckBoxChange} type="checkbox"/>
              <Button><div className="tc">Accept terms and condition</div></Button>
              {/* <Button onClick={modalOpen}><div className="tc">Accept terms and condition</div></Button>
              <Modal
                open={open}
                onClose={modalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Terms & Condition
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, overflowY:"scroll", height:"500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia eos aut vitae perferendis voluptates laborum, eius maxime in distinctio dolor voluptas ipsa, ratione, dolores sint quo! Repellat quas repellendus enim excepturi! Reiciendis, tempore. Cupiditate obcaecati necessitatibus, corporis et sapiente provident neque repudiandae fuga eum recusandae omnis quod veniam earum delectus reiciendis molestias nulla hic iure aperiam. Sapiente voluptate sint minus necessitatibus laboriosam tenetur qui tempora ratione, voluptatem, quia corporis ipsa laudantium esse, vel magnam modi ullam! Atque, debitis? Pariatur, modi ab! Doloribus consequuntur quasi quos. Eaque, sint. Eum nihil excepturi quibusdam cumque placeat modi autem expedita veniam repellendus dignissimos dolor cupiditate aut repellat in commodi, a illo quis. Dolorem sequi quos ipsam possimus nulla! Odit, reiciendis alias libero corrupti perspiciatis minima placeat veniam molestias sequi cumque amet voluptatem accusamus, similique sapiente pariatur architecto iste. Iure, veniam! Consequatur tenetur ea expedita natus mollitia excepturi repellendus obcaecati quo, quam, assumenda, pariatur reiciendis tempora doloribus sit. Officiis, ipsum mollitia reiciendis soluta accusamus, delectus quam eveniet, fuga aliquid magni minus laudantium vero quisquam perspiciatis nesciunt ipsam vel. Laborum magnam itaque blanditiis deserunt molestiae in ipsum id, rem iusto, reiciendis officia rerum incidunt esse eum alias eligendi sequi sed, recusandae corrupti saepe ullam. At est aliquam, nam veniam nisi tempora iste. Explicabo, officia? Non obcaecati praesentium tempore nulla, inventore debitis. Voluptatibus, aliquam beatae in placeat cupiditate esse, facilis deserunt, adipisci nihil quia vero doloremque laboriosam numquam! Ipsam veniam, hic enim earum aperiam vel, fugit rem ab quam ipsum harum nobis, nesciunt alias animi accusamus aut. Dolore ipsa enim quasi nobis odit fugiat delectus iste harum. Non error modi, distinctio sed delectus quod quasi impedit possimus voluptatibus odit laudantium dignissimos porro tenetur quo excepturi nemo reprehenderit molestiae explicabo hic! Sit voluptatum ipsum 
          </Typography>
        </Box>
              </Modal> */}
            </div>
            <div className="registerBtn">
              <Button
                variant="contained"
                color="success"
                type="submit"
                // onClick={handleSubmit}
              >
                Register
              </Button>

              <p className="txt">or</p>
              <Button variant="contained" color="inherit">
                <Link to="/Login">Login</Link>
              </Button>
            </div>
          </form>
          {success && (
            <Snackbar
              open={open}
              autoHideDuration={20000}
              onClose={handleClose}
              action={action}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Register successful
              </Alert>
            </Snackbar>
          )}
          {error && (
            <Snackbar
              open={open}
              autoHideDuration={20000}
              onClose={handleClose}
              action={action}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                {/* Register failed, Username has already been used */}
                {errorMsg}
              </Alert>
            </Snackbar>
          )}
        </div>
      </div>
    </div>
  );
}
