import React from 'react'

export default function aboute() {
  return (
    <>
        <div className="aboute fade-up">
      <div className="text flex flex-col gap-6">
        <h1 className="text-[48px]  leading-none text-[#9A0EB0]">About Us</h1>
        <h4  className="text-[32px] leading-[150%]">Grow Your Business <br /> With Our Agency </h4>
        <p className="text-[28px] font-normal leading-[150%]">Our team live and breath UI UX, tackling design challenges with excitement. Our mission is to improve lives and businesses through our design decisions. With versatile experience across startups and industry giants, we offer outstanding services in multiple fields. When you partner up with us, you’ll get a superbrain team of  UI UX experts, dedicated to knowledge sharing and creating a better world.</p>
      </div>
      <div className="about-img flex justify-center">
        <img src="/public/about-img.png" alt="" />
      </div>
    </div>
    </>
  )
}
