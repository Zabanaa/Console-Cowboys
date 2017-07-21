import React, { Component } from 'react'
import Logo from '../components/Logo'
import PreviewJob from '../components/PreviewJob'

class Preview extends Component {

    render() {

        return (

            <main className="post-job">

                <div className="post-job__container">
                    <Logo />
                    <PreviewJob />
                </div>

            </main>
        )
    }
}

export default Preview
