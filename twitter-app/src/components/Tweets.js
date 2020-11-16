import * as React from 'react'
import {useSelector} from 'react-redux'

 function Author (props) {
    const usersdata = useSelector((state) => state.users)
    const users = Object.keys(usersdata)
    .map((user) => {
        const {id, name , avatarURL } = usersdata[user]
        return {
            id,
            name,
            avatarURL
        }
    })
    const tweetdata = useSelector((state) => state.tweets)
    const tweets = Object.keys(tweetdata)
    .map((tweet) => {
        const {replyingTo } = tweetdata[tweet]
         return {
            replyingTo,
        }
    })


    return (
        <React.Fragment>
             {users.map((user) =>
                   user.id === props.user ?
                   <li key={user.id} > 
                    <img src= {user.avatarURL} alt="user_image" className="avatar"/> 
                     <h4 className="name"> {user.name} </h4> 
                    </li> : null  
             )} 
        </React.Fragment>
    )
}

export default function Tweets () {
    const tweetdata = useSelector((state) => state.tweets)
    const tweets = Object.keys(tweetdata)
    .map((tweet) => {
        const { id,text,author,likes,replyingTo } = tweetdata[tweet]
        //const { name,avatarURL } = author
         return {
            id,
            text,
            author,
            likes,
            replyingTo,
        }
    })

    return (
        <div>
        <h1> Tweets </h1>
        {tweets.map((tweet) => 
        <div className="tweet-box"> 
        <li key ={tweet.id}> 
            <Author user={tweet.author} replyingTo={tweet.replyingTo}/> 
           {tweet.text}
        </li>
            </div>
        )}
        </div>
    )
}