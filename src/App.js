import React, { Component } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import JobList from './components/JobList'
import Footer from './components/Footer'
import api from './utils/api'
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

        api.getAllCharacters()
            .then(response => this.updateJobs(response.data.body.jobs))
            .catch(err => console.error("something happened"))
    }

    render() {

        return (

            <div className="App">
                <Header />
                <Nav/>
                <JobList jobs={this.state.jobs} />
                <Footer />
            </div>

        );

    }

}

export default App;
