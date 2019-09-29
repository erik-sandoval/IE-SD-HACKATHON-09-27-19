import React, {useEffect, useState} from 'react';
import axios from "axios"
import image from '../Capture.PNG'


const Profile = (props) => {
    const [data, setData] = useState([])
    const [followers, setFollowers] = useState([])
    const [repos, setRepos] = useState([])
    

    useEffect(() => {
        axios.get(`https://api.github.com/users/${props.location.input}`).then(res => {
            setData(res.data)
            axios.get(`${res.data.followers_url}`).then(followers => {
                setFollowers(followers.data)
            }).then(res2 => {
                axios.get(`${res.data.repos_url}`).then(repo => {
                    console.log(repo.data)
                    setRepos(repo.data)
                })
            })
        })

    }, [])

    return <div>
        <div className="container">
            <img src={data.avatar_url}></img>
            <h3>{data.login}</h3>

            <div>Followers</div>
            {followers && <div>{followers.map(follower => (
                <div><h3>{follower.login}</h3>
                    <img src={follower.avatar_url}></img>
                </div>
            ))}</div>}

            {repos && <div>{repos.map((repo, i) => (
                
                <div>{i > 6 ? <div><a href={repo.html_url} target="_blank">{repo.full_name}</a></div> : null}</div>
            ))}</div>}
            <img src={image}></img>
        </div>
    </div>
}
 
export default Profile;