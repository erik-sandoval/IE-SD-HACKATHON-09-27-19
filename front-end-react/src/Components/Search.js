import React,{useEffect, useState} from 'react'

export default function Search(props) {
        return (
            <form className="searchform">
                <input
                className="searchbar"
                type="text"
                name="input"
                placeholder="Enter GitHub User Name ..."
                onChange={props.handleChange}
            />
                <input
                    onClick={(e) => props.onSubmit(e)}
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        )
    }

