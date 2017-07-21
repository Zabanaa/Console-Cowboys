import React, { Component } from 'react'

class Nav extends Component {

    filterByType(event) {
        event.preventDefault()
        return this.props.updateFilter(event.target.dataset.contractType)
    }

    render() {

        return (

            <div className="mainNav">

                <nav className="choose-job-type">

                    <h1 className="choose-job-type__heading">
                        Filter jobs by type
                    </h1>

                    <ul className="choose-job-type__links">

                        <li>
                           <a onClick={this.filterByType.bind(this)} href="/" data-contract-type="all">All</a>
                        </li>

                        <li>
                           <a onClick={this.filterByType.bind(this)} href="/full-time" data-contract-type="full-time">Full Time</a>
                        </li>

                        <li>
                           <a onClick={this.filterByType.bind(this)} href="/freelance" data-contract-type="freelance">Freelance</a>
                        </li>

                        <li>
                           <a onClick={this.filterByType.bind(this)} href="/intership" data-contract-type="internship">Internship</a>
                        </li>

                        <li>
                           <a onClick={this.filterByType.bind(this)} href="/remote" data-contract-type="remote">Remote</a>
                        </li>

                    </ul>

                </nav>

            </div>

        )
    }
}

export default Nav
