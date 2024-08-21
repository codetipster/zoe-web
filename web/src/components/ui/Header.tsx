import React from 'react'
import Link from 'next/link';


function Header() {
  return (
    <header className="sticky top-0 z-130 flex justify-between items-center bg-heroSectionColor text-white h-25 p-10 shadow-md ">
        <div className='text-white font-bold text-'>
            <Link href='#hero'>
                My | Portfolio
            </Link>
        </div>

        <nav>
            <ul className="flex items-center justify-center list-none">
                <li className="mx-6">
                <Link href='#about' legacyBehavior>
                    <a className="transition-transform transform hover:scale-105 hover:text-portfolioColorBtn">
                        About
                    </a>
                </Link>
                </li>
                <li className="mx-6">
                <Link href='#services' legacyBehavior>
                    <a className="transition-transform transform hover:scale-105 hover:text-portfolioColorBtn">
                        Services
                    </a>
                </Link>    
                </li>
                <li className="mx-6">
                <Link href='#projects' legacyBehavior>
                    <a className="transition-transform transform hover:scale-105 hover:text-portfolioColorBtn">
                        Portfolio
                    </a>
                </Link>
                </li>
                <li className="mx-4">
                <Link href='#contactForm' legacyBehavior>
                    <a className="transition-transform transform hover:scale-105 hover:text-portfolioColorBtn">
                        Contact
                    </a>
                 </Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header