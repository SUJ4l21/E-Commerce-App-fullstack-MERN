import React, { useEffect,useContext, useState } from 'react'
import { Scontext } from '../context/Scontext';
import Title from './Title';
import ProductItem from './ProductItem';



const LatestCollections = () => {

    const { products } = useContext(Scontext);
    const [latestProducts, setLatestProducts] = useState([])
    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products])

    return (
        <div className='m-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit ullam temporibus enim officiis rerum voluptatum. Ratione dolores dicta inventore necessitatibus, harum adipisci magni veritatis sequi. Nulla deserunt libero doloremque?</p>
            </div>
            {/* rendering products */}

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollections