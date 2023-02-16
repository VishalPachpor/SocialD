import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Navbar from './Navbar'
import TweetBox from "./TweetBox"

import db from "./firebase"


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    return (
        <div className="feed">

            <div className="feed__header">

                <h2>{Navbar}</h2>
            </div>

            <TweetBox />

        </div>
    )
}

export default Feed
