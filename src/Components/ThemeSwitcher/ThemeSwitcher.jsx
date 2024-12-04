import React from 'react';
import './ThemeSwitcher.css'
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  return (
    <div className='theme-section'>
        <div className="dark-mode">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z" opacity="0.2"></path><path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path></svg>
        <span>dark</span>
        </div>
        <div className="light-mode">
        <MdOutlineLightMode />
        <span>light</span>
        </div>
        <div className="system-mode">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path></svg>
        <span>system</span>
        </div>
      
    </div>
  )
}

export default ThemeSwitcher
