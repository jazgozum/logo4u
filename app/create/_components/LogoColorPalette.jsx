import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

function LogoColorPalette({onHandleInputChange , formData}) {

    const  [selectedColor , setSelectedColor] = useState(formData?.palette);
  return (
    <div className='mt-2'>
      <HeadingDesc 
      title={Lookup.LogoColorPaletteTitle}
      desc={Lookup.LogoColorPaletteDesc}/>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {Colors.map((palette, index) => (
            <div className={`flex p-1 cursor-pointer ${selectedColor == palette.name && 'border-2 rounded-lg border-primary '}`}  key={index}>
                {palette?.colors.map((color, index) => (
                   <div className='h-24 w-full'
                   key={index}
                   onClick={() => {setSelectedColor(palette.name);
                    onHandleInputChange(palette.name)
                   }}
                   style={{backgroundColor: color}}>
                   </div>
                ))}
            </div>

        ))}
      </div>
    </div>
  )
}

export default LogoColorPalette
