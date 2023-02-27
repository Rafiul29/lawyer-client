import React from 'react'
import { Link } from 'react-router-dom'
const CopyRigt = () => {
  return (
    <div className=' bg-gray-800 text-gray-500 py-5'>
        <div className=" copyright-area flex justify-between  ">
        <div className="copyright">
            <p>Copyriht &copy; {new Date().getFullYear()}, All Right Reserved Rafiul</p>
        </div>
        <div className="footer-menu flex flex-row gap-5">
            <Link>Home</Link>
            <Link>Terms</Link>
            <Link>Privacy</Link>
            <Link>Policy</Link>
            <Link>Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default CopyRigt