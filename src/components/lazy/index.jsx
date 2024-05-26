import React from 'react'
import { FaComment, FaShare, FaThumbsUp } from 'react-icons/fa'

const Lazy = () => {
    return (
        <div className='lazycard rounded-md overflow-hidden'>
            <div className="card-header bg-gray-50 p-3 flex justify-between items-center gap-3">
                <div className="avatar w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex-1">
                    <div className="bg-gray-200 h-4 w-3/4"></div>
                    <div className="bg-gray-200 h-4 w-1/2 mt-2"></div>
                </div>
            </div>
            <div className="card-body p-3">
                <div className="bg-gray-200 h-4 w-full"></div>
                <div className="bg-gray-200 h-4 w-full mt-2"></div>
                <div className="bg-gray-200 h-4 w-full mt-2"></div>
            </div>
            <div className="card-footer bg-gray-50 p-3 grid grid-cols-3 gap-3">
                <div className="likes flex justify-center gap-4 items-center">
                    <FaThumbsUp className='text-gray-500 text-xl' />
                    <div className="bg-gray-200 h-4 w-1/4"></div>
                </div>
                <div className="likes flex justify-center gap-4 items-center">
                    <FaComment className='text-gray-500 text-xl' />
                    <div className="bg-gray-200 h-4 w-1/4"></div>
                </div>
                <div className="likes flex justify-center gap-4 items-center">
                    <FaShare className='text-gray-500 text-xl' />
                    <div className="bg-gray-200 h-4 w-1/4"></div>
                </div>
            </div>
        </div >
    )
}

export default Lazy