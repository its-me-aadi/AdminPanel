import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

function Login(props) {
    function StateChange() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/");
            }
        })
    }
    const auth = getAuth(props.app);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    function Onchange(e) {
        const { name, value } = e.target;
        console.log(name,value)
        setCredentials(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }

        })
    }
    function Loogin(e) {
        console.log(credentials.email, credentials.password);
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .catch((error) => {
                document.getElementById("error").innerHTML = error.message
            })
        e.preventDefault();
        StateChange();
    }
    function ForgotPass() {
        sendPasswordResetEmail(credentials.email)
            .then(() => {
                alert("Reset link sent to your email id")
            })
            .catch((error) => {
                document.getElementById("error").innerHTML = error.message
            });
    }
    return (
        <div >
            <div className="card-header">
                <center><h3>Login</h3></center>
            </div>
            <form onSubmit={Loogin}id="loginForm" className="card-body px-5 py-4">
                <center><small><span id="error" style={{ color: "red" }}></span></small></center>
                <center><label className="custom-field">
                    <input id="email" type="text" className="input" required  onChange={Onchange} name="email" value={credentials.email}/>
                    <span className="placeholder" >Email Id</span>
                </label><br />
                    <label className="custom-field">
                        <input id="password" type="password" className="input" onChange={Onchange} name="password" value={credentials.password} required />
                        <span className="placeholder" > Password</span>
                    </label></center><br /><br />
                <a href="#" onClick={ForgotPass} className="forgot-pass">Forgot Password</a>
                <center><button type="submit" className="btn btn-primary">Login</button>
                </center>
            </form>
        </div>)
}

export default Login;


