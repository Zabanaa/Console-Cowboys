import React, { Component } from 'react'
import PreviewBox from './PreviewBox'
import PaymentRecap from './PaymentRecap'


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
                <PaymentRecap />

            </div>
        )
    }
}

export default PreviewJob
