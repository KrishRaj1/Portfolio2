import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import TextWithHover from './TextWithHover';
import IconShared from './IconShared';
import Menu from '../MainComponent/Menu';

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false); // Close the menu if clicking outside of it
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <div className="h-1/12 w-full bg-white  flex flex-auto text-black p-0 overflow-auto">
        <div className="flex items-center justify-end w-full h-full m-1 px-4 md:px-10 py-3 gap-3">
          <div className="flex items-center gap-6 font-semibold">
            <button
              type="button"
              className="ml-2 md:ml-0"
              onClick={() => scrollToSection?.(refs?.homeRef)}
            >
              <TextWithHover text={"Home"} />
            </button>
            <button type="button" onClick={() => scrollToSection?.(refs?.projectRef)}>
              <TextWithHover text={"Projects"} />
            </button>
            <button type="button" onClick={() => scrollToSection?.(refs?.skillsRef)}>
              <TextWithHover text={"Skills"} />
            </button>
            <button type="button" onClick={() => scrollToSection?.(refs?.aboutRef)}>
              <TextWithHover text={"About"} />
            </button>
          </div>

          <div className="hidden md:block border-l-2 border-black h-6 mx-2" />

          <div className="hidden md:flex space-x-4 items-center">
            <a href="https://www.instagram.com/krishraj031?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noreferrer">
              <IconShared icon={"skill-icons:instagram"} fontsize={20} />
            </a>
            <a href="https://github.com/KrishRaj1" target="_blank" rel="noreferrer">
              <IconShared icon={"skill-icons:github-light"} fontsize={20} />
            </a>
            <a href="https://leetcode.com/Krish_Raj1" target="_blank" rel="noreferrer">
              <IconShared
                icon={"arcticons:leetcode"}
                fontsize={20}
                style={{ background: "black", borderRadius: "20%", color: "white" }}
              />
            </a>
            <a href="https://x.com/ShivhareRa83065?t=DQX9ridOfEiCNfSDyAjOvw&s=35" target="_blank" rel="noreferrer">
              <IconShared icon={"skill-icons:twitter"} fontsize={20} />
            </a>
            <a href="https://www.linkedin.com/in/krish-raj-shivhare-7a4806251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <IconShared icon={"devicon:linkedin"} fontsize={20} />
            </a>
          </div>

          <div className="hidden md:block border-l-2 border-black h-6 mx-2" />

          <div className="flex items-center justify-center">
            <Icon 
              icon="icon-park-outline:hamburger-button" 
              style={{ color: "black" }} 
              fontSize={25} 
              onClick={handleMenuClick} // Trigger menu toggle
            />
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div ref={menuRef}>
          <Menu
            onClose={() => setMenuOpen(false)}
            scrollToSection={scrollToSection}
            refs={refs}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
