import React, { Component } from 'react'

const dummy_prop = {
    title: "For test title",
    content: "For test content"
}



export default class PostView extends Component {
    render() {
        const {title, content} = this.props
        return (
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}
