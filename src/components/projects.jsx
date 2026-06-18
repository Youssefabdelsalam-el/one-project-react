import React from 'react'

export default function projects() {
  return (
    <>

        <div className="projects fade-up flex flex-col items-center justify-center gap-[121px] bg-gradient-to-b from-[#9A0EB0] to-[#7A5AE0] py-[62px] fade-up">
      <div className="project1 fade-up flex flex-col items-center justify-center gap-[30px]">
        <img src="/public/project1.png" alt=""/>
        <p className="text-center text-[40px] font-bold leading-[150%] text-white">responsive design of e-commerce website (uniderma)</p>
      </div>

      <div className="project1 flex flex-col items-center justify-center gap-[30px] fade-up">
        <img src="/public/project2.png" alt=""/>
        <p className="text-center text-[40px] font-bold leading-[150%] text-white">mobile application design (coffee )</p>
      </div>
    </div>
    </>
  )
}
