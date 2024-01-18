import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import { PAYPAL_CLIENT_ID } from "../../config/config";

const PaypalButton = ({ totalCost, closeModal, addBooking }) => {
  const amount = totalCost;

  return (
    <PayPalScriptProvider
      // deferLoading={true}
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        components: "buttons",
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(async function (details) {
            // Handle successful payment

            if (details?.status === "COMPLETED") {
              //   handleCompletePayment();
              await addBooking();
              console.log("Completed");
            }
            console.log(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
