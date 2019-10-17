import React, {useState,useEffect} from 'react'


const Card = ({user}) => {
    const [posts,setposts]=useState([])

    const [post,setpost]=useState(false)

    useEffect(() => {
        fetch( `http://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then(res => res.json())
        .then((data) => {
        setposts(data)
        })

    },[post])

    return (
          <div class="card">
            <div class="card-body" onClick={()=> setpost(!post)}>
              <h5 class="card-title">{user.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
              <p class="card-text">{user.username}</p>
              {post == true && <div>{posts.map((p)=>(<div><p><b>{p.title}</b></p>
              <p>{p.body}</p><hr />
              </div>))}</div>}
            </div>
          </div>
    )
}

export default Card

