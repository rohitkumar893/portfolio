import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className='navbar fixed h-[100px] text-[18px] w-full flex justify-between items-center px-[30px] bg-white z-50'>
        {/* Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-[55px] justify-center items-center w-full'>
          <h1>HOME</h1>
          <h1>ABOUT ME</h1>
          <h1>SKILLS</h1>
          <h1>PROJECTS</h1>
          <h1>CERTIFICATIONS</h1>
        </div>
      </nav>

      {/* Mobile Menu */}
     {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col gap-8 px-6 pt-[120px] text-[22px]'>
            <h1>HOME</h1>
            <h1>ABOUT ME</h1>
            <h1>SKILLS</h1>
            <h1>PROJECTS</h1>
            <h1>CERTIFICATIONS</h1>
        </div>
        )}
    </>
  );
};

export default Navbar;
