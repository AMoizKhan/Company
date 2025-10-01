"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logowithoutbg.png";

export default function Header() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="flex items-center justify-between bg-white px-6 py-4 shadow">
            {/* Logo Left */}
            <Link href="/">
                <div className="relative w-22 h-20">
                    {/* <Image
                        src={logo}
                        alt="Logo"
                        fill
                        className="object-contain cursor-pointer"
                    /> */}
                </div>
            </Link>

            {/* Navigation Center */}
            <div className="flex-1 flex justify-center space-x-8">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        className="relative text-gray-700 font-semibold group"
                    >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
