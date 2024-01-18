import React, { useEffect, useRef, useState } from 'react'
import './UpdateUserProfile.css'
import { CiCamera } from "react-icons/ci";
import apiInstance from '../../utils/instance';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import user from '../../assets/user.avif'

const UpdateUserProfile = () => {
    // const { data, setData } = useData();

    // console.log(data)


    const navigate = useNavigate()
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedImage = localStorage.getItem('userProfileImage');
        if (storedImage) {
            setSelectedImage(storedImage);
        }
    }, []);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setSelectedImage(imageUrl);

            // Save the image URL to local storage
            localStorage.setItem('userProfileImage', imageUrl);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const password = form.password.value;
        const image = selectedImage;

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("phoneNumber", phoneNumber);
        formData.append("address", address);
        formData.append("password", password);
        formData.append("image", image);

        const authToken = localStorage.getItem('token');

        try {
            const response = await apiInstance.patch('/user/updateUserInfo', formData, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                form.reset();
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "User profile updated successfully",
                });
                navigate('/userProfile')
                localStorage.removeItem('userProfileImage');
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error?.message}`,
            });
        } finally {
            setLoading(false);
        }
    };


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const authToken = localStorage.getItem('token')
        apiInstance.get('/user/myInfo', {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                setError(error.message || 'An error occurred');
                console.log(error.message)
            });
    }, []);
    return (
        <>
            <div className="container">
                <div className='profile_container'>
                    <h4 className='order_list_title text-center'>Update Your Profile</h4>
                    <form onSubmit={handleSubmit}>
                        <div className=''>
                            <div className="profile_card">
                                <div className="text-center">
                                    <div class="profile-img">
                                        <input
                                            required
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                        />

                                        <div className=" m-auto mb-[20px]" style={{ position: 'relative', width: '300px', height: '200px' }}>
                                            <img
                                                src={selectedImage ? selectedImage : data?.image}
                                                alt="profile"
                                                layout="fill"
                                                objectFit="cover"
                                                onClick={handleImageClick}
                                                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                                            />
                                            <div className="position-absolute" style={{ bottom: "36%", right: "79px" }}>
                                                <CiCamera />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                            <input required name='firstName' type="text" className="form-control" placeholder="Enter your first name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                            <input required name='lastName' type="text" className="form-control" placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                                            <input required name="email" type="email" className="form-control" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                                            <input required name='password' type="password" className="form-control" placeholder="Enter your password" />
                                        </div>
                                    </div>
                                    <div className="col-lg -6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                                            <input required name="address" type="text" className="form-control" placeholder="Enter your address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                            <input required name='phoneNumber' type="number" className="form-control" placeholder="Enter your phone number" />
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