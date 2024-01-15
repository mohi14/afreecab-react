import React from 'react'
import car from '../../assets/car.jpg'
import './OrderList.css';
const OrderList = () => {
    return (
        <>

            <div style={{ marginTop: "0px",marginBottom:"100px" }}>
                <div className="container">
                    <h4 className=' order_list_title'>Your Order List</h4>

                    <table className="table" >
                        <thead className='' style={{ background: "#E2E5E5", height: "56px" }}>

                            <th scope="col" className=''></th>
                            <th scope="col" className=''>Car Title</th>
                            <th scope="col" className=''>Total Person</th>
                            <th scope="col" className=''>Date</th>
                            <th scope="col" className=''>Estimate Cost</th>
                            <th scope="col" className=''>Status</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <th scope="row"><img src={car} alt="car" /></th>
                                <td className=''>
                                    Seasonal Tire Totes w/TR Logo - 4 Pack</td>
                                <td className=''>4</td>
                                <td className=''>1/8/2024</td>
                                <td className=''>50$</td>
                                <td className=''>
                                    <button className='status_btn'>Pending</button>
                                </td>

                                <td ><i className="fa-solid fa-xmark"></i></td>
                            </tr>
                            <tr className=''>
                                <th scope="row"><img src={car} alt="car" /></th>
                                <td className=''>
                                    Seasonal Tire Totes w/TR Logo - 4 Pack</td>
                                <td className=''>4</td>
                                <td className=''>1/8/2024</td>
                                <td className=''>50$</td>
                                <td className=''>
                                    <button className='status_btn'>Pending</button>
                                </td>


                                <td ><i className="fa-solid fa-xmark"></i></td>
                            </tr>
                            <tr className=''>
                                <th scope="row">
                                    <img src={car} alt="car" /></th>
                                <td className=''>
                                    Seasonal Tire Totes w/TR Logo - 4 Pack</td>
                                <td className=''>4</td>
                                <td className=''>1/8/2024</td>
                                <td className=''>50$</td>
                                <td className=''>
                                    <button className='status_btn'>Pending</button>
                                </td>
                                <td ><i className="fa-solid fa-xmark"></i></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default OrderList