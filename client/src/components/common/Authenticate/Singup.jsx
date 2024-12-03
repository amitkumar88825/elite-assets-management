import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        dob: '',
        address: '',
    });

    const navigate = useNavigate();

    const cancelUser = () => {
        alert("Signup canceled!");
    };

    const resetUser = () => {
        setUser({
            firstName: '',
            lastName: '',
            username: '',
            phoneNumber: '',
            email: '',
            password: '',
            dob: '',
            address: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/', user);
            if (response.status === 200 || response.status === 201) {
                alert("Account created successfully!");
                navigate("/login");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed. Please try again later.");
        }
    };

    return (
        <div className="container">
            <h2 className="title">Create an Account</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={user.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Complete Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="button-group">
                    <button type="button" className="cancel-btn" onClick={cancelUser}>Cancel</button>
                    <button type="button" className="reset-btn" onClick={resetUser}>Reset</button>
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
