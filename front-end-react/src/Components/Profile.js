import React, {useEffect, useState} from 'react';
import axios from "axios"

const Profile = () => {
    const [data, setData] = useState([])
    const [followers, setFollowers] = useState([])
    

    useEffect(() => {
        axios.get('https://api.github.com/users/erik-sandoval').then(res => {
            setData(res.data)
            axios.get(`${res.data.followers_url}`).then(res => {
                setFollowers(res.data)
            })
        })

    }, [])

    console.log(data)
    console.log(followers)

    return <div>
        <div className="container">
            <img src={data.avatar_url}></img>
            <h3>{data.login}</h3>
        </div>
    </div>
}
 
export default Profile;