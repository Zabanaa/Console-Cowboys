import React, { Component } from 'react'
import Link from './Link'

class Nav extends Component {

    render() {

        return (

            <div className="mainNav">

                <nav className="choose-job-type">

                    <h1 className="choose-job-type__heading">
                        Filter jobs by type
                    </h1>

                    <ul className="choose-job-type__links">
                        <Link to="/" name="All" />
                        <Link to="/full-time" name="Full Time" />
                        <Link to="/freelance" name="Freelance" />
                        <Link to="/internship" name="Internship" />
                        <Link to="/remote" name="Remote" />
                    </ul>

                </nav>

            </div>

        )
    }
}

export default Nav
