import React,{useState,useEffect} from 'react';
import axios from 'axios'


export default function DataFetching() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/users/')
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post=><li key={post.id}>{post.user_id}</li>)
                }
            </ul>
        </div>
    )
}
/*
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5555/api/",
});

export const getAPI = (url, params = {}) => {
  return instance.get(url, params);
};

export const postAPI = (url, data) => {
  return instance.post(url, data);
};
*/