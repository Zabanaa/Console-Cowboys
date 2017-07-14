import React, { Component } from 'react'
import Link from './Link'

class Footer extends Component {

    render() {

        return (

            <footer>

                <div className="footer__credits">

                    <p className="credits__shoutout">
                        Made in PNM by <a href="https://zabanaa.github.io"> Zabana </a>
                    </p>

                    <ul className="credits__legal">
                        <Link to="mailto:karim.cheurfi@gmail.com" name="Contact"/>
                        <Link to="/terms" name="Terms"/>
                        <Link to="/privacy" name="Privacy"/>
                    </ul>

                </div>

            </footer>
        )
    }
}

export default Footer

