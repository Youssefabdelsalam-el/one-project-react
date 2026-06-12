import React from 'react'

export default function Section() {
  return (
    <>
        <section>
    <div className="contenar grid grid-cols-2 items-center gap-[120px]">
      <div className="information flex flex-col items-start gap-14">
        <h2 className="text-[52px] leading-none">A UI UX Design Agency , <br /> <span className="text-[#9A0EB0]">evolving</span> The Way People <br /> Interact With Digital World. </h2>
        <button className="button">get in touch </button>
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
