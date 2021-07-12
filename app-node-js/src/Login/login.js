import React,{useState,useEffect,useContext} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { useAlert,positions,transitions } from 'react-alert'
import {AuthContext}  from "../context/auth"
import {Redirect, NavLink} from 'react-router-dom';
import userEvent from '@testing-library/user-event'


export default function Login(props) {
    const context = useContext(AuthContext)
    const [values,setValues]=useState({
        email:'',
        password:''
        // password:''
    })
    const alertOptions = {
        offset: '25px',
        timeout: 3000,
        transition: transitions.SCALE
      }
      

    const [posts,setPosts]=useState([])
    const alert = useAlert()
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/api/v1/users')
        .then(res=>{
            // console.log(res)
            setPosts(res.data)
            // console.log(posts)
           
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const [errors]=useState({});
   


    const onChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        axios.post("http://127.0.0.1:5000/api/v1/login",values).
        then((res)=>{ console.log(values);
            if(res.data.status==="User exists"){
                context.login({"name":res.data.username})
                props.history.push('/')
                alert.show("Logged in successfully!", { position: positions.BOTTOM_LEFT })}
            else{
                alert.show("Unable to login check your email_id and password", { position: positions.BOTTOM_LEFT })
            }}
            )
    }
 

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo192.png' /> Log-in to your account
          </Header>
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate>
            <Segment stacked>
                
                  <Form.Input
                  fluid
                  icon='user'
                  severity="Description"
                  iconPosition='left'
                  label='Email'
                  placeholder="Email.."
                  name="email"
                  value={values.email}
                  onChange={onChange} required='true'/>
                  <Form.Input
                   fluid
                   icon='lock'
                   iconPosition='left'
                  label='Password'
                  placeholder="Password.." 
                  name="password"
                  severity="Description"
                  value={values.password}
                  onChange={onChange} required='true'/>

                  <Button type="submit" primary color='teal' fluid size='large' severity="contained">
                      Login
                  </Button>
                  </Segment>
                 </Form>
                 <Message>
                   New to use? <NavLink to='/register'>Sign Up</NavLink>
                  </Message>


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
        </Grid.Column>
  </Grid>
    )
}