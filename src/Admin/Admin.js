import { React, useEffect, useState } from 'react';
import './Admin.css'
const Admin = () => {
    const [allData, setAllData] = useState()
    useEffect(() => {
        fetch("http://localhost:8080/all")
            .then(res => res.json())
            .then(data => {
                setAllData(data.data)
            })
    }, [])

    const delHandler = (id) => {
        fetch(`http://localhost:8080/all/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                response.json()
            });
        window.location.reload()
    }

    console.log(allData);
    return (
        <div className='mt-5 m-5'>

            <ul class="list-group">
                {allData?.map(data => (

                    <li class="list-group-item container">
                        <div className="row ">
                            <div className="col-lg-8 col-sm-12 container listName ">
                                {data.title}
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <button type="button" class="btn btn-outline-success mr-5">Update</button>
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="button" class="btn btn-outline-danger" onClick={() => delHandler(data._id)}>Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>

                ))
                }
            </ul>
        </div>
    );
};

export default Admin;