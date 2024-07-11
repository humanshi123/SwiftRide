import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import LoginImage from '../assets/login-img.jpg'

export default function Login() {
    return (
        <>
            <div className='login-page'>
                <div className='login-form-outer'>
                    <div className='login-from-inner'>
                        <img src={Logo} alt='Logo' />
                        <h2 className='h2-heading'>Sign in to Swift Ride</h2>
                        <form className="form-md" autoComplete="off">
                            <div className="form-group">
                                <input
                                    id="form_email"
                                    className="form-control"
                                    type="email"
                                    name="email_field"
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="form_email">
                                    Email address<span className="gl-form-asterisk"></span>
                                </label>
                            </div>

                            <div className="form-group">
                                <input
                                    id="form_password"
                                    className="form-control"
                                    type="password"
                                    name="new-password"
                                    required
                                    autoComplete="new-password"
                                />
                                <label htmlFor="form_password">
                                    Password<span className="gl-form-asterisk"></span>
                                </label>
                            </div>
                            <button className='button' type="submit">
                            <Link className='flex items-center w-full h-full justify-center p-3' to="/investors">
                                Login
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5001 18.9999C10.2664 19.0004 10.04 18.919 9.86005 18.7699C9.65555 18.6004 9.52691 18.3564 9.50252 18.0919C9.47813 17.8274 9.56 17.564 9.73005 17.3599L14.2101 11.9999L9.89005 6.62994C9.72228 6.42335 9.64379 6.1584 9.67194 5.89376C9.70009 5.62912 9.83257 5.38662 10.0401 5.21994C10.2492 5.03591 10.5257 4.94747 10.8028 4.97594C11.08 5.00442 11.3327 5.14722 11.5001 5.36994L16.3301 11.3699C16.6334 11.7389 16.6334 12.2709 16.3301 12.6399L11.3301 18.6399C11.1266 18.8854 10.8183 19.0191 10.5001 18.9999Z" fill="white" />
                                </svg>
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>
                <div className='login-image'>
                    <img src={LoginImage} alt='Login image' />
                </div>
            </div>
        </>
    )
}
