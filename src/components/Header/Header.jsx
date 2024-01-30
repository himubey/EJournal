import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    // {
    //   name: 'All Posts',
    //   slug: '/all-posts',
    //   active: authStatus,
    // },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className='py-3  px-8 backdrop-saturate-200  backdrop-blur-2xl shadow sticky top-0 z-10 bg-opacity-80 border border-white/80 w-full max-w-full rounded-none border-b-[1.5px] !border-blue-gray-50 bg-white'>
      
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='60px' />
            </Link>
          </div>
          <div className='md:hidden'>
            <button
              className='text-gray-500 focus:outline-none'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </button>
          </div>
          <ul className={`flex ${menuOpen ? 'flex-col' : 'hidden'} font-semibold md:flex md:items-center md:ml-auto space-x-4 md:space-x-0 md:space-y-0`}>
            {navItem.map(
              (item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate(item.slug);
                      }}
                      className='block md:inline-block px-4 py-2 duration-200 hover:bg-blue-200 rounded-full'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      
    </header>
  );
}

export default Header;