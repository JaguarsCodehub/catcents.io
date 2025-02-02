'use client';

import { Twitter, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

type NavItem = {
  href: string;
  label: string;
  isActive?: boolean;
};

const navItems: NavItem[] = [
  { href: '/', label: 'HOME', isActive: true },
  { href: '#about', label: 'ABOUT' },
  { href: '#tokenticker', label: 'TOKENOMICS ' },
  { href: '#faq', label: 'FAQ' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Catcents
            </span>
          </a>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <SocialIcon
              url='https://x.com'
              style={{ width: 40, height: 40, marginRight: 8 }}
              href='https://x.com/catcentsio'
            />
            <button
              type='button'
              onClick={() => router.push('https://x.com/catcentsio')}
              className=' hidden md:block text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-rose-600 dark:hover:bg-rose-500 dark:focus:ring-rose-800'
            >
              Get started
            </button>
            <button
              onClick={toggleMenu}
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className='sr-only'>Open main menu</span>
              {isMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:hidden w-full md:w-auto md:order-1`}
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 ${
                      item.isActive
                        ? 'text-white bg-rose-500 rounded md:bg-transparent md:text-rose-500 md:p-0 md:dark:text-rose-500'
                        : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0 md:dark:hover:text-rose-500 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500'
                    }`}
                    aria-current={item.isActive ? 'page' : undefined}
                    onClick={() => toggleMenu()}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden md:flex md:items-center md:w-auto md:space-x-8'>
            <ul className='flex flex-col md:flex-row md:items-center md:space-x-8'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 ${
                      item.isActive
                        ? 'text-gray-900 bg-gray-100 rounded md:bg-transparent md:text-rose-500 md:p-0 md:dark:text-rose-500'
                        : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0 md:dark:hover:text-rose-500 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500'
                    }`}
                    aria-current={item.isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
