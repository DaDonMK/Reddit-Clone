import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {

    const [allSubs, setAllSubs] = useState([])

    useEffect(() => {
        axios.get('/api/getAllSubs')
        .then(res => {
            setAllSubs(res.data)
            console.log(res.data)
        })
        .catch
            (err=> console.log(err))
    }, [])

    let submapped = allSubs.map((element, i) => {
        // console.log('element id: ' + element.id)
        return(
            <div key={i}>
                <Link to={`/subreddit/${element.id}`}>
                    <img className='sub-pics' src={element.subpic} alt='subreddit pics'/>
                </Link>
                <div>r/{element.subname}</div>
            </div>
        )
    })
    // console.log(submapped)

    return(
        <div>
            {submapped}
        </div>
    )
}

export default Home