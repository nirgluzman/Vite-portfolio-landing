import { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';

import MenuOverlay from './MenuOverlay';

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    {
      id: 1,
      title: 'HOME',
    },
    {
      id: 1,
      title: 'ABOUT',
    },
    {
      id: 1,
      title: 'SERVICE',
    },
    {
      id: 1,
      title: 'PORTFOLIO',
    },
    {
      id: 1,
      title: 'CONTACT',
    },
  ];
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-[24px] font-bold text-white'>
          NIR
          <span className='text-red-500'> GLUZMAN</span>
        </h2>
      </div>
      <div className='hidden gap-4 md:flex'>
        {menuList.map((item, index) => (
          <div key={index}>
            <h2 className='cursor-pointer rounded-full border border-transparent px-3 py-1 text-[15px] text-white hover:border-red-500'>
              {item.title}
            </h2>
          </div>
        ))}
        <h2 className='cursor-pointer rounded-full border border-transparent from-red-500 to-red-800 px-3 py-1 text-[15px] text-white hover:border-red-500 hover:bg-gradient-to-r'>
          HIRE ME
        </h2>
      </div>
      <div className='md:hidden'>
        {!toggle ? (
          <HiBars3BottomRight
            onClick={() => setToggle(!toggle)}
            className='cursor-pointer text-[24px] text-white'
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className='cursor-pointer text-[24px] text-white'
          />
        )}
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </div>
  );
}

export default Header;
