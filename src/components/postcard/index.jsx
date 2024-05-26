import React from 'react'
import Lazy from '../lazy'
import { FaComment, FaShare, FaThumbsUp } from 'react-icons/fa'

const PostCard = ({ post, user }) => {
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })
    return (
        loading ? <Lazy /> : <div className='postcard rounded-md overflow-hidden'>
            <div className="card-header bg-gray-50 p-3 flex justify-between items-center gap-3">
                <div className="avatar w-10 h-10 rounded-full bg-gray-200">
                    <img src={`https://i.pravatar.cc/150?u=${user.id}`} alt={user.name} className='w-full h-full object-cover rounded-full' />
                </div>
                <div className="flex-1">
                    <span className='font-bold'>
                        {user.name}
                    </span>
                    <span className='text-gray-400 block text-xs'>
                        @{user.username}
                    </span>
                </div>
            </div>
            <div className="card-body p-3">
                <p className='font-semibold'>
                    {post.title}
                </p>
                <p className='mt-2 text-sm'>
                    {post.body}
                </p>
            </div>
            <div className="card-footer bg-gray-50 p-3 grid grid-cols-3 gap-3">
                <div className="likes flex justify-center gap-4 items-center">
                    <FaThumbsUp className='text-blue-500 text-xl' />
                    {
                        Math.floor(Math.random() * 100)
                    }
                </div>
                <div className="likes flex justify-center gap-4 items-center">
                    <FaComment className='text-blue-500 text-xl' />
                    {
                        Math.floor(Math.random() * 100)
                    }
                </div>
                <div className="likes flex justify-center gap-4 items-center">
                    <FaShare className='text-blue-500 text-xl' />
                    {
                        Math.floor(Math.random() * 100)
                    }
                </div>
            </div>
        </div >
    )
}

export default PostCard