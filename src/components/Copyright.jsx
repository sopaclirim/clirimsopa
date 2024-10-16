import React from 'react'

const Copyright = () => {
const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <div className='border-b border-neutral-900'>
            <div className="text-center">
            <p className="my-1 py-4 border-t-slate-800 text-sm font-thin">© {currentYear} Çlirim Sopa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Copyright;
