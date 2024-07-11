import React, { useState } from 'react';
import { usePageName } from '../Contexts/PageNameContext';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true); // Assume there are new notifications initially
  const { pageName } = usePageName();

  return (
    <div>
      <div className='flex justify-between items-center py-[30px] px-8 h-[88px]'>
        <div>
          <h1 className='lato text-blue-950 text-[22px] font-bold'>{pageName}</h1>
        </div>
        <div
          className='relative p-[20px] mr-[-20px] cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className='relative '>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
              <path d="M13.0008 19.4091C13.0008 19.6984 12.8859 19.9759 12.6812 20.1805C12.4766 20.3851 12.1991 20.5 11.9097 20.5H6.09035C5.80096 20.5 5.52343 20.3851 5.3188 20.1805C5.11418 19.9759 4.99922 19.6984 4.99922 19.4091C4.99922 19.1198 5.11418 18.8423 5.3188 18.6377C5.52343 18.4331 5.80096 18.3182 6.09035 18.3182H11.9097C12.1991 18.3182 12.4766 18.4331 12.6812 18.6377C12.8859 18.8423 13.0008 19.1198 13.0008 19.4091ZM17.7581 15.9538C17.6005 16.2316 17.3716 16.4624 17.095 16.6223C16.8185 16.7822 16.5043 16.8655 16.1848 16.8636H1.81522C1.49573 16.8655 1.18151 16.7822 0.904945 16.6223C0.62838 16.4623 0.399474 16.2316 0.241816 15.9537C0.0826125 15.676 -0.000776518 15.3612 5.44932e-06 15.0411C0.000787416 14.7209 0.0857129 14.4066 0.246271 14.1296C0.763647 13.2396 1.38059 11.5405 1.38059 8.5V8.13636C1.37818 6.11356 2.17955 4.17265 3.60842 2.74056C5.03729 1.30848 6.97663 0.50253 8.99984 0.5L9.05803 0.500182C13.2278 0.531182 16.6202 3.99364 16.6202 8.21855V8.5C16.6202 11.5407 17.2367 13.24 17.7539 14.13C17.9144 14.407 17.9992 14.7212 18 15.0413C18.0007 15.3614 17.9173 15.6761 17.7581 15.9538ZM15.5802 14.6818C14.6447 12.7227 14.4379 10.2775 14.4379 8.5V8.21855C14.4379 5.18782 12.0173 2.704 9.04185 2.682C9.028 2.68189 9.01414 2.68183 9.00029 2.68182C8.28504 2.68301 7.57703 2.82504 6.91668 3.09981C6.25633 3.37457 5.65658 3.77668 5.15167 4.28318C4.64675 4.78968 4.24657 5.39066 3.97395 6.05179C3.70134 6.71292 3.56165 7.42126 3.56284 8.13636V8.5C3.56284 10.2775 3.35589 12.7228 2.41989 14.6818H15.5802Z" fill="#4A5568" />
            </svg>
            {hasNewNotifications && (
              <span className='absolute top-0 right-[-2px] inline-block w-2 h-2 bg-red-500 rounded-full'></span>
            )}
          </button>
          {isHovered && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg  z-50'>
              <ul className='p-2 text-[12px]'>
                <li className='p-2 hover:bg-gray-100 cursor-pointer'>Notification 1</li>
                <li className='p-2 hover:bg-gray-100 cursor-pointer'>Notification 2</li>
                <li className='p-2 hover:bg-gray-100 cursor-pointer'>Notification 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
