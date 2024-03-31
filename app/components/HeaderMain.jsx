import {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {AppIcon} from '../components/icons/AppIcon';
import ThemeToggle from '../components/ui/ThemeToggle';
import UserAuthData from '../../app/components/auth/User';
import {usePathname} from "next/navigation";
import {cn} from "../utils/cn";
import {  Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,} from "../components/ui/sheet";

const navigation = [
    {name: 'Our Projects', href: '/project'},
    {name: 'Our Services', href: '/services'},
    {name: 'About Us', href: '/about'},
    {name: 'Contact Us', href: '/contact'},
];

export default function HeaderMain() {
    const pathname = usePathname()

    return (
        <header className=" border-b dark:border-gray-700 lg:px-32 px-4">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between py-4"
                aria-label="Global"
            >
                <div className={`w-52`}>
                    <Link className="flex items-center " href="/">
                        <AppIcon name={true} className={`h-10 w-10`}/>
                    </Link>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 "
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className={`flex items-center gap-x-4`}>
                    <div className="flex lg:hidden">
                        <Sheet >
                            <SheetTrigger>   <Bars3Icon className="h-6 w-6" aria-hidden="true"/></SheetTrigger>
                            <SheetContent >
                                <SheetHeader>
                                    <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                                        <AppIcon name={true} className={`h-10 w-10`}/>
                                    </Link>
                                </SheetHeader>
                                <div className={`mt-6`}>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-200  dark:hover:bg-gray-700',
                                                pathname === item.href ? 'bg-blue-400 hover:bg-blue-500 text-white' : 'text-gray-900 dark:text-white',
                                                ' hover:font-bold'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <UserAuthData/>

                    <ThemeToggle/>
                </div>
            </nav>
        
        </header>
    );
}
