import React from 'react';
import { Link } from 'react-router-dom';

const items = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
    return (
        <div className='w-full h-[60px]'>
            <div className='flex lg:w-[1275px] max-w-maxContent items-center justify-between lg:justify-center absolute top-[24px] lg:left-[80px] px-4 lg:px-0'>

                {/* List items */}
                <div className='flex lg:justify-between items-center w-full lg:w-[488px] h-[28px] lg:flex-row flex-col'>
                    {
                        items.map((item, index) => (
                            <ul key={index} className="lg:inline-block my-2 lg:my-0">
                                <Link to={item.link}>
                                    <li className='font-normal'>{item.name}</li>
                                </Link>
                            </ul>
                        ))
                    }
                </div>

                {/* Buttons */}
                <div className='w-full lg:w-[261px] h-[60px] lg:absolute lg:left-[1094px] rounded-[10px] flex lg:justify-between flex-col lg:flex-row mt-4 lg:mt-0'>
                    <Link to="/login">
                        <button className='border-blue-color border w-full lg:w-[112px] h-[60px] px-8 rounded-md font-semibold mb-2 lg:mb-0'>
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className='border-blue-color border w-full lg:w-[112px] h-[60px] px-8 rounded-md font-semibold'>
                            Signup
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
