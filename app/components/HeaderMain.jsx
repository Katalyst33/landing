import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AppIcon } from '../components/icons/AppIcon';
import ThemeToggle from '../components/ui/ThemeToggle';
import UserAuthData from '../../app/components/auth/User';

const navigation = [
  { name: 'Our Projects', href: '/project' },
  { name: 'Our Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function HeaderMain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" border-b dark:border-gray-700 lg:px-32 px-4">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4"
        aria-label="Global"
      >
        <div className={`w-52`}>
          <Link className="flex items-center " href="/">
            <AppIcon name={true} className={`h-10 w-10`} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
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
          <UserAuthData/>

          <ThemeToggle />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <AppIcon name={true} className={`h-10 w-10`} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 dark:text-gray-300 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
