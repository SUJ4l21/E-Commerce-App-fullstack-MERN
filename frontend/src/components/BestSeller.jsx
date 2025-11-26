import React, { useEffect, useState, useContext } from 'react'
import { Scontext } from '../context/Scontext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(Scontext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestproduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestproduct.slice(0, 5));
    }, [products])


    return (
    
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium perferendis nostrum maxime similique minus fugiat dolore, odio unde iure impedit corrupti magni atque autem quod earum fugit provident voluptatum?</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller