
export default function Header() {
  return (
    <div>
         <header className="flex items-center justify-between bg-[#9A0EB033]">
      <h1 className="text-[48px] font-normal leading-[100%] text-[#9A0EB0]">wonder</h1>
      <nav className="flex items-center justify-between gap-[30px]">
        <a href="#" className="text-[32px] font-light leading-[100%] text-black no-underline hover:text-[#700A80]">Get in touch</a>
        <a href="#" className="text-[32px] font-light leading-[100%] text-black no-underline hover:text-[#700A80]">Our work</a>
        <a href="#" className="text-[32px] font-light leading-[100%] text-black no-underline hover:text-[#700A80]">Services</a>
      </nav>
    </header>
    </div>
  )
}
