import axios from 'axios'
import React, {useState, useEffect} from 'react';

const GithubApi = () => {
const [data, setData] = useState([])

useEffect(() => {
    axios.get('https://api.github.com/users/erik-sandoval').then(res => {
        console.log(res.data)
    })
},[])

return <div>hello</div>
}
 
export default GithubApi;