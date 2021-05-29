import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { userLogIn } from '../../App';

const CardForm = ({ service }) => {

    const [loggedInUser, setLoggedInUser] = useContext(userLogIn);
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {

        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);

        }

        const orderData = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            title: service.title,
            description: service.description,
            imageUrl: service.imageUrl,
            price: service.price,
            button: "Pending"

        }

        fetch(`http://localhost:5000/addOrder`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderData)
        });

        console.log(service);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement className="form-control" />
                <button className="mt-3 btn button-style" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }

            {
                paymentSuccess && <p style={{ color: 'green' }}>Your Payment was Successful</p>
            }
        </div>
    );
};

export default CardForm;