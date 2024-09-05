import React from 'react'
import { Link } from 'react-router-dom'

const items = [
    {name: "Home", link:"/"},
    {name: "About Us", link:"/about"},
    {name: "Pricing", link:"/pricing"},
    {name: "Contact Us", link:"/contact"},
]
const Navbar = () => {
  return (
    <div className='w-full h-[60px]'>
      <div className='flex w-[1275px] max-w-maxContent items-center justify-center absolute top-[24px] left-[80px] '>

        {/* List items  */}
        <div className='flex justify-between items-center w-[488px] h-[28px]'> 
            {
                items.map((item,index)=>(
                    <ul key={index}>
                        <Link to={item.link}>
                        <li>{item.name}</li>
                        </Link>
                      
                    </ul>
                ))
            }
        </div>
        
        {/* Buttons  */}
        <div className='w-[261px] h-[60px] absolute left-[1094px] rounded-[10px] flex justify-between ' >
            <Link to="/login">
                <button className='border-blue-color border w-[112px] h-[60px] left-[1094px] px-8 rounded-md font-semibold'>
                    Login
                </button>
            </Link>
            <Link to="/signup">
                <button className='border-blue-color border w-[112px] h-[60px] left-[1094px] px-8 rounded-md font-semibold'>
                    Signup
                </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
