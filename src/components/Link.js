import React, { Component } from 'react'

class Link extends Component {

    render() {

        return (

            <li>
                <a href={this.props.to}>{this.props.name}</a>
            </li>

        )
    }

}

export default Link
