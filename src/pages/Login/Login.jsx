import React, { useState } from 'react'
import signup from '../../assets/login.avif';
import { Link } from 'react-router-dom';
import apiInstance from '../../utils/instance';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            password,
        };
        console.log(formData)
        apiInstance.post('/user/login', formData)
            .then(res => {
                console.log(res.data.accessToken);
                localStorage.setItem('token', res.data.accessToken)
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
                                <h1>Login</h1>
                            </div>
                            <form onSubmit={handleSubmit} className="form-validate form-horizontal well" enctype="multipart/form-data">
                                <fieldset>
                                    <legend className='login_title'>User Login</legend>
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input value={email}
                                            onChange={(e) => setEmail(e.target.value)} placeholder='Enter yur email' type="email" className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password *</label>
                                        <input value={password}
                                            onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' type="password" className="form-control" id="exampleInputPassword1" />
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