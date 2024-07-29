import React from 'react'
import Link from 'next/link';


function Header() {
  return (
    <header className="sticky top-0 z-130 flex justify-between items-center bg-heroSectionColor text-white h-25 p-10 shadow-md ">
        <div className='text-white font-bold text-'>
            <Link href='/'>
                My | Portfolio
            </Link>
        </div>

        <nav>
            <ul className="flex items-center justify-center list-none">
                <li className="mx-6">
                    <Link href='/about'>
                        About
                    </Link>
                </li>
                <li className="mx-6">
                    <Link href='/about'>
                        Services
                    </Link>
                </li>
                <li className="mx-6">
                    <Link href='/about'>
                        Portfolio
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href='/about'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header