import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';


const Navbar = () => {

    const navItems = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/contact'>Contact</Link></li>


        </>
    );

    return (
        <>


            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <a className="cursor-pointer">Book-app</a>
                </div>

                <div className="navbar-end">

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}

                        </ul>
                    </div>
                    <div className="hidden  md:block mx-2">

                    <label className="input rounded-none  input-bordered  flex items-center gap-12 border-blue-500">
                        <input type="text" className="grow text-sm" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>

                    </div>
                   
                    <div >
                        <a className="btn  rounded-none"  onClick={() => document.getElementById('my_modal_3').showModal()}>Log in</a>
                    </div>
                    <Login/>


                </div>
               
            </div>
            



        </>
    )
}

export default Navbar
