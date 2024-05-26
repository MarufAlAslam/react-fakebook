import React from 'react'
import { FaBell, FaUser } from 'react-icons/fa'
import { FaSignalMessenger } from 'react-icons/fa6'
import { RiLayoutGrid2Fill } from 'react-icons/ri'

const Header = () => {
    return (
        <header className='py-3 border-b sticky top-0 bg-white z-20 shadow-sm'>
            <div className="container">
                <div className="flex justify-between items-center gap-2">
                    <a href="./" className='text-2xl font-bold'>
                        <span className='text-blue-500'>
                            Fake
                        </span>
                        <span className='text-black'>
                            book
                        </span>
                    </a>

                    <div className="flex justify-end items-center gap-4">
                        <a href="./" className='text-gray-700 hover:text-gray-900 avatar w-[50px] h-[50px] inline-flex rounded-full text-xl justify-center items-center'>
                            <RiLayoutGrid2Fill />
                        </a>
                        <a href="./" className='text-gray-700 hover:text-gray-900 avatar w-[50px] h-[50px] inline-flex rounded-full text-xl justify-center items-center'>
                            <FaSignalMessenger />
                        </a>
                        <a href="./" className='text-gray-700 hover:text-gray-900 avatar w-[50px] h-[50px] inline-flex rounded-full text-xl justify-center items-center'>
                            <FaBell />
                        </a>
                        <a href="./" className='text-gray-700 hover:text-gray-900 avatar bg-gray-200 w-[50px] h-[50px] inline-flex rounded-full text-xl justify-center items-center'>
                            <FaUser />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header