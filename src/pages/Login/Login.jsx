import React, { useEffect, useState } from 'react'
import signup from '../../assets/login.avif';
import { Link, useNavigate } from 'react-router-dom';
import apiInstance from '../../utils/instance';
import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode'
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email,
            password,
        };

        apiInstance.post('/user/login', formData)
            .then(res => {
                console.log(res.data.accessToken);
                localStorage.setItem('token', res.data.accessToken);

                // Show success alert using Swal
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                });
                navigate('/userProfile')
            })
            .catch(error => {
                console.error('Error:', error);

                // Show error alert using Swal
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid credentials. Please try again.',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'OK',
                });
            });
    };
    
    const handleCallBackResponse = (response) => {
        console.log(response.credential)

    }
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "896031510552-cet1ea1246k91l3ouqagfdldq6tv32no.apps.googleusercontent.com",
            callback: handleCallBackResponse
        })

        google.accounts.id.renderButton(document.getElementById('signinDiv'),
        {
            theme:'outline',
            size:'large'
        }
        )

    }, [])

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
                            <form onSubmit={handleSubmit} className="form-validate form-horizontal well" encType="multipart/form-data">
                                <fieldset>
                                    <legend className='login_title'>User Login</legend>

                                    <div className="m-auto">
                                        <div id="signinDiv">

                                        </div>

                                        {/* <GoogleOAuthProvider clientId="896031510552-cet1ea1246k91l3ouqagfdldq6tv32no.apps.googleusercontent.com">
                                            <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    console.log(credentialResponse);
                                                }}
                                                onError={() => {
                                                    console.log('Login Failed');
                                                }}
                                            />

                                        </GoogleOAuthProvider>; */}





                                        <button className='bg-secondary text-light border-0  w-50 py-2 '>Login with google</button>
                                    </div>
                                    <p>----or---</p>
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input value={email}
                                            onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control" id="exampleInputEmail1" />
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