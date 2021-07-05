/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './Login.css'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

const Login = (props) => {
    
    // const {title, setTitle} = props; const {description, setDescription} = props;

    const [title,
        setTitle] = useState('')
    const [description,
        setDescription] = useState('')
    const [postCreator,
        setPostCreator] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value)
        // console.log(e.target.value)

    }

    const handlePost = (e) => {
        setDescription(e.target.value)
        // console.log(e.target.value);
    }
    const handlePostCreator = (e) => {
        setPostCreator(e.target.value)
    }

    let history = useHistory();

   

    const sendPost = (e) => {
        // description(e.target.value)
        e.preventDefault()
        
        let postData = {
            title,
            description,
            postCreator
        }
        // console.log(postData);
        fetch('http://localhost:8080/all/', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
        .then(data => history.push('/'));
    };

    // const  trem = useHistory(); function handleClick() {   trem.push("/"); }
    

    return (
        <div className='postBody trembo pt-5'>
            <form onSubmit={sendPost} className=' '>

                <div className="row p-0 m-0">
                    <div className="col-lg-4 col-md-3 "></div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="mb-3">

                            <input
                            required
                                autocomplete='off'
                                type="text"
                                class="form-control"
                                onChange={handleTitle}
                                placeholder="Write here the title of your blog 👈'" />
                        </div>
                        <div class="mb-3">

                            <textarea onChange={handlePost} class="form-control" rows="3"></textarea>

                            <input
                            
                                placeholder='Your name (optional)'
                                onChange={handlePostCreator}
                                autocomplete='off'
                                className='mt-5'
                                type="text" />
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <input className="btn btn-success mt-3" type="submit" value="Post" />
                                {/* <button type="submit" className="btn btn-success mt-3" onClick={()=>handleButton()}>Post
                                </button> */}
                            </div>

                            <div className="col-lg-6">
                                <Link className='btn btn-danger mt-3' to='/'>Go to home</Link>
                            </div>
                        </div>

                        <div className="m-5 text-center"></div>
                    </div>
                    <div className="col-lg-4 col-md-3"></div>
                </div>

                {/* <Link   className="btn btn-success mt-3" to='/blog' > submit</Link> */}
                {/* <button className="btn btn-success mt-3"type="submit"> submit</button> */}

            </form>

            {/* <button className="btn btn-outline-primary" onClick={() => {
                sendPost();
                history.push('/')
            }}>Post data</button> */}

        </div>

    );
};

export default Login;
