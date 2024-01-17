import React from 'react';
import './SearchResults.css';
import car from '../../../assets/car.jpg'
import { Link } from 'react-router-dom';
const SearchResults = () => {

    const storedFormDataString = localStorage.getItem('searchData');
    const storedFormData = JSON.parse(storedFormDataString);
    
    const totalPassengers = storedFormData.totalPassenger
    const totalLuggage = storedFormData.totalLuggage

    const perPersonCost = 5
    const perLuggageCost = 10

    const totalPassengerCost = perPersonCost * totalPassengers
    const totalLuggageCost = perLuggageCost * totalLuggage

    const totalCost = totalPassengerCost + totalLuggageCost
    console.log(totalCost)

    
    return (
        <>
            <div className="searchResults">
                <div className="container">
                    <h4 className='order_list_title'>Search Result</h4>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className='card_header d-flex align-items-center gap-2'>
                                    <p>Available Now</p>
                                </div>
                                <img src={car} alt="" />
                                <div className="card_body">
                                    <p>FORD FOCUS</p>
                                    <div className='d-flex justify-content-between  car_title'>
                                        <h5 >1.5 EcoBlue MT Titenium X</h5>
                                        <p>${totalCost} <span>/hour</span></p>
                                    </div>
                                    <Link to="https://dashboard.stripe.com/register">
                                        <button >Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchResults