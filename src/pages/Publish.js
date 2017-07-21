import React, { Component } from 'react'
import Logo from '../components/Logo'
import PublishForm from '../components/PublishForm'

class Publish extends Component {

    render() {

        return (

            <main className="post-job">

                <div className="post-job__container">

                    <Logo />

                    <div className="post-job__main-heading">
                        <h1>Post your Job</h1>
                        <p>Ads are just $79 and run for 30 Days.</p>
                    </div>

                    <PublishForm />

                </div>

            </main >
        )
    }
}

export default Publish

