import React, { Component } from 'react'
import PreviewBox from './PreviewBox'


class PreviewJob extends Component {

    constructor() {

        super()
        let storage = window.localStorage
        this.state = {

            job: {
                title: storage.getItem("job_title"),
                company_name: storage.getItem("company_name"),
                listing_url: storage.getItem("listing_url"),
                is_remote: storage.getItem("is_remote"),
                contract_type: storage.getItem("contract_type"),
                location: storage.getItem("location"),
            }
        }
    }

    render() {

        return (

            <div>

                <PreviewBox job={this.state.job} />

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

                                <form action="/checkout">
                                    Stripe Button
                                </form>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        )
    }
}

export default PreviewJob
