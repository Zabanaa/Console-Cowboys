import React, { Component } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import JobList from './components/JobList'
import Footer from './components/Footer'
import './App.css'

class App extends Component {

    constructor() {

        super()

        this.state = {

            jobs: [

                {
                    link: "/",
                    company_name: "Apple",
                    job_title: "Senior Front End Engineer",
                    job_location: "Cupertino, CA",
                    contract_type: "Full Time",
                    date_added: "1d"
                },

                {
                    link: "/",
                    company_name: "Microsoft",
                    job_title: "Senior Systems Engineer",
                    job_location: "Austin, TX",
                    contract_type: "Freelance",
                    date_added: "8d"
                },

                {
                    link: "/",
                    company_name: "Facebook",
                    job_title: "Junior Data Scientist",
                    job_location: "Palo Alto, CA",
                    contract_type: "Internship",
                    date_added: "11d"
                },

                {
                    link: "/",
                    company_name: "Digital Ocean",
                    job_title: "Kubernetes Expert",
                    job_location: "New York City, NY",
                    contract_type: "Full Time",
                    date_added: "19d"
                },

            ]

        }
    }


    render() {

        return (

            <div className="App">
                <Header />
                <Nav />
                <JobList jobs={this.state.jobs} />
                <Footer />
            </div>

        );

    }

}

export default App;
