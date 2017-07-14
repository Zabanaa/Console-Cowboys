import React, { Component } from 'react'
import Job from './Job'

class JobList extends Component {

    render() {

        let allJobs;

        if (this.props.jobs) {

            allJobs = this.props.jobs.map( job => {

                return (
                    <Job key={job.job_title} details={job} />
                )

            })

        }

        return (

            <div className="wrapper main-container">

                <ul className="jobs">

                    <h3 className="job-type-heading">All Jobs.</h3>

                    {allJobs}

                </ul>

            </div>

        )
    }

}

export default JobList
