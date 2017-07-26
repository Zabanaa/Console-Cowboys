import React, { Component } from 'react'
import { Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class MyStoreCheckout extends Component {

    render() {

        return (
            <Elements>
                <CheckoutForm />
            </Elements>
        )
    }
}

export default MyStoreCheckout