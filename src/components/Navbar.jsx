'use client';

import { ChartSpline, Clock, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "Timeline", path: "/timeline", icon: Clock },
        { name: "State", path: "/state", icon: ChartSpline },
    ]

    return (
        <div className='border-b border-gray-200 sticky top-0 bg-white'>
            <div className='flex justify-between items-center p-4 container mx-auto'>
                <h1 className='text-2xl font-black'>Keen<span className='text-green-900 font-light'>Keeper</span></h1>
                <nav>
                    <ul className='flex gap-4'>
                        {navLinks.map((link) => {
                            return (
                                <li key={link.name} 
                                    className={`px-3 py-2 rounded translation ${pathname === link.path ? "bg-green-900 text-white" : ""}`}
                                >
                                    <Link href={link.path} className='flex items-center gap-1'>
                                        <link.icon />
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;