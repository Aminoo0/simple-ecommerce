'use client'
import logo from '@/app/favicon.ico'
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    let path = usePathname()

    return (
        <nav className="fixed top-5 left-0 right-0 z-50">
            <div className="flex justify-center items-center gap-52 bg-gray-700 shadow-lg w-fit mx-auto px-5 py-3 rounded-lg">
                <div className="">
                    <Image src={logo} width={30} height={30} alt='logo' loading='lazy' priority={false} />
                </div>
                <div>
                    <ul className="flex justify-between gap-10 text-white text-lg">
                        <Link href={'/'}> <li className={`${path == '/' ? 'active' : null} hover:text-purple-600 duration-300 cursor-pointer`}>Home</li></Link>
                        {/* <li className={`${path == '/login' ? 'active' : null} hover:text-purple-600 duration-300 cursor-pointer`}>Categories</li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
