import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {

    const { products, navigate } = useContext(ShopContext);
    const [latestProducts, setLatestproducts] = useState([]);

    useEffect(() => {
        setLatestproducts(products.slice(0,10));
    }, []);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
            <p className='w-3/4 text-xs m-auto sm:text-sm md:text-base text-gray-600'>"Fresh styles for every day, every mood, and every you."</p>
        </div>

        {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index) => {
                    return <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                })
            }
        </div>
        <div className='w-full mt-8 flex justify-center'>
            <button onClick={() => navigate('/collection')} className='bg-black text-white px-8 py-4 text-sm'>Shop Now</button>
        </div>
    </div>
  )
}

export default LatestCollection