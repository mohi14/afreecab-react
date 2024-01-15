import React, { useState } from 'react'
import signup from '../../assets/signup.avif';
import './SignUp.css'
import { Link } from 'react-router-dom';

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");


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
                            <form id="member-registration" action="/astroidnew/index.php/pages/register?task=registration.register" method="post" className="form-validate form-horizontal well" enctype="multipart/form-data">
                                <fieldset>
                                    <legend className='login_title'>User Registration</legend>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">First Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter your name' />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input placeholder='Enter your Username' type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email Address *</label>
                                        <input placeholder='Enter your email' type="email" className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password *</label>
                                        <input placeholder='Enter your password' type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Phone Number</label>
                                        <input placeholder='Enter your phone number' type="number" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Address</label>
                                        <input placeholder='Enter your address' type="text" className="form-control" id="exampleInputPassword1" />
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