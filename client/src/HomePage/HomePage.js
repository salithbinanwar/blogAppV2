/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './HomePage.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomePage = (props) => {
    const [title, setTitle] = useState()

    const [descrip, setDescrip] = useState()

    const [date, setDate] = useState()

    const [postLength, setPostLength] = useState()

    const [allData, setAllData] = useState([])
    const textLine = 'lorem ipsum dolor sit amet, consectetur adipiscing elit'
    // console.log(textLine.length)
    useEffect(() => {

        fetch("https://halozen-blog-app.herokuapp.com/all")
            .then(res => res.json())
            .then(data => {
                setPostLength(data.data.length)
                setAllData(data.data)

            })
    }, [])

 

 let beautify = new Date({})


    return (
        <div className='mainPage blur-bg'>
            
            <div className="pageCreate">
                <h2>Welcome to our blog website
                    <span id='halozen'>HALOZEN</span>
                </h2>
                <p>Here you can express anything you like , discuss about anything!!</p>
                <Link className='btn btn-secondary' to='/addpost'>Create a blog now!!</Link>
            </div>

            <h1 className='mb-5'>Total posts: {postLength}</h1>

            <div className="row" id="carsID">
                {allData.map(data => (
                    <div className="col-lg-4 mb-4">
                        <div className="card  container border-info">
                            <img  src=""  className="card-img-top cardImg" alt="" />
                            <div className="card-body">

                                <h1 className="card-title">{data.title.substring(0, 12) + '..'}</h1>
                                <h6 className="card-text mt-4">{data.description.substring(0, 70) + '...'}</h6>
                                <p>Date:</p>
                                <h5>created by: <strong>{data.postCreator ? data.postCreator : "Anonymous"}</strong></h5>
                                <Link className='col-lg-6 btn' to={`/blog/${data._id}`} id='checkBtn' >Check full blog</Link>

                            </div>
                        </div>
                    </div>

                ))}
            </div>




            {/* <Link to="/compo" class='btn btn-danger mt-5 ml-5' >Go to experiment</Link> */}

        </div>

    );
};

export default HomePage;