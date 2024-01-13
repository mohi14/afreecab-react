import React from 'react'
import signup from '../../assets/signup.avif';
import './SignUp.css'
import { Link } from 'react-router-dom';

const Signup = () => {

    return (
        <>
            <div class="container auth_wrapper">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <img className='img-fluid' src={signup} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div class="registration mx-auto d-block w-100">
                            <div class="page-header text-center">
                                <h1>Sign up</h1>
                            </div>
                            <form id="member-registration" action="/astroidnew/index.php/pages/register?task=registration.register" method="post" class="form-validate form-horizontal well" enctype="multipart/form-data">
                                <fieldset>
                                    <legend className='login_title'>User Registration</legend>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Name *</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder='enter your name' />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Username *</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email Address *</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password *</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Confirm Password *</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div class="form-check form-group d-flex justify-content-end">
                                        <Link to="/login">Sign in instead</Link>
                                    </div>

                                    <div class="form-group d-flex justify-content-start">
                                        <button type="submit" class="btn ">Login</button>
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