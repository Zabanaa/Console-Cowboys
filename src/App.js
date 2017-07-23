import React, { Component } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import JobList from './components/JobList'
import Footer from './components/Footer'
import Api from './utils/api'
import './App.css'

class App extends Component {

    constructor() {

        super()
        this.state = { jobs: [] }
    }

    updateJobs(jobs) {

        return this.setState({
            jobs: jobs
        })

    }

    componentDidMount() {

        Api.getAllJobs()
            .then(response => this.updateJobs(response.data.body.jobs))
            .catch(err => console.error("something happened"))
    }

    updateFilter(contractType) {

        if (contractType === "all") {

            Api.getAllJobs()
                .then(response => this.updateJobs(response.data.body.jobs))
                .catch(err => console.error("something happened"))

        }

        else if (contractType === "remote") {

            Api.getRemoteJobs()
                .then(response => this.updateJobs(response.data.body.jobs))
                .catch(err => console.error("something happened"))
        }

        else {

            Api.getJobByContractType(contractType)
                .then(response => this.updateJobs(response.data.body.jobs))
                .catch(err => console.error("something happened", err))

        }

    }

    render() {

        return (

            <div className="App">
                <Header />
                <Nav updateFilter={this.updateFilter.bind(this)}/>
                <JobList jobs={this.state.jobs} />
                <Footer />
            </div>

        );

    }

}

export default App;
