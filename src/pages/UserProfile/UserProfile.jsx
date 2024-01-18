import "./UserProfile.css";
import { Link } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import apiInstance from "../../utils/instance";
import { useEffect, useState } from "react";
import user from "../../assets/user.avif";
const UserProfile = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [bookings, setBookings] = useState([]);

  const getUserBookings = async (authToken) => {
    const res = await apiInstance.get("/booking/myBookings", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    setBookings(res?.data);
    console.log(res?.data, "ress");
  };

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setToken(authToken);
    getUserBookings(authToken);
    apiInstance
      .get("/user/myInfo", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div class="container emp-profile">
        <form method="post">
          <div class="row align-items-center ">
            <div class="col-md-4">
              <div class="profile-img">
                <div
                  className="m-auto mb-[20px]"
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "200px",
                  }}
                >
                  <img
                    src={data?.image ? data?.image : user}
                    alt="Selected"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>
                        {data?.firstName} {data?.lastName}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{data?.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>{data?.phoneNumber}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Address</label>
                    </div>
                    <div class="col-md-6">
                      <p>{data?.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <Link to="/updateUserProfile">
                <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* booking list */}
      <OrderList bookings={bookings} />
    </>
  );
};

export default UserProfile;
