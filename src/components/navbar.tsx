import React from 'react'
import Link from 'next/link'
import data from "./data.json"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import ThemeToggler from './section/themeToggler'

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
    return (
        <header className='fixed top-0 z-10 w-full bg-white shadow-sm dark:bg-gray-950'>
            <div className='container max-w-5xl mx-auto flex h-18 items-center justify-between py-2 md:px-6'>
                <Link className='flex' href="/">
                    <Image 
                        src="/assets/logo.png"
                        width={48}
                        height={48}
                        alt='logo'
                    />
                </Link>
                <div className='space-x-4 hidden lg:block'>
                    <ThemeToggler />
                    {data.visual.navbar.links.map(item => (
                        <Link 
                            key={item.label} 
                            href={item.path}
                            className='text-xl transition-colors text-gray-350 hover:text-primary dark:hover:text-gray-50'
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                    <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className='block lg:hidden'>
                            <MenuIcon className='w-12 h-12'/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className="drop-shadow-xl drop-shadow-black w-3xl">
                        <SheetTitle>
                        <div className='grid p-6 gap-6'>
                            <ThemeToggler />
                                {data.visual.navbar.links.map((item) => (
                                    <Link
                                        href={item.path}
                                        key={item.path}
                                        className="text-sm transition-colors text-gray-350 hover:text-primary dark:hover:text-gray-50"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                        </div>
                        </SheetTitle>
                    </SheetContent>
                    </Sheet>
            </div>
        </header>
  )
}

export default Navbar