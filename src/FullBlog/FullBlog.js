import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './FullBlog.css'


const FullBlog = () => {
    let { id } = useParams()

const [allData, setAllData] = useState()

    useEffect(() => {

        fetch("http://localhost:8080/all")
            .then(res => res.json())
            .then(data => {
            
                setAllData(data.data)

            })
    }, [])
        
    const title = allData?.find(data => data._id === id).title
    const description =allData?.find(data => data._id === id).description
    const postCreator = allData?.find(data => data._id === id).postCreator


    return (
        <div className="blogBody" >

            <div className="container ">
                <h1 className='text-center '>{title}</h1>
                <p className='w-100 mt-5'>{description}</p>
                <p className='mt-5'>Post created by: <h3>{postCreator? postCreator:'Anonymous'}</h3> </p>
                <Link to='/' className='btn btn-secondary mt-5'> Go to home</Link>
            </div>


        </div>

    );
};

export default FullBlog;