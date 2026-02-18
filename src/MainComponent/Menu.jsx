import { useEffect, useRef } from 'react';
import IconShared from '../Shared/IconShared';

function Menu({ onClose, scrollToSection, refs }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed top-16 right-4 w-64 bg-white text-black flex flex-col gap-3 p-4 rounded-lg shadow-lg z-50"
    >
      <a
        href="https://krishraj-resume.tiiny.site"
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className="w-full"
      >
        <div className="w-full bg-black text-white flex justify-center items-center font-semibold rounded-md py-2 px-3 text-sm md:text-base">
          View Resume
        </div>
      </a>

      <div className="border-t border-neutral-200 pt-3 md:hidden">
        <div className="font-mulish font-semibold text-sm text-neutral-700 mb-2">Social</div>
        <div className="flex items-center justify-between px-2">
          <a href="https://www.instagram.com/krishraj031?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noreferrer" aria-label="Instagram">
            <IconShared icon={"skill-icons:instagram"} fontsize={20} />
          </a>
          <a href="https://github.com/KrishRaj1" target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconShared icon={"skill-icons:github-light"} fontsize={20} />
          </a>
          <a href="https://leetcode.com/Krish_Raj1" target="_blank" rel="noreferrer" aria-label="LeetCode">
            <IconShared
              icon={"arcticons:leetcode"}
              fontsize={20}
              style={{ background: "black", borderRadius: "20%", color: "white" }}
            />
          </a>
          <a href="https://x.com/ShivhareRa83065?t=DQX9ridOfEiCNfSDyAjOvw&s=35" target="_blank" rel="noreferrer" aria-label="Twitter/X">
            <IconShared icon={"skill-icons:twitter"} fontsize={20} />
          </a>
          <a href="https://www.linkedin.com/in/krish-raj-shivhare-7a4806251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconShared icon={"devicon:linkedin"} fontsize={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
