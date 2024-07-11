import React from 'react'

export default function UserProfile() {
    return (
        <>
            <div className='user-profile p-[20px]'>
                <div className='user-data flex gap-[10px] items-center pt-[16px] pb-[16px] mt-[10px] mb-[10px] border-t border-t-red-[#E2E2E2] border-solid border-b border-t-red-[#E2E2E2] border-solid'>
                    <div className='name-string  text-[12px]'>
                        SR
                    </div>
                    <div className='user-name'>
                        <h6>Swift Ride</h6>
                        <p>info@swiftride.net</p>
                    </div>
                </div>
                <div className='logout-button'>
                    <button className='flex gap-[16px] text-[12px] items-center pt-[10px] pb-[10px] w-full'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8M17 16L21 12L17 16ZM21 12L17 8L21 12ZM21 12H7H21Z" stroke="#353836" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Logout 
                    </button>
                </div>
            </div>
        </>
    )
}
