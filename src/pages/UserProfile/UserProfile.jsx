import React from 'react'
import './UserProfile.css'
import user from '../../assets/user.jpeg'

const UserProfile = () => {
    return (
        <>
            <div className="user_profile  container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Account Info</h1>
                        <img src={user} alt="" />
                        <div className='mt-3 w-100'>
                            <span style={{ borderBottom: "1px solid grey" }}>Name: Nicolos</span>
                        </div>
                        <div className='mt-3'>
                            <span style={{ borderBottom: "1px solid grey" }}>Email: nicolos@gmail.com</span>
                        </div>
                        <div className='mt-3'>
                            <span style={{ borderBottom: "1px solid grey" }}>Address: Mirpur-1 </span>
                        </div>
                        <div className='mt-3'>
                            <span style={{ borderBottom: "1px solid grey" }}>City: Dhaka</span>
                        </div>
                    </div>

                    {/* <div className="col-lg-8">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className=''>Car Title</th>
                                    <th scope="col" className=''>Total Person</th>
                                    <th scope="col" className=''>Date</th>
                                    <th scope="col" className=''>Estimate Cost</th>
                                    <th scope="col" className=''>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}

                </div>

            </div>


        </>
    )
}

export default UserProfile