
import React , {useState} from 'react'
import Lookup from '@/app/_data/Lookup'
import HeadingDesc from './HeadingDesc'
import LogoDesigns from '@/app/_data/LogoDesign'
import Image from 'next/image'


function LogoDesign({onHandleInputChange , formData}) {

    const [selectedOption, setSelectedOption] = useState(formData?.design?.title);

  return (
    <div className="mt-2">
      <HeadingDesc 
      title={Lookup.LogoDesignTitle}
      desc={Lookup.LogoDesignDesc}/>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {LogoDesigns.map((design, index) => (
          <div 
          className={`flex flex-col  cursor-pointer hover:border-2 p-1 border-primary rounded-lg ${
            selectedOption == design.title && 'border-2 rounded-lg border-primary '
          }`}  
          key={index}
          onClick={() => {
            setSelectedOption(design.title);
            onHandleInputChange(design);
          }}
        >
          <Image
            src={design.image}
            alt={design.title}
            width={300}
            height={200}
            className="w-full rounded-xl  cursor-pointer"
          />
          <p className="text-center mt-2">{design.title}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesign
