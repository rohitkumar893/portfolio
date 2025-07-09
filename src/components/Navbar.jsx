import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className='navbar fixed h-[90px] text-[18px] w-full flex justify-between items-center px-[30px] bg-white z-50'>
        {/* Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden  md:flex gap-[100px] justify-center items-center w-full text-[20px]'>
          <a href="#about"><h1>ABOUT</h1></a>
          <a href="#skills"><h1>SKILLS</h1></a>
          <a href="#projects"><h1>PROJECTS</h1></a>
          <a href="#github"><h1>STATS</h1></a>
          <a href="#certifications"><h1>CERTIFICATIONS</h1></a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col gap-8 px-6 pt-[120px] text-[22px] text-white'>
            <a href="#about" onClick={() => setIsOpen(false)}><h1>ABOUT ME</h1></a>
            <a href="#skills" onClick={() => setIsOpen(false)}><h1>SKILLS</h1></a>
            <a href="#projects" onClick={() => setIsOpen(false)}><h1>PROJECTS</h1></a>
            <a href="#github"><h1>STATS</h1></a>
            <a href="#certifications" onClick={() => setIsOpen(false)}><h1>CERTIFICATIONS</h1></a>
          </div>
        )}
    </>
  );
};

export default Navbar;
