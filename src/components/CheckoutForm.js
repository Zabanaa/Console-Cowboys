import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Api from '../utils/api'
import {
    injectStripe,
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement } from 'react-stripe-elements'

import './styles/CheckoutForm.sass'

class CheckoutForm extends Component {

    constructor() {

        super()

        this.state = {
            jobIsSubmitted: false
        }
    }

    onSubmit = event => {

        event.preventDefault()

        this.props.stripe.createToken()
            .then( ({token}) =>
                Api.submitJob(token.id)
            )
            .then( response => {

                if (response.status === 201) {

                    window.localStorage.clear()
                    this.setState({jobIsSubmitted: true})
                    console.log("request went through")
                }
            })
    }

    render() {

        let thankYouMessage

        if (this.state.jobIsSubmitted) {

            thankYouMessage = "Thanks for submitting your job !"
        }

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

                <span className="thank-you-msg">{thankYouMessage}</span>

            </form>

        )
    }
}

export default withRouter(injectStripe(CheckoutForm))
