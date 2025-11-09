import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center  pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px] ' alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Forever was founded on a simple premise: that clothing should never force a choice between comfort and style. We understand the modern wardrobe needs versatility, quality that lasts, and a touch of effortless sophistication. Driven by this philosophy, we meticulously select fabrics and design pieces that are both on-trend and timeless, ensuring they integrate seamlessly into your life. Our commitment extends beyond the garment itself—we aim to build a community where every customer feels seen, valued, and excited to get dressed in the morning.</p>
          <p>We are more than just an online store; we are your trusted source for an elevated shopping experience. This commitment is woven into every part of our operation, from our rigorous quality assurance process to our exceptional customer service. We strive to make your journey with us as convenient and rewarding as possible, offering clear sizing, easy returns, and a team ready to assist with any need. Thank you for choosing to wear our story—we promise to continue delivering the style, quality, and service you deserve.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to empower you to express your authentic self through high-quality, comfortable, and stylish clothing. We believe fashion should be an accessible and joyful experience, and we are dedicated to curating a collection that allows you to feel confident, inspired, and effortlessly chic every single day.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality is the fabric of our brand. From the initial design to the final stitch, every garment undergoes rigorous quality checks to ensure it meets our high standards for durability, fit, and feel. We are committed to providing you with clothing that not only looks great but is made to last.</p>
        </div>
        <div className='border px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We believe great style shouldn't be complicated. Our website is designed for effortless browsing, easy size selection, and a fast, secure checkout process. With clear product descriptions, simple returns, and tracked shipping, we make shopping for your new favorite outfit as convenient and enjoyable as possible.</p>
        </div>
        <div className='border px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our relationship with you doesn't end after you click 'buy.' Our dedicated customer service team is here to help you every step of the way—from answering questions about sizing and styling to assisting with exchanges. We strive to provide timely, helpful, and personal support because your happiness is our top priority.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About