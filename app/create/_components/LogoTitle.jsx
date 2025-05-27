"use client"
import React, { useState, useEffect } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({ onHandleInputChange }) {
    const searchParam = useSearchParams();
    const [title, setTitle] = useState('');

    // Sync title state with URL parameter
    useEffect(() => {
        const paramTitle = searchParam.get('title') ?? '';
        setTitle(paramTitle);
        onHandleInputChange(paramTitle); // Ensure the initial value is passed to the handler
    }, [searchParam]);

    return (
        <div className='mt-2'>
            <HeadingDesc 
                title={Lookup.LogoTitle}
                desc={Lookup.LogoTitleDesc} 
            />

            <input 
                placeholder={Lookup.InputPlaceholder} 
                className='p-4 border rounded-lg mt-5 w-full'
                value={title} // Controlled component
                onChange={(e) => {
                    setTitle(e.target.value);
                    onHandleInputChange(e.target.value);
                }}
            />
        </div>
    );
}

export default LogoTitle;