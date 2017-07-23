import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class PublishForm extends Component {

    constructor() {

        super()

        this.state = {
            checked: false,
            contractType: "full-time"
        }

    }

    updateContractType(e) {
        return this.setState({
            contractType: e.target.value
        })
    }

    toggleCheckBox(e) {

        return this.setState({
            checked: e.target.checked
        })

    }

    postJob(event) {
        event.preventDefault()
        let storage = window.localStorage

        for (let key in this.refs) {

            storage.setItem(key, this.refs[key].value)

            if (key === "is_remote") {
               storage.setItem(key, this.refs[key].checked)
            }

            if (key === "contract_type") {
                storage.setItem(key, this.state.contractType)
            }

        }


        // redirect users in reactRouterV4, taken from
        // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
        return this.props.history.push("/preview")
    }

    render() {

        return(

            <form method="POST" onSubmit={this.postJob.bind(this)} className="post-job__form" name="post-job__form" >

                <div className="form-group">

                    <label className="post-job__label" htmlFor="job_title">
                        Job title
                    </label>

                    <input  className="form-element"
                            type="text"
                            ref="job_title"
                            placeholder="e.g: Senior DevOps Engineer"
                    />

                </div>

                <div className="form-group">

                    <p className="post-job__label">Contract type</p>

                    <label className="label-contract-type">
                        <input type="radio" ref="contract_type" value="full-time" checked={this.state.contractType === "full-time"} onChange={this.updateContractType.bind(this)}/>
                        <span className="label-text">Full Time</span>
                    </label>

                    <label className="label-contract-type">

                        <input type="radio" ref="contract_type" value="freelance" checked={this.state.contractType === "freelance"} onChange={this.updateContractType.bind(this)} />
                        <span className="label-text">Freelance</span>
                    </label>

                    <label className="label-contract-type">
                        <input type="radio" ref="contract_type" value="internship" checked={this.state.contractType === "internship"} onChange={this.updateContractType.bind(this)} />
                        <span className="label-text">Internship</span>
                    </label>

                </div>

                <div className="form-group">
                    <label className="post-job__label" htmlFor="company_name">Company name</label>
                    <input className="form-element" type="text" ref="company_name" placeholder="e.g: Google, Facebook" />
                </div>

                <div className="form-group">
                    <label className="post-job__label" htmlFor="location">Location</label>
                    <input className="form-element" type="text" ref="location" placeholder="Chicaco, IL - Paris, France ..." />
                </div>

                <div className="form-group">
                    <label className="post-job__label" htmlFor="listing_url">Link to job listing</label>
                    <input className="form-element" type="text" ref="listing_url" placeholder="eg: https://mycompany.com" />
                </div>

                <label className="post-job__label label-is-remote">
                    <input className="form-element"
                            ref="is_remote"
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.toggleCheckBox.bind(this)}
                    />
                    <span className="label-text">This job is open to remote applications</span>
                </label>

                <div className="post-job__submit">
                    <button>Preview Job Ad</button>
                </div>

            </form>
        )
    }
}

export default withRouter(PublishForm)
