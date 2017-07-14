import React, { Component } from 'react'

class Job extends Component {

    render() {

        return (

            <li className="jobs__job">

                <a className="job__link" href={this.props.details.link}>

                    <div className="job__info-group">

                        <span className="job__company_name"> {this.props.details.company_name} </span>

                        <span className="job__title"> {this.props.details.job_title} </span>

                        <span className="job__location">
                            {this.props.details.job_location} - {this.props.details.contract_type}
                        </span>

                    </div>

                    <div className="job__date">
                        <span>{this.props.details.date_added}</span>
                    </div>

                </a>

            </li>
        )
    }
}

export default Job
