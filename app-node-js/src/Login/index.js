/*
import React, { useState, useEffect } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { postAPI } from "../services/api";
import './index.css';

const submitLoginAPI = (data) => {
  return postAPI("/login", data);
};

function Login() {
 // const classes = styles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [info, setInfo] = useState({ username: "", password: "" });
  const [errors]=useState({});
  useEffect(() => {
    console.log("Account Info: ", info);
  }, [info]);

  const onValueChangeUsername = (event) => {
    setInfo((prev) => ({ ...prev, username: event.target.value }));
  };

  const onValueChangePassword = (event) => {
    setInfo((prev) => ({ ...prev, password: event.target.value }));
  };

  const onSubmit = async () => {
    const data = new FormData();
    data.append("username", info.username);
    data.append("password", info.password);
    try {
      const result = await submitLoginAPI(data);
      console.log(JSON.stringify(result));
      if (result.data === "success") {
        enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
        history.push("/customers");
      } else {
        enqueueSnackbar("Đăng nhập thất bại!", { variant: "error" });
      }
    } catch (e) {
      console.log("Error", e);
      enqueueSnackbar("Đăng nhập thất bại!", { variant: "error" });
    }
  };

  return (  
    
    <div className="App">
      <div className="LoginCard">
          <div className="header">
             <p className="font">Welcome Back</p>
      </div>
      <div
        className="input"
       >
    <TextField
    variant="outlined"
    label="Username"
    type="Username"
    info={info.Username}
    onChange={onValueChangeUsername } required='true'
    /> 
    </div>
    
    
    <div
    className="input"
    >
    <TextField
    variant="outlined"
    label="Password"
    type="Password"
    info={info.Password}
    onChange={onValueChangePassword } required='true'
     
    />
    </div>
    
    <div
    className="button"
    >
    <Button color="primary" variant="contained" onClick={onSubmit}>
        Login
      </Button>
    </div>
  
    <div className="signUp">
       <p>Don't have an account?</p>
       <p className="signUpText" >Sign up</p>
    </div>

    {Object.keys(errors).length>0 &&(
                    <div className="ui error message">
                     <ul className="list">
                        {Object.values(errors).map(value=>(
                            <li key={value}>{value}</li>
                        ))}
                     </ul>

                 </div>
                 )}
    </div>
  </div>
  );
}

export default Login;
*/

