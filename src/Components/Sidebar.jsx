import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import Logo from '../assets/logo.png';
import { DriversIcon, ExpenseIcon, InvestorsIcon, OpenIcon, OperationIcon, ReportIcon, SupportIcon, UtilityIcon, VehiclesIcon } from './SvgIcons';
import { CloseIcon } from './SvgIcons';
export default function Sidebar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');
  const [isInvestorPage, setIsInvestorPage] = useState(false);

  useEffect(() => {
    setIsInvestorPage(location.pathname === '/investors');
  }, [location.pathname]);

  const toggleSubMenu = (menuItem) => {
    setActiveMenu(activeMenu === menuItem ? '' : menuItem);
  };
 
  const hasSubmenu = (menuItem) => {
    return menuItem === 'drivers' || menuItem === 'vehicles';
  };

  const isActiveMenuItem = (menuItem) => {
    return location.pathname.startsWith('/' + menuItem);
  };

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
    },
    investorButtonContainer: {
      display: isInvestorPage ? 'block' : 'none',
      padding: '10px 20px',
      textAlign: 'center',
    },

  };


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
                  <InvestorsIcon />
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
              <DriversIcon />
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
              <VehiclesIcon />
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
                  <ExpenseIcon />
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
                  <UtilityIcon/>
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
                  <SupportIcon/>
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
                  <OperationIcon/>
                  Operations
                </NavLink>
            </li>
            <li>

            <NavLink
                  to='/Reports'
                  activeClassName='active'
                  onClick={() => handleMainMenuClick('support')}
                >
                  <ReportIcon />
                  Reports
                </NavLink>
            </li>
          </ul>
        </nav>
        </div>
        {isInvestorPage && (
          <div style={styles.investorButtonContainer}>
            <button className='button py-4'>Add New Investor</button>
            <button className='my-3 w-full text-emerald-600 text-xs font-bold h-[48px]  bg-white rounded-xl border border-emerald-600'>Add New Investor</button>
            <button className='w-full text-emerald-600 text-xs font-bold h-[48px]  bg-white rounded-xl border border-emerald-600'>Send Bulk Email</button>
          </div>
        )}
        <UserProfile />
      </div>
    </>
  );
}
