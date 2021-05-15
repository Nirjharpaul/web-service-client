import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm'


const stripePromise = loadStripe('pk_test_51IrP7OCVScdMt8vwrrToD6j1b0D0VazfXY3jRTdCY044nMNENRwSypze01iLzXKYgNpkwQJdXsT28tL8lkKYTd9A00vACTR7YY');

const CheckoutForm = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm />
        </Elements>
    );
};

export default CheckoutForm;