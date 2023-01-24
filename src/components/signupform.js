import React, { Component } from "react";
import {Link, useNavigate} from 'react-router-dom';
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      pass: "",
      followed_ids: [],
      admin: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {user,email,pass,followed_ids,admin} = this.state;
    fetch("http://localhost:3001/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        user,
        email,
        pass,
        followed_ids,
        admin
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status == "User Exists"){
          console.log("Redirect");
          const navi = useNavigate();
          navi('/login',{replace: true});
        }
      });
  }
  render() {
    return (
    <form className="signbox" onSubmit={this.handleSubmit}>
        <label>Enter Email :</label>
        <input type="email" className="form-control" id="Email" placeholder="Enter E-mail..." onChange={(e)=>this.setState({email:e.target.value})} autoComplete="off"/>
        <label>Enter Username :</label>
        <input type="text" className="form-control" id="Username" placeholder="Enter Username..." onChange={(e)=>this.setState({user:e.target.value})} autoComplete="off"/>
        <label>Enter Password :</label>
        <input type="password" className="form-control" id="Password" placeholder="Enter password..." onChange={(e)=>this.setState({pass:e.target.value})} autoComplete="off"/>
        <p id="outred"></p>
        <div className="acc pb-2">
            <Link className="h6 fw-lighter pe-4" to="/login">Already have an Account?</Link>
        </div>
        <div className="d-flex justify-content-end">
            <button className="sign fs-6" type="submit" >Sign Up</button>
        </div>
    </form>
    );
  }
}