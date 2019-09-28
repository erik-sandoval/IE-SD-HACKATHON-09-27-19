import React from 'react'

export default function Search() {
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                type="text"
                name="title"
                style={{ flex: '10', padding: '10px' }}
                placeholder="Add Todo ..."
                onChange={this.onChange}
                value={this.state.title}
            />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: 1}}
                />
            </form>
        )
    }
}
