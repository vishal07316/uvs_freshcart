import Image from 'next/image'
import React from 'react'
import { LayoutGrid } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Image src="/next.svg" alt='logo'
                    width={150}
                    height={100}
                />

                <DropdownMenu>
                    <DropdownMenuTrigger><h2 className='md:flex gap-2 items-center
                            border rounded-full p-2 px-10 bg-slate-200 hidden cursor-pointer' >
                        <LayoutGrid className='h-5 w-5' />  category  </h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className=' md:flex items-center gap-3 border rounded-full p-2 px-5 hidden'>
                    <input type="text" placeholder='Search' className='outline-none' />

                </div>
            </div>

            <div className='flex items-center gap-5'>
                <h2 className='flex gap-2 items-center text-lg'>
                    <ShoppingBag />
                </h2>
                <Button>Login</Button>
            </div>
        </div>

    )
}

export default Header