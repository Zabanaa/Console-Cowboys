import React, { Component } from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

class Privacy extends Component {

    render() {

        return(

        <div className="tos-wrapper">

            <div className="tos-inner">

                <Logo />

                <section className="tosp-containter terms">

                    <h2>Privacy Policy</h2>


                    <p>Your privacy is important to us.</p>

                    <p>
                        It is ConsoleCowboys's policy to respect your privacy regarding any
                        information we may collect while operating our website. Accordingly,
                        we have developed this privacy policy in order for you to understand
                        how we collect, use, communicate, disclose and otherwise make use of
                        personal information. We have outlined our privacy policy below.
                    </p>

                    <ul>

                        <li>
                            We will collect personal information by lawful and fair means
                            and, where appropriate, with the knowledge or consent of the
                            individual concerned.
                        </li>

                        <li>
                            Before or at the time of collecting personal information, we
                            will identify the purposes for which information is being
                            collected.
                        </li>

                        <li>
                            We will collect and use personal information solely for
                            fulfilling those purposes specified by us and for other
                            ancillary purposes, unless we obtain the consent of the
                            individual concerned or as required by law.
                        </li>

                        <li>
                            Personal data should be relevant to the purposes for which it
                            is to be used, and, to the extent necessary for those purposes,
                            should be accurate, complete, and up-to-date.
                        </li>

                        <li>We will protect personal information by using reasonable
                            security safeguards against loss or theft, as well as
                            unauthorized access, disclosure, copying, use or modification.
                        </li>

                        <li>We will make readily available to customers information about
                            our policies and practices relating to the management of
                            personal information.
                        </li>

                        <li>We will only retain personal information for as long as
                            necessary for the fulfilment of those purposes.
                        </li>

                    </ul>

                    <p>
                        We are committed to conducting our business in accordance with these
                        principles in order to ensure that the confidentiality of personal
                        information is protected and maintained. ConsoleCowboys may change
                        this privacy policy from time to time at ConsoleCowboys's
                        sole discretion.
                    </p>


                     </section>

                     <Footer />

                 </div>

            </div>
        )
    }
}

export default Privacy

