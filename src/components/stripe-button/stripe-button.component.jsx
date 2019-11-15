import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_JpVN3b2ZewV1AF1HRXTm8chO00PHApqEzs'

    const token = token =>{
        console.log(token);
        
    }

    return(
        <StripeCheckout
        label="Pay now"
        name='CRWN Clothing ltd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={ `Your total is $${price}`}
        amount= {priceForStripe}
        panelLabel='Pay Now'
        token={token}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;