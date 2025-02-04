import { Search } from 'lucide-react';
import React from 'react';

function Header() {
    return (
        <div className="p-5 shadow-sm border-b-2 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className='flex gap-2 items-center p-2 border rounded-md w-full md:max-w-lg'>
                <Search className="w-5 h-5 text-gray-500" />
                <label htmlFor="search" className="sr-only">Search</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    className='outline-none w-full'
                />
            </div>
            <div>
                <div className='bg-primary p-1 rounded-full text-sm md:text-xl text-white px-2 text-center'>
                    Join Membership just for $9.99/Month
                </div>
            </div>
        </div>
    );
}

export default Header;