import React, { Component } from 'react'

class PublishForm extends Component {

    render() {

        return(

            <form method="POST" className="post-job__form" name="post-job__form" >

                <div className="form-group">

                    <label className="post-job__label" htmlFor="job_title">
                        Job title
                    </label>

                    <input  className="form-element"
                            type="text"
                            name="job_title"
                            placeholder="e.g: Senior DevOps Engineer"
                    />

                </div>

                <div className="form-group">

                    <p className="post-job__label">Contract type</p>

                    <label className="label-contract-type">
                        <input type="radio" name="contract_type" value="full-time" checked />
                        <span className="label-text">Full Time</span>
                    </label>

                    <label className="label-contract-type">
                        <input type="radio" name="contract_type" value="freelance" />
                        <span className="label-text">Freelance</span>
                    </label>

                    <label className="label-contract-type">
                        <input type="radio" name="contract_type" value="contract" />
                        <span className="label-text">Contract</span>
                    </label>

                </div>

                <div className="form-group">
                    <label className="post-job__label" htmlFor="company_name">Company name</label>
                    <input className="form-element" type="text" name="company_name" placeholder="e.g: Google, Facebook" />
                </div>

                <div className="form-group">
                    <label className="post-job__label" htmlFor="link_to_listing">Link to job listing</label>
                    <input className="form-element" type="text" name="link_to_listing" placeholder="eg: https://mycompany.com" />
                </div>

                <label className="post-job__label label-is-remote">
                    <input className="form-element" name="is_remote" type="checkbox" />
                    <span className="label-text">This job is open to remote applications</span>
                </label>

                <div className="post-job__submit">
                    <button>Preview Job Ad</button>
                </div>

            </form>
        )
    }
}

export default PublishForm
