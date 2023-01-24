import React from 'react';
import {Link} from 'react-router-dom';
import './style/research.css';

function Info(){
    document.body.style.backgroundColor = "gray";
    return(
        <>
        <title>Research Info</title>
        <nav className="navbar navbar-dark navbar-expand-lg" style ={{backgroundColor:"darkblue"}}>
            <div className="container-fluid">
                <Link className="navbar-brand fs-4" to="..">
                    <img src="Home.png" height="35" width="35" className="d-inline-block align-text-top"/>
                    <span className=" ms-2 ps-2">University Research Activity Portal</span>
                </Link>
            </div>
        </nav>
        <div className="researchinfo">
            <div className="d-flex justify-content-end pe-2 mt-4 float-end">
                <Link className="btn btn-light border-primary me-4" to="/dashboard">Back to Researches</Link>
            </div>
            <div className="display-4 p-4 ms-2">Research Info</div>
            <div className="ms-4 ps-4 pe-5">
                <p className="ms-1 h5 fw-bold">Name : </p><p id="name">Research Name</p>
                <p className="ms-1 h5 fw-bold">Tags : </p><p id="tags">Tag1 , Tag2</p>
                <p className="ms-1 h5 fw-bold">Researchers : </p><p id="person">Person1 , Person2</p>
                <p className="ms-1 h5 fw-bold">Contact Researcher : </p>
                <ul className="list-unstyled" id="contact">
                    <li className="fs-6 ms-4">Person 1  -  <a href="mailto:person1@gmail.com">person1@gmail.com</a></li>
                    <li className="fs-6 ms-4">Person 2  -  <a href="mailto:person2@gmail.com">person2@gmail.com</a></li>
                </ul>
                <center style={{backgroundColor: "gray",padding:"1%",height:"50vh"}}>
                    <div className="signbox">
                        <center>
                        <p className="fs-6 ms-3">To View Please Log In or Sign up</p>
                        </center>
                        <div className="d-flex justify-content-center">
                            <Link className="sign ms-5" to="/login">Log In</Link>
                            <center>or</center>
                            <Link className="sign ms-3 " to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    </>
    );
}

export default Info;