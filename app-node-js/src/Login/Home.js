import React,{useState,useEffect,useContext,Component} from 'react';
import axios from 'axios'
// import DataFetching from './DataFetching'
import { Grid,Card,Feed,Container,Header,Divider,Icon,Image,List,Menu,Segment,Sidebar,Visibility,Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { createMedia } from '@artsy/fresnel'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
import {AuthContext} from '../context/auth'
import Userdetails from '../components/Userdetails';


export default function Home() {
    const [posts,setPosts]=useState([])
    const {user}=useContext(AuthContext)
    const [blogs,setblogs]=useState([])

    // console.log(user.name)
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/api/v1/users')
        .then(res=>{
            // console.log(res)
            setPosts(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/api/v1/users/allblogs')
        .then(res=>{
            // console.log()
            setblogs(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

 
    

    return (

            <Grid >
 
              <Grid.Column width={4}>
               
              {user && (
                          <Grid.Column>
                              <Userdetails user={user.name}/>
                          </Grid.Column>
                      )}

               {!user &&
                   <Grid.Column>
                        <Divider section />
                          
                   <Card
                        fluid
                        header='Team'   
                        //description='Nikhil Nayak : PES1PG20CS026 Chiranthan KS : PES1PG20CS012
                       // Smitha S : PES1PG20CS032 '
                       description='18CT3-18CT4'
                        color="grey"
                        
                    />   
                     <Divider section />      
          </Grid.Column>  
               }                 
              
              </Grid.Column>
              <Grid.Column width={7}>
               
                          {user && (
                          <Grid.Column>
                              <PostForm/>                
                          </Grid.Column>
                      )}

                 {!user &&
                    <Grid.Column>
                         <Divider section />
                                   <Card
                                        raised = "True"
                                        color="blue"
                                        fluid
                                        header='Người Thực Hiện'   
                                        description='Trần Văn Thuần 
                                                 Sữ Hoài Giang '
                                   /> 
                                     <Divider section />
                                     <Card
                                        raised = "True"
                                        color="blue"
                                        fluid
                                        header='What Do You Write In Journey Diary?'   
                                         description= 'Trường Đại Học Kiến Trúc Đà Nẵng'
                                  /> 
                                     <Divider section />        

                          </Grid.Column> 
                 }         

              </Grid.Column>
              <Grid.Column width={5}>
              <Grid.Row>

              <Divider section />

                       <Card>
                            <Card.Content>
                            <Card.Header>Users</Card.Header>
                            </Card.Content>
                            <Card.Content>
                            
                                     {  posts && posts.map(post=>(
                                            <Feed.Summary key={post.user_id} style={{marginBottom:20}} >
                                                <PostCard post={post}/>
                                            </Feed.Summary>
                                        ))
                                        }
                                   
                                   
                            </Card.Content>
                        </Card>


                  </Grid.Row>
                  <Divider section />
              </Grid.Column>
              
            </Grid>
          )
          
}