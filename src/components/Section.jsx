import React from 'react'

export default function Section() {
  return (
    <>
        <section className="flex flex-col gap-40.25 py-45 px-20 " >
    <div className="contenar grid grid-cols-2 items-center gap-30">
      <div className="information flex flex-col items-start gap-14">
        <h2 className="text-[52px] leading-none">A UI UX Design Agency , <br /> <span className="text-[#9A0EB0]">evolving</span> The Way People <br /> Interact With Digital World. </h2>
        <button className="button rounded-2xl bg-[#9A0EB0] px-[52px] py-[17px] text-[20px] text-white transition-all duration-300 cursor-pointer hover:-translate-y-[3px] hover:bg-[#850C98] hover:shadow-[0_8px_20px_rgba(154,14,176,0.3)] active:translate-y-[1px] active:bg-[#700A80] active:shadow-[0_3px_10px_rgba(154,14,176,0.2)]">get in touch </button>
      </div>
      <div className="imgs">
        <img src="/public/ui-ux.png" alt="" className="w-full" />
      </div>
    </div>    
    <div className="line w-full h-2 bg-[#9A0EB0]"></div>
    </section>
    </>
  )
}