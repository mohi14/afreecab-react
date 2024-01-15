import React, { useRef, useState } from 'react'
import './UpdateUserProfile.css'
import { CiCamera } from "react-icons/ci";

const UpdateUserProfile = () => {

    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <>
            <div className="container">
                <div className='profile_container'>
                    <h4 className='order_list_title text-center'>Update Your Profile</h4>
                    <form>
                        <div className=''>
                            <div className="profile_card">
                                <div className="text-center">
                                    <div class="profile-img">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                        />
                                        <div className="position-relative m-auto mb-[20px]" style={{ position: 'relative', width: '300px', height: '200px' }}>
                                            <img
                                                src={selectedImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"}
                                                alt="Selected"
                                                layout="fill"
                                                objectFit="cover"
                                                onClick={handleImageClick}
                                                style={{ borderRadius: "50%" }}
                                            />
                                            <div className="position-absolute" style={{bottom:"36%",right:"79px"}}>
                                                <CiCamera />
                                            </div>
                                        </div>
                                    </div>
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
                    </form>

                </div>
            </div>



        </>
    )
}

export default UpdateUserProfile