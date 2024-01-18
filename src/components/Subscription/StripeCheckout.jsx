import React, { useState } from "react";
import Stripe from "stripe";
import { STRIPE_SK } from "../../config/config";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
    },
    invalid: {
      color: "#ff3860",
    },
  },
};

const StripeCheckout = ({ totalCost, closeModal, addBooking }) => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    setIsSubscribing(true);

    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      setIsSubscribing(false);
      return;
    }

    const clientSecret = await createPaymentIntent(
      Number(totalCost) * 100,
      "usd"
    );

    const cardElement = elements.getElement(CardNumberElement);

    console.log(clientSecret, "client secret");

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          type: "card",
          card: cardElement,
          billing_details: {
            name: cardHolderName,
          },
        },
      }
    );

    console.log(paymentIntent, "ppppp");
    if (error) {
      console.error("error", error);
      alert(error?.message);
      setIsSubscribing(false);
    } else if (paymentIntent.status === "succeeded") {
      await addBooking();
      //   closeModal();
      setIsSubscribing(false);
    }
  };
  return (
    <>
      <div>
        <form action="" className="subscription  mt_30cp">
          <div
            action=""
            className="d-flex justify-content-start align-items-end flex-wrap flex-md-nowrap gap_5 mb-3"
          >
            <div className="payment_parent" style={{ cursor: "pointer" }}>
              <label
                htmlFor="creditCard"
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <div className="payment_div">
                  <h4>Credit Card</h4>

                  <small>Pay with credit card via Stripe</small>
                </div>
              </label>
            </div>
          </div>

          <>
            <div className="d-flex w-100 " style={{ gap: "30px" }}>
              <div className="w-100">
                <p className="text-start fs-6 mb-1">Card Number</p>
                <div className="card_input">
                  <CardNumberElement
                    options={{
                      ...CARD_OPTIONS,
                      placeholder: "Enter card number",
                    }}
                  />
                </div>
              </div>
              <div className="w-100">
                <p className="text-start fs-6 mb-1">Full Name</p>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter Card Holder Name"
                  className="w-100 p-2 "
                  onChange={(e) => setCardHolderName(e.target.value)}
                  style={{ borderRadius: "8px", border: "1px solid #b4a9a9" }}
                />
              </div>
            </div>
            <div className="d-flex w-100  mt-4" style={{ gap: "30px" }}>
              <div className="w-100">
                <p className="text-start fs-6 mb-1">Expiration Date (MMYY)</p>
                <div className="card_input">
                  <CardExpiryElement options={CARD_OPTIONS} />
                </div>
              </div>
              <div className="w-100">
                <p className="text-start fs-6 mb-1">CVV/ CVC</p>

                <div className="card_input">
                  <CardCvcElement options={CARD_OPTIONS} />
                </div>
              </div>
            </div>

            <div className="create_profile_button mt-4">
              {isSubscribing ? (
                <button disabled type="button">
                  Paying...
                </button>
              ) : (
                <button onClick={handlePayment} type="button">
                  Pay ${totalCost}
                </button>
              )}
            </div>
          </>
        </form>
      </div>
    </>
  );
};

export default StripeCheckout;

const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe(STRIPE_SK);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Error on createPayment intent", error);
    throw new Error("Failed to create PaymentIntent");
  }
};
