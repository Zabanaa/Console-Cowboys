import React, { Component } from 'react'

class PreviewBox extends Component {

    render() {

        return (

            <section className="job-preview">

                <h2 className="job-preview__listing">Listing Preview</h2>

                <div className="job-preview__job jobs__job">

                    <a href="/" target="_blank" className="job__link">

                        <div className="job__info-group">

                            <span className="job__company_name">
                                {this.props.job.company_name}
                            </span> are seeking a

                            <span className="job__title">
                                {this.props.job.title}
                            </span>

                            <span className="job__location">
                                {this.props.job.location} - {this.props.job.contract_type}
                            </span>

                        </div>

                        <div className="job__date">
                            <span>New</span>
                        </div>

                    </a>

                </div>

            </section>

        )

    }

}

export default PreviewBox

