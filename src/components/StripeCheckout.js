import React, { Component } from 'react'
import {StripeProvider} from 'react-stripe-elements'
import MyStoreCheckout from './MyStoreCheckout'

class StripeCheckout extends Component {

    render() {

        return (

            <StripeProvider apiKey="pk_test_7CX4sDHR1YaiBDp8o2TGfTlu">
                <MyStoreCheckout />
            </StripeProvider>
        )
    }
}

export default StripeCheckout
