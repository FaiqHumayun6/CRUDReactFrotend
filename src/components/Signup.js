import {Link} from 'react-router-dom'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Signup(){

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault();

    axios
        .post("http://localhost:3001/signup",
        {
            user: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            },
        })
        .then((response) => {
        if (response.data.status.code === 200) {
            localStorage.setItem("token", `Bearer ${response.data.status.token}`);
            navigate('/', { replace: true });
        }
        })
        .catch((error) => {
        console.log("registration error", error);
        });
    };

    const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
                </div>

                <button type="submit" className="btn btn-primary btn-sm">
                Register
                </button>
                <p>
                Have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div> 
    );
}

export default Signup;
