import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Icon from '@/../public/icon-biar-pintar.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#fff] shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Image src={Icon} alt="Logo" width={40} height={40} />
                    </div>
                    <div className="hidden sm:flex space-x-6 text-[#006CCF]">
                        <Link href="/">Home</Link>
                        <Link href="/course">Course</Link>
                        <Link href="/search">Search</Link>
                    </div>
                    <div className="hidden sm:block">
                        <Button className="bg-[#006CCF] text-white">Sign Up</Button>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden bg-white shadow-md">
                    <div className="flex flex-col items-center py-4 space-y-4 text-[#006CCF]">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/course" onClick={() => setIsOpen(false)}>Course</Link>
                        <Link href="/search" onClick={() => setIsOpen(false)}>Search</Link>
                        <Button className="bg-[#006CCF] text-white w-full pt-[8px] pr-[24px] pb-[8px] pl-[24px]">Sign Up</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}