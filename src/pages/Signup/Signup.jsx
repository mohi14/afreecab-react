import React, { useState } from 'react'
import signup from '../../assets/signup.avif';
import './SignUp.css'
import { Link } from 'react-router-dom';
import apiInstance from '../../utils/instance';

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            address
        };
        console.log(formData)
        apiInstance.post('/user/register', formData)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    return (
        <>
            <div className="container auth_wrapper">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <img className='img-fluid' src={signup} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="registration mx-auto d-block w-100">
                            <div className="page-header text-center">
                                <h1>Sign up</h1>
                            </div>
                            <form onSubmit={handleSubmit} method="post" className="form-validate form-horizontal well">
                                <fieldset>
                                    <legend className='login_title'>User Registration</legend>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">First Name</label>
                                        <input name='firstName' value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder='Enter your name' />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input name='lastName' value={lastName}
                                            onChange={(e) => setLastName(e.target.value)} placeholder='Enter your Username' type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email Address *</label>
                                        <input name='email' value={email}
                                            onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password *</label>
                                        <input name='password' value={password}
                                            onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Phone Number</label>
                                        <input name='phoneNumber' value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Enter your phone number' type="number" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input name='address' value={address}
                                            onChange={(e) => setAddress(e.target.value)} placeholder='Enter your address' type="text" className="form-control" />
                                    </div>

                                    <div className="form-check form-group d-flex justify-content-end">
                                        <Link to="/login">Sign in instead</Link>
                                    </div>

                                    <div className="form-group d-flex justify-content-start">
                                        <button type="submit" className="btn ">Sign Up</button>
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signup