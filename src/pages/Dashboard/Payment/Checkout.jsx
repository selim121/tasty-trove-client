import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error.message);
            console.log('error', error);
        }
        else {
            setCardError('');
            console.log('Payment method', paymentMethod);
        }
    }

    return (
        <>
            <form className="mx-12 p-8 bg-[#faf6ff]" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                    <button className='btn btn-outline border-0 bg-[#e1cff6] border-b-4 btn-primary mt-5' type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            <div className="text-center mt-5">
                {
                    cardError && <p className='text-red-600'>{cardError}</p>
                }
            </div>
        </>
    );
};

export default Checkout;