/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"
import blacklogoImage from "../public/blacklogoImage.png";

const Header = () => {
  return (
    <header className=''> 

        <nav className='grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>
        <ul className='display:flex text-lg text-align:centre bg-lime-600 justify-evenly font-light items-start gap-3'>

                <div className='text-2xl text-pink-700 font-bold text-left hover:bg-teal-500'> Aliza Jawwad </div>
                <li><b> Home </b></li>
                <li><b> About </b></li>
                <li><b> ContactUs </b></li>
                <li><b> Skills </b></li>

        </ul>
        </nav>
    </header>
  )
}

export default Header
