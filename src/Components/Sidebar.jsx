import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import Logo from '../assets/logo.png';

export default function Sidebar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');

  // Function to handle submenu toggle
  const toggleSubMenu = (menuItem) => {
    setActiveMenu(activeMenu === menuItem ? '' : menuItem);
  };
 
  // Function to determine if a menu item has submenus
  const hasSubmenu = (menuItem) => {
    return menuItem === 'drivers' || menuItem === 'vehicles';
  };

  // Function to determine if a menu item should be active
  const isActiveMenuItem = (menuItem) => {
    return location.pathname.startsWith('/' + menuItem);
  };

  // Function to handle click on main menu item
  const handleMainMenuClick = (menuItem) => {
    if (hasSubmenu(menuItem)) {
      toggleSubMenu(menuItem);
    }
  };
  const styles = {
    listItems: {
      display: "flex",
    alignItems: "center",
    columnGap: "17px",
    flexWrap: "wrap",
    }
  };
  const CloseIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="#353836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  );
  
  const OpenIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15 12.5L10 7.5L5 12.5" stroke="#019268" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  );


  return (
    <>
      <div className='side-bar flex justify-between flex-col h-[100%]'>
        <div className=''>
        <div className='logo-box bg-neutral-800 py-6 grid place-items-center'>
         <img src={Logo} alt='Logo' />
        </div>
        <nav className='main-nav pt-7'>
          <ul className=''> 
            <li className={hasSubmenu('investors') ? 'has-submenu' : ''} >

              {hasSubmenu('investors') ? (
                <div
                  className={isActiveMenuItem('investors') ? 'active' : ''}
                  onClick={() => handleMainMenuClick('investors')}
                >
                  Investors
                  <span className='toggle-icon'>{activeMenu === 'investors' ? <OpenIcon /> : <CloseIcon />}</span>
                </div>
                
              ) : (
                <NavLink
                  to='/investors'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('investors')}
                >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="#353836" strokeWidth="1.5"/>
  <path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="#353836" strokeWidth="1.5"/>
  <path d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
                  Investors
                </NavLink>
              )}
              {hasSubmenu('investors') && (
                <ul className={activeMenu === 'investors' ? 'submenu open' : 'submenu'}>
                  {/* Add submenu items here */}
                </ul>
              )}
            </li>
            <li className={hasSubmenu('drivers') ? 'has-submenu' : ''} style={styles.listItems}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25ZM7.75 9C7.75 8.30965 8.30965 7.75 9 7.75C9.69036 7.75 10.25 8.30965 10.25 9C10.25 9.69036 9.69036 10.25 9 10.25C8.30965 10.25 7.75 9.69036 7.75 9Z" fill="#353836"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M9 12.25C7.80424 12.25 6.68461 12.4907 5.83616 12.915C5.03258 13.3168 4.25 14.0106 4.25 15L4.24987 15.0625C4.24834 15.5728 4.24576 16.4322 5.06023 17.0218C5.43818 17.2953 5.9369 17.4698 6.55469 17.581C7.1782 17.6932 7.97721 17.75 9 17.75C10.0228 17.75 10.8218 17.6932 11.4453 17.581C12.0631 17.4698 12.5618 17.2953 12.9398 17.0218C13.7542 16.4322 13.7517 15.5728 13.7501 15.0625L13.75 15C13.75 14.0106 12.9674 13.3168 12.1638 12.915C11.3154 12.4907 10.1958 12.25 9 12.25ZM5.75 15C5.75 14.8848 5.86285 14.5787 6.50698 14.2566C7.10625 13.957 7.98662 13.75 9 13.75C10.0134 13.75 10.8937 13.957 11.493 14.2566C12.1371 14.5787 12.25 14.8848 12.25 15C12.25 15.6045 12.2115 15.6972 12.0602 15.8067C11.9382 15.895 11.6869 16.0134 11.1797 16.1047C10.6782 16.1949 9.97721 16.25 9 16.25C8.02279 16.25 7.3218 16.1949 6.82031 16.1047C6.31311 16.0134 6.06182 15.895 5.93977 15.8067C5.78849 15.6972 5.75 15.6045 5.75 15Z" fill="#353836"/>
  <path d="M19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H15C14.5858 11.25 14.25 11.5858 14.25 12C14.25 12.4142 14.5858 12.75 15 12.75H19Z" fill="#353836"/>
  <path d="M19.75 9C19.75 9.41422 19.4142 9.75 19 9.75H14C13.5858 9.75 13.25 9.41422 13.25 9C13.25 8.58579 13.5858 8.25 14 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9Z" fill="#353836"/>
  <path d="M19 15.75C19.4142 15.75 19.75 15.4142 19.75 15C19.75 14.5858 19.4142 14.25 19 14.25H16C15.5858 14.25 15.25 14.5858 15.25 15C15.25 15.4142 15.5858 15.75 16 15.75H19Z" fill="#353836"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0565 20.75H9.94359C8.10585 20.75 6.65018 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10583 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02503 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02503 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02503 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02503 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976Z" fill="#353836"/>
</svg>
              {hasSubmenu('drivers') ? (
                <div
                  className={isActiveMenuItem('drivers') ? 'active' : ''}
                  onClick={() => handleMainMenuClick('drivers')}
                >
                  Drivers
                  <span className='toggle-icon'>{activeMenu === 'drivers' ? <OpenIcon /> : <CloseIcon />}</span>
                </div>
              ) : (
                <NavLink
                  to='/#'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('drivers')}
                >

                  Drivers
                </NavLink>
              )}
              {hasSubmenu('drivers') && (
                <ul className={activeMenu === 'drivers' ? 'submenu open' : 'submenu'}>
                  <li>
                    <NavLink to='/SignUps' activeClassName='active'>
                      Sign ups
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/bookings' activeClassName='active'>
                      Bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/Activedrivers' activeClassName='active'>
                      Active drivers
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className={hasSubmenu('vehicles') ? 'has-submenu' : '' } style={styles.listItems}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M4 17.5H20" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6 17.5V19.5C6 20.05 5.55 20.5 5 20.5H3C2.45 20.5 2 20.05 2 19.5V12.68C2 11.9 2.18 11.14 2.53 10.44L4.9 5.71C5.58 4.35 6.96 3.5 8.48 3.5H15.54C17.06 3.5 18.44 4.36 19.12 5.71L21.49 10.44C21.84 11.13 22.02 11.9 22.02 12.68V19.5C22.02 20.05 21.57 20.5 21.02 20.5H19.02C18.47 20.5 18.02 20.05 18.02 19.5V17.5" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M23 9.50977H20.5C20.5 9.50977 17 10.4998 12 10.4998C7 10.4998 3.5 9.50977 3.5 9.50977H1" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 12.5C19 13.05 18.55 13.5 18 13.5H16" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5 12.5C5 13.05 5.45 13.5 6 13.5H8" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10 15.5H14" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 3.5L9.72 2.05C9.89 1.71 10.24 1.5 10.61 1.5H13.37C13.75 1.5 14.1 1.71 14.26 2.05L14.98 3.5" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              {hasSubmenu('vehicles') ? (
                <div
                  className={isActiveMenuItem('vehicles') ? 'active' : ''}
                  onClick={() => handleMainMenuClick('vehicles')}
                >
                  Vehicles
                  <span className='toggle-icon'>{activeMenu === 'vehicles' ? <OpenIcon /> : <CloseIcon />}</span> 
                </div>
              ) : (
                <NavLink
                  to='/vehicles'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('vehicles')}
                >

                  Vehicles
                </NavLink>
              )}
              {hasSubmenu('vehicles') && (
                <ul className={activeMenu === 'vehicles' ? 'submenu open' : 'submenu'}>
                  <li>
                    <NavLink to='/VehicleStatus' activeClassName='active'>
                      Vehicle status list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/ServiceAlerts' activeClassName='active'>
                      Service Alerts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/RatesHistory' activeClassName='active'>
                      Rates History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/VehicleMaintenance' activeClassName='active'>
                      Vehicle maintenance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/PendingVehicles' activeClassName='active'>
                      Pending Vehicles
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className={hasSubmenu('expenses') ? 'has-submenu' : ''}>

              {hasSubmenu('expenses') ? (
                <div
                  className={isActiveMenuItem('expenses') ? 'active' : ''}
                  onClick={() => handleMainMenuClick('expenses')}
                >
                  Expenses
                </div>
              ) : (
                <NavLink
                  to='/Expences'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('expenses')}
                >
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#353836" strokeWidth="1.5"/>
  <path d="M12 17V17.5V18" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 6V6.5V7" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
                  Expenses
                </NavLink>
              )}
              {hasSubmenu('expenses') && (
                <ul className={activeMenu === 'expenses' ? 'submenu open' : 'submenu'}>
                  {/* Add submenu items here */}
                </ul>
              )}
            </li>
            <li className={hasSubmenu('utilities') ? 'has-submenu' : ''}>


              {hasSubmenu('utilities') ? (
                <div
                  className={isActiveMenuItem('utilities') ? 'active' : ''}
                  onClick={() => handleMainMenuClick('utilities')}
                >
                  Utilities
                </div>
              ) : (
                <NavLink
                  to='/Utilities'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('utilities')}
                >
                              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H1M4 3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3C8 1.89543 7.10457 1 6 1C4.89543 1 4 1.89543 4 3ZM19 3H10M4 15H1M4 15C4 16.1046 4.89543 17 6 17C7.10457 17 8 16.1046 8 15C8 13.8954 7.10457 13 6 13C4.89543 13 4 13.8954 4 15ZM19 15H10M16 9H19M16 9C16 10.1046 15.1046 11 14 11C12.8954 11 12 10.1046 12 9C12 7.89543 12.8954 7 14 7C15.1046 7 16 7.89543 16 9ZM1 9H10" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  Utilities
                </NavLink>
              )}
              {hasSubmenu('utilities') && (
                <ul className={activeMenu === 'utilities' ? 'submenu open' : 'submenu'}>
                  {/* Add submenu items here */}
                </ul>
              )}
            </li>
            <li className={hasSubmenu('support') ? 'has-submenu' : ''}>

              {hasSubmenu('support') ? (
                <div
                  className={isActiveMenuItem('support') ? 'active' : ''}
                  onClick={() => handleMainMenuClick('support')}
                >
                  Support
                </div>
              ) : (
                <NavLink
                  to='/Support'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('support')}
                >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clipPath="url(#clip0_534_5594)">
    <path d="M20 13.3334V17.5C20 18.1631 19.7366 18.799 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H13.3333C12.1642 19.9988 11.016 19.6902 10.0039 19.1052C8.99172 18.5201 8.15121 17.6792 7.56667 16.6667C8.19489 16.6622 8.82098 16.5929 9.435 16.46C9.90262 17.0447 10.4958 17.5167 11.1707 17.841C11.8455 18.1653 12.5846 18.3336 13.3333 18.3334H17.5C17.721 18.3334 17.933 18.2456 18.0893 18.0893C18.2455 17.933 18.3333 17.721 18.3333 17.5V13.3334C18.3331 12.5844 18.1643 11.8451 17.8395 11.1702C17.5146 10.4954 17.042 9.90232 16.4567 9.43503C16.5907 8.82113 16.6611 8.19504 16.6667 7.5667C17.6791 8.15124 18.5201 8.99175 19.1051 10.0039C19.6902 11.0161 19.9988 12.1643 20 13.3334ZM14.9808 8.04253C15.0588 6.9689 14.9047 5.89107 14.529 4.88228C14.1534 3.87349 13.565 2.95738 12.8038 2.19621C12.0426 1.43504 11.1265 0.84664 10.1178 0.470994C9.10896 0.0953475 8.03113 -0.0587419 6.9575 0.0191962C5.05493 0.236473 3.29744 1.14184 2.01598 2.56482C0.734522 3.98779 0.0175226 5.83017 0 7.74503L0 11.945C0 14.055 1.25583 15 2.5 15H7.25C9.16567 14.9835 11.0092 14.267 12.4332 12.9855C13.8571 11.704 14.7633 9.94588 14.9808 8.04253ZM11.625 3.37586C12.2166 3.96878 12.674 4.68186 12.9661 5.46685C13.2582 6.25184 13.3784 7.09043 13.3183 7.92586C13.1405 9.41226 12.4254 10.7824 11.3078 11.7783C10.1901 12.7742 8.74699 13.3273 7.25 13.3334H2.5C1.72667 13.3334 1.66667 12.2709 1.66667 11.945V7.74503C1.67361 6.24868 2.22721 4.80645 3.22326 3.68976C4.21932 2.57307 5.58916 1.85892 7.075 1.6817C7.21333 1.6717 7.35167 1.6667 7.49 1.6667C8.25772 1.66598 9.01807 1.81656 9.72757 2.10983C10.4371 2.4031 11.0818 2.8333 11.625 3.37586Z" fill="#333333"/>
  </g>
  <defs>
    <clipPath id="clip0_534_5594">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
                  Support
                </NavLink>
              )}
              {hasSubmenu('support') && (
                <ul className={activeMenu === 'support' ? 'submenu open' : 'submenu'}>
                  {/* Add submenu items here */}
                </ul>
              )}
            </li>
            <li>

            <NavLink
                  to='/Operations'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('support')}
                >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#353836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  Operations
                </NavLink>
            </li>
            <li>

            <NavLink
                  to='/Reports'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('support')}
                >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#353836" strokeWidth="1.5"/>
  <path d="M8 12H16" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 8H16" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 16H13" stroke="#353836" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
                  Reports
                </NavLink>
            </li>
          </ul>
        </nav>
        </div>
        <UserProfile />
      </div>
    </>
  );
}
