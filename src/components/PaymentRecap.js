import React, { Component } from 'react'
import StripeCheckout from './StripeCheckout'

class PaymentRecap extends Component {

    render() {

        return (

            <section className="job-payment">

                <h2 className="job-preview__listing">
                    Payment - Checkout
                </h2>

                <div className="job-payment__form">

                    <div className="form-group payment-due">

                        <p className="price-info__item">
                            <span className="item">Job Listing</span>
                            <span className="price">$79</span>
                        </p>

                        <p className="price-info__total">
                            <span className="item">Total</span>
                            <span className="price">$79</span>
                        </p>

                    </div>

                    <StripeCheckout />

                </div>

            </section>

        )
    }
}

export default PaymentRecap
