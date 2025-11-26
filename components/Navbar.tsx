
import Image from "next/image";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Navitems from "@/components/Navitems";
import Link from "next/link";

import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/chatsphere_logo.svg"
                        alt="logo"
                        width={72}
                        height={80}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8 h-">
                <Navitems />
                <p>Sign In</p>


            </div>
    </nav>
  )
}

export default Navbar
