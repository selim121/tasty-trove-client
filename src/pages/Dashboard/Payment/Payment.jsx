import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';

//TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'-- Please process --'}
                heading={'Payment'}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;