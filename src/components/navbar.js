import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <ul>
                <NavLink title='Home' to="/" className={({isActive}) => (isActive ? 'flex bg-[#353535] p-4 w-[100%] font-inter font-bold rounded-lg text-2xl mb-2' : ' flex p-4 w-[100%] font-inter font-medium rounded-lg text-2xl mb-2 hover:bg-[#353535] hover:font-bold' )}>
                    <li className='flex flex-row gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 29 29" fill="none" className=': align-middle'>
                            <path d="M3.5 11L14 2.83334L24.5 11V23.8333C24.5 24.4522 24.2542 25.0457 23.8166 25.4833C23.379 25.9208 22.7855 26.1667 22.1667 26.1667H5.83333C5.21449 26.1667 4.621 25.9208 4.18342 25.4833C3.74583 25.0457 3.5 24.4522 3.5 23.8333V11Z" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.5 26.1667V14.5H17.5V26.1667" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Home
                    </li>
                </NavLink> 
                <NavLink to="/news" className={({isActive}) => (isActive ? 'flex bg-[#353535] p-4 w-[100%] font-inter font-bold rounded-lg text-2xl my-2' : ' flex p-4 w-[100%] font-inter font-medium rounded-lg text-2xl my-2 hover:bg-[#353535] hover:font-bold')}>
                    <li className='flex flex-row gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 2V8H20" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 13H8" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 17H8" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 9H9H8" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        News
                    </li>
                </NavLink> 
                <NavLink to="/tournaments" className={({isActive}) => (isActive ? 'flex bg-[#353535] p-4 w-[100%] font-inter font-bold rounded-lg text-2xl my-2' : ' flex p-4 w-[100%] font-inter font-medium rounded-lg text-2xl my-2 hover:bg-[#353535] hover:font-bold')}>
                    <li className='flex flex-row gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="1 1 22 22" fill="none">
                            <path d="M7 21V19H11V15.9C10.1833 15.7167 9.454 15.3707 8.812 14.862C8.17 14.3533 7.69933 13.716 7.4 12.95C6.15 12.8 5.104 12.2543 4.262 11.313C3.42 10.3717 2.99933 9.26733 3 8V7C3 6.45 3.196 5.979 3.588 5.587C3.98 5.195 4.45067 4.99933 5 5H7V3H17V5H19C19.55 5 20.021 5.196 20.413 5.588C20.805 5.98 21.0007 6.45067 21 7V8C21 9.26667 20.579 10.371 19.737 11.313C18.895 12.255 17.8493 12.8007 16.6 12.95C16.3 13.7167 15.829 14.3543 15.187 14.863C14.545 15.3717 13.816 15.7173 13 15.9V19H17V21H7ZM7 10.8V7H5V8C5 8.63333 5.18333 9.20433 5.55 9.713C5.91667 10.2217 6.4 10.584 7 10.8ZM12 14C12.8333 14 13.5417 13.7083 14.125 13.125C14.7083 12.5417 15 11.8333 15 11V5H9V11C9 11.8333 9.29167 12.5417 9.875 13.125C10.4583 13.7083 11.1667 14 12 14ZM17 10.8C17.6 10.5833 18.0833 10.2207 18.45 9.712C18.8167 9.20333 19 8.63267 19 8V7H17V10.8Z" fill="#F0F5F5"/>
                        </svg>
                        Tournaments
                    </li>
                </NavLink> 
                <NavLink to="/matches" className={({isActive}) => (isActive ? 'flex bg-[#353535] p-4 w-[100%] font-inter font-bold rounded-lg text-2xl my-2' : ' flex p-4 w-[100%] font-inter font-medium rounded-lg text-2xl my-2 hover:bg-[#353535] hover:font-bold')}>
                    <li className='flex flex-row gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="1 1 22 22" fill="none">
                            <path d="M16.5 4.5H20.25V21.75H3.75V4.5H7.5V6H16.5V4.5ZM6.75 12H17.25V10.5H6.75V12ZM6.75 18H17.25V16.5H6.75V18ZM9 4.5V2.25H15V4.5H9Z" fill="#F0F5F5"/>
                        </svg>
                        Matches
                    </li>
                </NavLink> 
                <NavLink to="/players" className={({isActive}) => (isActive ? 'flex bg-[#353535] p-4 w-[100%] font-inter font-bold rounded-lg text-2xl mt-2' : ' flex p-4 w-[100%] font-inter font-medium rounded-lg text-2xl mt-2 hover:bg-[#353535] hover:font-bold')}>
                    <li className='flex flex-row gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#F0F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Players
                    </li>
                </NavLink>  
            </ul>
        </>
    );
}