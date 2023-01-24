import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:"",
        pass:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {email,pass} = this.state;
    fetch("http://localhost:3001/logon",{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            email,
            pass
        })
    })
  }
  render() {
    return (
    <form className="logbox" action="/dashboard" method="POST">
        <label>E-mail :</label>
        <input type="text" className="form-control" id="Username" placeholder="Enter E-mail..." autoComplete="off" onChange={(e)=>this.setState({email:e.target.value})}/>
        <label>Password :</label>
        <input type="password" className="form-control" id="Password" placeholder="Enter password..." autoComplete="off" onChange={(e)=>this.setState({pass:e.target.value})}/>
        <div className="acc">
            <p id="outred" className="outred fs-6 fw-lighter"></p>
            <p className="h6 fw-lighter">Don't have an Account?<Link className="h6 fw-lighter" to="/signup"> Sign Up</Link></p>
        </div>
        <div className="d-flex justify-content-end">
            <button className="btn log" type="submit">Log In</button>
        </div>
    </form>
    );
  }
}