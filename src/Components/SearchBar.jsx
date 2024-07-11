import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex w-[50%] gap-[2px] items-center'>
      <div className='relative w-full max-width '>
        <input className='lato size-12 w-full h-12 pl-10 p-3 bg-white rounded-xl border-2 border-neutral-200'
          type="search" name="" id="" placeholder='Search by name or keyword' />
        <button className='absolute left-3 top-[14px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#8C909B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 17.5L13.875 13.875" stroke="#8C909B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <button className='p-[10px] bg-white rounded-xl border-2 border-neutral-200'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 4.07275C4.74043 4.07275 4.50198 4.21576 4.37973 4.44474C4.25749 4.67372 4.27134 4.95143 4.41577 5.1671L10.1412 13.7172V21.7759C10.1412 22.0295 10.2778 22.2634 10.4986 22.3881C10.7194 22.5128 10.9903 22.509 11.2075 22.378L13.5197 20.9836C13.7307 20.8564 13.8597 20.6279 13.8597 20.3815V13.7181L19.5843 5.16703C19.7287 4.95135 19.7425 4.67366 19.6202 4.4447C19.498 4.21574 19.2596 4.07275 19 4.07275H5ZM11.4286 13.1123L6.31705 5.479H17.6831L12.5723 13.1133C12.4948 13.229 12.4534 13.3652 12.4534 13.5044V19.9845L11.5475 20.5308V13.5035C11.5475 13.3642 11.5061 13.228 11.4286 13.1123Z" fill="#8C909B" />
        </svg>
      </button>
    </div>
  )
}
