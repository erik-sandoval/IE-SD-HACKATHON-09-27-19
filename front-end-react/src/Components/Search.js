import React,{useEffect, useState} from 'react'

export default function Search() {

const [title, setTitle] = useState("")

const handleChange = (e) => {
    setTitle(e.target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    console.log(title)
}

        return (
            <form className="searchform">
                <input
                className="searchbar"
                type="text"
                name="title"
                placeholder="Enter GitHub User Name ..."
                onChange={(e) => handleChange(e)}
                value={title}
            />
                <input
                    onClick={(e) => onSubmit(e)}
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        )
    }

