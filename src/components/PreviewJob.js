import React, { Component } from 'react'

class PreviewJob extends Component {

    render() {

        return (

            <div>

                <section className="job-preview">

                    <h2 className="job-preview__listing">Listing Preview</h2>

                    <div className="job-preview__job jobs__job">

                        <a href="/" target="_blank" className="job__link">

                            <div className="job__info-group">

                                <span className="job__company_name">Apple</span> are seeking a
                                <span className="job__title"> Senior Dev</span>
                                <span className="job__location">Cupertino, CA - Freelance </span>

                            </div>

                            <div className="job__date">
                                <span>New</span>
                            </div>

                        </a>

                    </div>

                </section>

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
