import React from 'react'
import './AllBookings.css'
const AllBookings = () => {
    return (
        <>
            <div class="allBookings container table-responsive " style={{ marginTop: "200px" }}>
            <h4 style={{color:"black", fontSize:"32px" ,fontWeight:"bold",textAlign:"center",margin:"20px 0"}}>All Booking List </h4>
                <table class="table table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">CAR</th>
                            <th scope="col">Customer</th>
                            <th scope="col">PICK-UP</th>
                            <th scope="col">DROP-OFF</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=''>	Volkswagen - Golf TSI 2017</td>
                            <td className=''>Lance Bogrol</td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select</option>
                                    <option value="3">Accept</option>
                                    <option value="2">Canceled</option>
                                    <option value="1">Active</option>
                                </select>
                            </td>
                            <td>
                                $92,20
                            </td>
                        </tr>
                        <tr>
                            <td className=''>	Volkswagen - Golf TSI 2017</td>
                            <td className=''>Lance Bogrol</td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select</option>
                                    <option value="3">Accept</option>
                                    <option value="2">Canceled</option>
                                    <option value="1">Active</option>
                                </select>
                            </td>
                            <td>
                                $92,20
                            </td>
                        </tr>
                        <tr>
                            <td className=''>	Volkswagen - Golf TSI 2017</td>
                            <td className=''>Lance Bogrol</td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select</option>
                                    <option value="3">Accept</option>
                                    <option value="2">Canceled</option>
                                    <option value="1">Active</option>
                                </select>
                            </td>
                            <td>
                                $92,20
                            </td>
                        </tr>
                        <tr>
                            <td className=''>	Volkswagen - Golf TSI 2017</td>
                            <td className=''>Lance Bogrol</td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td className=''>
                                <div >
                                    <p className='text-dark' style={{ fontSize: '16px' }} >Apr 9, 2023</p>
                                    <p className='text-dark' style={{ fontSize: '16px' }} >1308 Midway Road</p>
                                </div>
                            </td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select</option>
                                    <option value="3">Accept</option>
                                    <option value="2">Canceled</option>
                                    <option value="1">Active</option>
                                </select>
                            </td>
                            <td>
                                $92,20
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default AllBookings