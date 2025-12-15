import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-24' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>At Lyn and Lox, we blend effortless style with everyday comfort.</p>
                <p className='w-full md:w-2/3 text-gray-600'>Our timeless pieces are designed for real life and real people.</p>
                <p className='w-full md:w-2/3 text-gray-600'>Fashion that fits—made to move with you.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+977 9812345678</li>
                    <li>lynandlox@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ lyn&lox.com All-right Reserved</p>
        </div>

    </div>
  )
}

export default Footer