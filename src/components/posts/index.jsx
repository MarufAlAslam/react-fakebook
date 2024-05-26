import React from 'react'
import PostCard from '../postcard'

const Posts = () => {
    const [posts, setPosts] = React.useState([])
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.sort((a, b) => b.id - a.id)))

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='posts py-14'>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-10">
                    {
                        posts.map((post, index) => {
                            return (
                                <>
                                    <PostCard key={index} post={post} user={users.find(user => user.id === post.userId)} />
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts