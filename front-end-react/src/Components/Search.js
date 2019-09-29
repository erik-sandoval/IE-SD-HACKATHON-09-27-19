import React,{useEffect, useState} from 'react'

export default function Search() {

const [input, setInput] = useState("")

const handleChange = (e) => {
    setInput(e.target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    console.log(input)
}

        return (
            <form className="searchform">
                <input
                className="searchbar"
                type="text"
                name="input"
                placeholder="Enter GitHub User Name ..."
                onChange={(e) => handleChange(e)}
                value={input}
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

