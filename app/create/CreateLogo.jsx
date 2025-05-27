"use client"
import React , {useState}  from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft , ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPalette from './_components/LogoColorPalette'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'
import GenerateLogo from './_components/GenerateLogo'

function CreateLogo() {

    const [step , setStep] = useState(1);
    const [formData , setFormData] = useState();
    const onHandleInputChange = (field , value) =>{
        setFormData((prev) => ({...prev , [field]: value}))
    }
    
  return (
    <div className='mt-10 md:mt-15 p-8 border rounded-xl 2xl:mx-72'>
        {step == 1?
         <LogoTitle  onHandleInputChange={(v)=> onHandleInputChange ('title' , v)} formData={formData}/>:
         step == 2?
         <LogoDesc onHandleInputChange={(v)=> onHandleInputChange ('desc' , v)} formData={formData}/>:
         step == 3?
         <LogoColorPalette onHandleInputChange={(v)=> onHandleInputChange ('palette' , v)} formData={formData}/>:
         step == 4?
         <LogoDesign onHandleInputChange={(v)=> onHandleInputChange ('design' , v)} formData={formData}/>:
         step ==5 ?
         <LogoIdea onHandleInputChange={(v)=> onHandleInputChange ('idea' , v)} formData={formData}/>:
          step ==6 ?
         <GenerateLogo  formData={formData}/>:
         null
    }
     
      <div className='flex items-center justify-between mt-10'>
        {step!=1 && <Button onClick = {() => setStep(step - 1)} variant='outline'> <ArrowLeft/>Previous</Button>}
        {step !== 6 && <Button onClick = {() => setStep(step + 1)}> 
          <ArrowRight /> {step !== 5 ? 'Continue' : 'Generate'}
        </Button>}
        
      </div>
    </div>
  )
}

export default CreateLogo
