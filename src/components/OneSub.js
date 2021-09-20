import React, {useState, useEffect} from 'react'
import axios from 'axios'

const OneSub = (props) => {

    const [sub, setSub] = useState([])

    useEffect(()  => {
        // console.log(props.match.params.id)
        axios.get(`/api/getOne/${props.match.params.id}`)    
        .then(res => {
            console.log(props.match.params.id)
            setSub(res.data)
            console.log(res.data)
        })    

    }, [props.match.params.id])

    let subreddit_mapped = sub.map((element, i) => {
        return(
            <div key={i}>
                <h3>{element.post_title}</h3>
                <p>by: {element.post_author}</p>
                <p>{element.post_content}</p>
            </div>
        )
    })

    return(
        <div>
            {subreddit_mapped}
        </div>
    )

}

export default OneSub