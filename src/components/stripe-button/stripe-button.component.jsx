import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JkW2wCDI7kS78Nuidv5ISIlcPQHONDF4PiFFnRE7ChY6PYWDMJ8hsWwviGF3qzYhEajFcjEwpnzxapKNAefmIRx00X4e0BsD1';

    const onToken = token => alert('Payment successful');

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;