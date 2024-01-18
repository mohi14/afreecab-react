import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { STRIPE_PK } from "../../config/config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../Subscription/StripeCheckout";
import PaypalButton from "../Subscription/PaypalButton";
import { FaStripeS } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import apiInstance from "../../utils/instance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SubscriptionModal = ({
  isOpen,
  closeModal,
  totalCost,
  storedFormData,
}) => {
  const [paymentOption, setPaymentOption] = useState("stripe");
  const stripePromise = loadStripe(STRIPE_PK);

  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const addBooking = async () => {
    const data = {
      fromAddress: storedFormData?.fromAddress,
      toAddress: storedFormData?.toAddress,
      bookingDate: storedFormData?.date,
      totalPassenger: Number(storedFormData?.totalPassenger),
      totalLuggage: Number(storedFormData?.totalLuggage),
      amount: Number(totalCost),
    };
    try {
      const response = await apiInstance.post("/booking/addBooking", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        // form.reset();
        // setLoading(false);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User profile updated successfully",
        });
        closeModal();
        navigate("/userProfile");

        // const res = await apiInstance.patch(
        //   `/booking/pamentStatus/${response.data.data?._id}`,
        //   data,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );

        // if (res.data.success) {
        // }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ textAlign: "end" }}>
              <RxCross1 style={{ cursor: "pointer" }} onClick={closeModal} />
            </div>
            <h2>Make Payment</h2>
            <div style={{ display: "flex", gap: "10px" }} className="my-3">
              <p
                onClick={() => setPaymentOption("stripe")}
                style={{
                  border: `1px solid ${
                    paymentOption === "stripe" ? "#b25c41" : "transparent"
                  }`,
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                <FaStripeS /> Stripe
              </p>
              <p
                onClick={() => setPaymentOption("paypal")}
                style={{
                  border: `1px solid ${
                    paymentOption === "paypal" ? "#b25c41" : "transparent"
                  }`,
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                <FaPaypal /> Paypal
              </p>
            </div>

            {paymentOption === "stripe" && (
              <Elements stripe={stripePromise}>
                {/* <NewPayment
                  setModalShow={setModalShow}
                  handleAskForHardCopy={handleAskForHardCopy}
                /> */}
                <StripeCheckout
                  totalCost={totalCost}
                  closeModal={closeModal}
                  addBooking={addBooking}
                />
              </Elements>
            )}

            {paymentOption === "paypal" && (
              <PaypalButton
                totalCost={totalCost}
                closeModal={closeModal}
                addBooking={addBooking}
              />
            )}

            {/* <p>This is a simple modal.</p>
            <button onClick={closeModal}>Close Modal</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionModal;
