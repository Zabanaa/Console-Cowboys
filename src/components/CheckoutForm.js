import React, { Component } from 'react'
import Api from '../utils/api'
import {
    injectStripe,
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement } from 'react-stripe-elements'

import './styles/CheckoutForm.sass'


class CheckoutForm extends Component {

    onSubmit = event => {

        event.preventDefault()

        this.props.stripe.createToken()
            .then( ({token}) => Api.submitJob(token.id) )
    }

    render() {

        return(

            <form className="mycheckoutform" onSubmit={this.onSubmit}>

                <div className="form-group">

                    <label>
                        <span>Card Number</span>
                        <CardNumberElement />
                    </label>

                    <label>
                        <span>Expiry Date</span>
                        <CardExpiryElement />
                    </label>

                    <label>
                        <span>CVC</span>
                        <CardCVCElement />
                    </label>

                </div>

                <div className="form-group submit">

                    <div className="submit__icons">

                        <span className="secure-msg">Securely Processed</span>

                        <ul>
                            <li>
                                <i className="fa fa-cc-mastercard"></i>
                            </li>

                            <li>
                                <i className="fa fa-cc-amex"></i>
                            </li>

                            <li>
                                <i className="fa fa-cc-stripe"></i>
                            </li>

                            <li>
                                <i className="fa fa-cc-visa"></i>
                            </li>

                        </ul>

                    </div>

                    <button className="confirm-payment">Confirm Payment</button>

                </div>

            </form>

        )
    }
}

export default injectStripe(CheckoutForm)
