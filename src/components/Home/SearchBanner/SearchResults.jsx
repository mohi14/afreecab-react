import React from 'react';
import './SearchResults.css';
import car from '../../../assets/car.jpg'
import star from '../../../assets/star.png'
const SearchResults = () => {
    return (
        <>
            <div className="searchResults">
                <div className="container">
                    <h4 className='order_list_title'>Search Result</h4>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className='card_header d-flex align-items-center gap-2'>
                                    <div className='ratings'>
                                        <img className='' src={star} alt="star" />
                                        <span>4.8</span>
                                        <span>(109)</span>
                                    </div>
                                    <p>Available Now</p>
                                </div>
                                <img src={car} alt="" />
                                <div className="card_body">
                                    <p>FORD FOCUS</p>
                                    <div className='d-flex justify-content-between  car_title'>
                                        <h5 >1.5 EcoBlue MT Titenium X</h5>
                                        <p>$24.59 <span>/hour</span></p>
                                    </div>
                                    <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className='card_header d-flex align-items-center gap-2'>
                                    <div className='ratings'>
                                        <img className='' src={star} alt="star" />
                                        <span>4.8</span>
                                        <span>(109)</span>
                                    </div>
                                    <p>Available Now</p>
                                </div>
                                <img src={car} alt="" />
                                <div className="card_body">
                                    <p>FORD FOCUS</p>
                                    <div className='d-flex justify-content-between  car_title'>
                                        <h5 >1.5 EcoBlue MT Titenium X</h5>
                                        <p>$24.59 <span>/hour</span></p>
                                    </div>
                                    <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className='card_header d-flex align-items-center gap-2'>
                                    <div className='ratings'>
                                        <img className='' src={star} alt="star" />
                                        <span>4.8</span>
                                        <span>(109)</span>
                                    </div>
                                    <p>Available Now</p>
                                </div>
                                <img src={car} alt="" />
                                <div className="card_body">
                                    <p>FORD FOCUS</p>
                                    <div className='d-flex justify-content-between  car_title'>
                                        <h5 >1.5 EcoBlue MT Titenium X</h5>
                                        <p>$24.59 <span>/hour</span></p>
                                    </div>
                                    <button>Book Now</button>
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