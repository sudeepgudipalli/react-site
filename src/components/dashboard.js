import React from 'react';
import {Link} from 'react-router-dom';
import './style/dashboard.css';

function Dashboard(){
    document.title = "Dashboard";
    document.body.style.backgroundColor = "white";
    return (
        <>
        <div style={{backgroundColor:"darkblue",paddingTop:"1%",paddingLeft:"2%"}}>
            <ul className="nav nav-tabs">
                <li className="nav-item pb-2">
                   <Link className="nav-brand" to="/"><img alt="brand" src="Home.png" height="35" width="35"/></Link>
                </li>
                <li className="nav-item dropdown end">
                    <button className="text-light link dropdown-toggle " id="Menu" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"rgba(0,0,0,0)",border:"0px"}}><img src="prof.png" alt="profile" height="35" width="35"/></button>
                    <ul className="dropdown-menu" aria-labelledby="Menu">
                        <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                        <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="display-2 p-4">Research Activities</div>
        <form className="row ps-4 ms-2 g-2 pe-4 me-2">
            <div className="col-md-4 form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="ResearchName"/>
                <label className="ms-2">Research Name</label>
            </div>
            <div className="col-md-1 form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Tags"/>
                <label className="ms-2">Tags</label>
            </div>
            <div className="col-md-3 form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="UnivName"/>
                <label className="ms-2">University Name</label> 
            </div>
            <div className="col-md-2 form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="state"/>
                <label className="ms-2">State/Country</label> 
            </div>
            <div className="form-floating col-md-1" style={{minWidth:"120px"}}>
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                  <option value="date">Date</option>
                  <option value="popular">Popular</option>
                </select>
                <label className="ms-2" >Sort By</label>
              </div>
        </form>
        <div className="hold">
            <table className="table table-hover" id="tab"></table>
        </div>
    </>
    );
}

export default Dashboard;