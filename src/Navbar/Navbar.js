import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container">
                    <Link class="navbar-brand" to="/">HALOZEN</Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/admin"></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        {/* <form class="d-flex">
                            <input class="form-control me-sm-2" type="text" placeholder="Search Post" />
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;