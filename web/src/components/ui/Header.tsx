import React from 'react'
import Link from 'next/link';


function Header() {
  return (
    <header className="flex justify-between items-center bg-heroSectionColor text-white h-25 p-7 shadow-md ">
        <div className='text-white font-bold text-'>
            <Link href='/'>
                My | Portfolio
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header