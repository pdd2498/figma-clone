
import { memo , useEffect, useState } from "react";
import ActiveUsers from "../users/AvatarUsar";



const Navbar = ({setWork , work}) => {

  console.log(work);

  useEffect(()=>{

  },[work])

  return (
    <nav className="flex select-none items-center justify-between gap-4 px-5 text-white bg-slate-950">
              <img className="bg-slate-950" src="https://gloriathemes.com/wp-content/uploads/2023/01/figma.jpg" alt="FigPro Logo" width={150} height={150} />
              <ul className="flex gap-1 border">


                <li onClick={() =>{
                  console.log(work);
                  setWork('select')
                }} className="w-20 h-20 flex items-center justify-center  hover:bg-lime-500">
                <svg width="30" height="31" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1874_727)">
        <path d="M6.54294 2.46138L18.7048 14.158L12.0014 13.7066L8.20924 19.2526L6.54294 2.46138Z" stroke="#C4D3ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1874_727">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
                </li>


                <li onClick={() => setWork('rectangle')} className="w-20 h-20 flex items-center justify-center  hover:bg-lime-500">
                <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 3H4.16667C3.24619 3 2.5 3.74619 2.5 4.66667V16.3333C2.5 17.2538 3.24619 18 4.16667 18H15.8333C16.7538 18 17.5 17.2538 17.5 16.3333V4.66667C17.5 3.74619 16.7538 3 15.8333 3Z" stroke="#C4D3ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                </li>


                <li onClick={() => setWork('text')}  className="w-20 h-20 flex items-center justify-center  hover:bg-lime-500">
                  <svg width="30" height="31" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="tool">
        <path id="Vector" d="M3.33325 5.83337V3.33337H16.6666V5.83337" stroke="#C4D3ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M7.5 16.6666H12.5" stroke="#C4D3ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M10 3.33337V16.6667" stroke="#C4D3ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
                </li>

                <li onClick={()=>setWork('circle')} className="w-20 h-20 flex items-center justify-center  hover:bg-lime-500">
                <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0001 18.8333C14.6025 18.8333 18.3334 15.1023 18.3334 10.5C18.3334 5.89759 14.6025 2.16663 10.0001 2.16663C5.39771 2.16663 1.66675 5.89759 1.66675 10.5C1.66675 15.1023 5.39771 18.8333 10.0001 18.8333Z" stroke="#C4D3ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
                </li>


                <li onClick={() =>setWork('triangle')} className="w-20 h-20 flex items-center justify-center  hover:bg-lime-500">
                <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5749 3.71672L1.51656 15.5C1.37104 15.7521 1.29403 16.0378 1.29322 16.3288C1.2924 16.6198 1.3678 16.906 1.51192 17.1588C1.65603 17.4116 1.86383 17.6223 2.11465 17.7699C2.36547 17.9175 2.65056 17.9968 2.94156 18H17.0582C17.3492 17.9968 17.6343 17.9175 17.8851 17.7699C18.136 17.6223 18.3438 17.4116 18.4879 17.1588C18.632 16.906 18.7074 16.6198 18.7066 16.3288C18.7058 16.0378 18.6288 15.7521 18.4832 15.5L11.4249 3.71672C11.2763 3.4718 11.0672 3.26931 10.8176 3.12879C10.568 2.98826 10.2863 2.91443 9.9999 2.91443C9.71345 2.91443 9.43184 2.98826 9.18223 3.12879C8.93263 3.26931 8.72345 3.4718 8.5749 3.71672V3.71672Z" stroke="#C4D3ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
                </li>
                <li onClick={() =>setWork('line')} className="w-20 h-20 flex items-center justify-center  hover:bg-lime-500">
                <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4.69559" y1="18.1189" x2="14.3855" y2="2.94968" stroke="#C4D3ED" stroke-width="2" stroke-linecap="round"/>
        </svg>
                </li>
              </ul>
       <ActiveUsers />
    </nav>
  );
};

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement);
