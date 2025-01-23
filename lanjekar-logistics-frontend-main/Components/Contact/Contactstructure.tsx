import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import Form from './Form';
function Contactstructure() {
  return (
    <section className='w-full relative h-auto flex flex-col-reverse  md:grid gap-10 md:gap-55 md:grid-cols-2 md:py-20 pt-10 bg-white lanjekar-container '>
        <div className='w-full relative h-auto flex flex-col gap-2 md:mb-0 mb-10'>
            <p className='text-p18 font-semibold text-black'>CONTACT US</p>

                <h2 className='text-h2 font-semibold text-black  leading-[1.1] mt-2'>Have Questions? Get in touch!</h2>
                
                <p className='text-black font-normal text-p18 mt-3 line-clamp-3'>Get in touch with Lanjekar Logistics for reliable, efficient, and customized logistics solutions. Whether you have inquiries about our services, need assistance with an ongoing project, or want to discuss how we can help streamline your supply chain, our team is here to assist. Reach out to us through our contact form, phone, or email, and let us help you find the perfect logistics solutions tailored to your business needs</p>

                <ul className='w-full reelative h-auto flex mt-4 flex-col items-start gap-5 '>
                    <li className='w-full relative flex gap-4 text-[20px]'><FaLocationDot className='text-[20px] font-semibold'/>601-B, Virani Business Center, Opp Bharat Gears Limited, Kausa Mumbra, Thane 400612.</li>
                    <Link href={"tel:+1 840 841 25 69"} className='w-full relative gap-4 text-[17px] flex items-center '><FaPhoneAlt className='text-[20px] font-semibold'/>+91 79779 07989</Link>
                    <Link href={"melto:info@email.com"} className='w-full relative flex items-center gap-4 text-[17px]'><MdEmail className='text-[20px] font-semibold '/>
                    info@lanjekarlogistics.com
                    </Link>
                </ul>
        </div>
        <Form />
    </section>

  )
}

export default Contactstructure