import React from 'react'
import signup from '../../assets/login.avif';
import { Link } from 'react-router-dom';

const Login = () => {
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
                                <h1>Login</h1>
                            </div>
                            <form id="member-registration" action="/astroidnew/index.php/pages/register?task=registration.register" method="post" className="form-validate form-horizontal well" enctype="multipart/form-data">
                                <fieldset>
                                    <legend className='login_title'>User Login</legend>


                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email Address *</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password *</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div className="form-check form-group d-flex justify-content-end">
                                        <Link to="/signup">Sign up instead</Link>
                                    </div>

                                    <div className="form-group d-flex justify-content-start">
                                        <button type="submit" className="btn ">Login</button>
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

export default Login