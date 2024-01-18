import React, { useEffect, useState } from "react";
import apiInstance from "../utils/instance";
import { Navigate, useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    apiInstance
      .get("/user/myInfo", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setData(response.data);
        if (response.data.role === "admin") {
          navigate("/");
        } else {
          setChecked(false);
        }
      });

    setChecked(true);
  }, [checked]);
  return checked ? children : "";
};

export default AdminRoute;
