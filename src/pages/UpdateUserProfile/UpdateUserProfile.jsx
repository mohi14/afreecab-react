import React from 'react'
import './UpdateUserProfile.css'
import profile from '../../assets/profile.jpg'
const UpdateUserProfile = () => {
    return (
        <>
            <div className="container">
                <div className='profile_container'>
                    <h4 className='order_list_title text-center'>Update Your Profile</h4>
                    <div>
                        <div className=''>
                            <div className="profile_card">
                                <div className="text-center">
                                    <img className='' src={profile} alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your first name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">City</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your city" />
                                        </div>
                                    </div>

                                </div>
                                <button className='update_btn'>Update</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default UpdateUserProfile