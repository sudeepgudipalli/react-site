import {Link} from 'react-router-dom';
import SignUpForm from './signupform';
import './style/log.css';

function Sign(){
    document.body.style.backgroundColor="gray";
    return (
        <>
        <title>Sign Up</title>
        <nav className="navbar navbar-dark navbar-expand-sm" style ={{backgroundColor:"darkblue"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="Home.png" alt="" height="35" width="35" className="d-inline-block align-text-top"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-white fs-4" id="NavBar">
                    University Research Activity Portal
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="NavBar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link fs-5 fw-light" to="/login">Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <center>
            <SignUpForm/>
        </center>
        </>
    );
}

export default Sign;