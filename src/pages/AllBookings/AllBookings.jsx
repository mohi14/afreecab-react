import React, { useEffect, useState } from "react";
import "./AllBookings.css";
import apiInstance from "../../utils/instance";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
const AllBookings = () => {
  const { pathname } = useLocation();
  const [allBookings, setAllBookings] = useState([]);
  const getAllBookings = async () => {
    const authToken = localStorage.getItem("token");
    const res = await apiInstance.get("/booking", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    setAllBookings(res?.data);
  };

  const handleStatusChange = async (e, value) => {
    const authToken = localStorage.getItem("token");
    if (e.target.value === "true") {
      const res = await apiInstance.patch(
        `/booking/pamentStatus/${value?._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Payment status updated successfully!",
        });
        getAllBookings();
      }
    }
  };

  useEffect(() => {
    getAllBookings();
  }, [pathname]);
  return (
    <>
      <div
        className="allBookings container table-responsive "
        style={{ marginTop: "200px" }}
      >
        <h4
          style={{
            color: "black",
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          All Booking List{" "}
        </h4>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
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
            {allBookings &&
              allBookings?.length > 0 &&
              allBookings.map((item, idx) => (
                <tr key={idx}>
                  <td className=""> Volkswagen - Golf TSI 2017</td>
                  <td className="">
                    {item?.user?.firstName} {item?.user?.lastName}
                  </td>
                  <td className="">
                    <div>
                      <p className="text-dark" style={{ fontSize: "16px" }}>
                        {item?.bookingDate}
                      </p>
                      <p className="text-dark" style={{ fontSize: "16px" }}>
                        {item?.fromAddress}
                      </p>
                    </div>
                  </td>
                  <td className="">
                    <div>
                      <p className="text-dark" style={{ fontSize: "16px" }}>
                        {item?.bookingDate}
                      </p>
                      <p className="text-dark" style={{ fontSize: "16px" }}>
                        {item?.toAddress}
                      </p>
                    </div>
                  </td>
                  <td>
                    {item?.isPaid ? (
                      "Paid"
                    ) : (
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => handleStatusChange(e, item)}
                      >
                        <option selected>select</option>
                        <option value="true">Accept</option>
                        <option value="false">Canceled</option>
                        <option value="false">Active</option>
                      </select>
                    )}
                  </td>
                  <td>${item?.amount.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBookings;
