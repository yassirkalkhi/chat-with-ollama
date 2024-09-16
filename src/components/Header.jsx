import "../root.css"
import userIcon from "../assets/user.png"
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion"



function UserDropdown() {
  const [dropSwitch, setDropSwitch] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setDropSwitch(prev => !prev);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropSwitch(false);
      }};
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
 return (<div ref={dropdownRef} className="relative z-1 inline-block text-left">
        <img onClick={toggleDropdown}
        src={userIcon}
        alt="Unavailable"
        className="w-[40px] h-[40px] hover:opacity-50"
      />
        {dropSwitch && (<div className="absolute left-0 mt-2 w-64 h-64">
          <ProfileCard/>
</div>)}</div>);}



const ProfileCard = () => {
  return (
    <div   className="max-w-sm mx-auto p-3 bg-secondary dark:bg-secondaryDark border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-textDark">Yassir </h2>
        <p className="text-gray-600 dark:text-textMutedDark">AI chat boot</p>
    
        <div className="mt-4 flex justify-center space-x-4">
          
        </div>
      </div>
    </div>
  );
};



function Header(){
 
    return (   <div  className="w-[100vw] h-[120px]  flex justify-center items-center ">
            <div  className="w-[94%] h-[55%] flex items-center justify-between p-4 rounded-xl bg-secondary dark:bg-primaryDark dark:border-[2px] border-[1px] transition ease-in-out duration-200 border-gray-200 dark:border-slate-200 shadow-md shadow-gray-200 dark:shadow-none">
            <UserDropdown/>
          

         </div>
                    
     </div>
     )

      
       
}
export default Header