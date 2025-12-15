import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* LEFT SIDE */}
      
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl my-3 sm:text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Your Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zip / Postcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

      </div>

      {/* RIGHT SIDE */}

      <div className='mt-8'>

        <div className='mt-8 min-w-[480px]'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          {/* PAYMENT METHOD SELECTION */}
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          <div className='flex gap-3 flex-col lg:flex-row'>
            <div
              onClick={() => setMethod('esewa')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'esewa' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Esewa</p>
              <img className='mr-4 h-[28px]' src={assets.esewa_logo} alt="Esewa Logo" />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/order')} className='bg-black text-white text-sm px-16 py-3'>PLACE ORDER</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default PlaceOrder