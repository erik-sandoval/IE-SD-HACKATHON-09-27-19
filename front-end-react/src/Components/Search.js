import React,{useEffect, useState} from 'react'

export default function Search() {

const [title] = useState("")

        return (
            <form className="searchform">
                <input
                className="searchbar"
                type="text"
                name="title"
                placeholder="Enter GitHub User Name ..."
                value={title}
            />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        )
    }

