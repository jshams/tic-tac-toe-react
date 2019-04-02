import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <p> {this.props.date} </p>

            </div>
        )
    }
}

export default Title