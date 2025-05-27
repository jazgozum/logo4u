import React from 'react'
import Lookup from '@/app/_data/Lookup'
import HeadingDesc from './HeadingDesc'

function LogoDesc({onHandleInputChange , formData}) {
  return (
    <div className='mt-2'>
      <HeadingDesc 
      title={Lookup.LogoDescTitle}
      desc={Lookup.LogoDescDesc}/>

      <input placeholder={Lookup.LogoDescPlaceholder} 
            className='p-4 border rounded-lg mt-5 w-full'
            onChange={(e) => onHandleInputChange(e.target.value)}
            defaultValue={formData?.desc} // Set default value from formData
            />
    </div>
  )
}

export default LogoDesc
