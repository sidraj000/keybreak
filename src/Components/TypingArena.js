import React, { Component } from 'react'

export default class TypingArena extends Component {
    render() {
        return (
            <div>
            
                 <input
            type="text"
            value=""
            onChange={this.handleChange}
               />
            </div>
        )
    }
}
