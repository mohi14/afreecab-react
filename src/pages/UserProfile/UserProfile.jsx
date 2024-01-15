import React, { useRef, useState } from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'

const UserProfile = () => {

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
            <div class="container emp-profile">
                <form method="post">
                    <div class="row align-items-center ">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <div className="m-auto mb-[20px]" style={{ position: 'relative', width: '300px', height: '200px' }}>
                                    <img
                                        src={selectedImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"}
                                        alt="Selected"
                                        layout="fill"
                                        objectFit="cover"
                                        onClick={handleImageClick}
                                        style={{ borderRadius: "" }}
                                    />
                                    <div class="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="" name="file" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h5>
                                    Kshiti Ghelani
                                </h5>

                                <p class="proile-rating"></p>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Mirpur-1 </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>City</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Dhaka </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-2">
                            <Link to="/updateUserProfile">

                                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />

                            </Link>
                        </div>
                    </div>

                </form>
            </div>

        </>
    )
}

export default UserProfile