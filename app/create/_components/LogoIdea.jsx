import React, { useEffect, useState } from 'react'
import Lookup from '@/app/_data/Lookup'
import HeadingDesc from './HeadingDesc'
import axios from 'axios'
import Prompt from '@/app/_data/prompt'
import { Loader2Icon } from 'lucide-react'

function LogoIdea({formData , onHandleInputChange}) {

const [ideas, setIdeas] = useState([]);
const [loading, setLoading] = useState(false);
const [selectedIdea, setSelectedIdea] = useState(formData?.idea);
useEffect(()=>{ 
  generateLogoDesignIdea();

}, [])


  const generateLogoDesignIdea=async()=>{
      setLoading(true);
       const PROMPT = Prompt.DESIGN_IDEA_PROMPT
       .replace('{logoType}',formData?.design.title)
       .replace('{logoTitle}',formData?.title)
       .replace('{logoDesc}',formData?.desc)
       .replace('{logoPrompt}',formData?.design.prompt)

     //console.log(PROMPT);
      const result = await axios.post('/api/ai-design-ideas',{
        prompt: PROMPT,
      })

      //console.log(result.data);
      setIdeas(result.data.ideas);
      setLoading(false);
  }
  return (
    <div>
      <HeadingDesc 
      title={Lookup.LogoIdeaTitle}
      desc={Lookup.LogoIdeaDesc}/>

      <div className="flex flex-wrap gap-2 mt-4">
        {ideas && ideas.map((item, index) => (
          <h2 key={index}
          onClick={()=>{setSelectedIdea(item);
             onHandleInputChange(item);
          }} 
          className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedIdea === item && 'border-primary'}`}
          >
            {item}
          </h2>
        ))}
        
           <h2 
            onClick={()=>{setSelectedIdea('Let AI Select the best Idea');
              onHandleInputChange('Let AI Select the best Idea');
            }} 
      className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary  ${selectedIdea === 'Let AI Selecte the best Idea' && 'border-primary'}`}>
        Let AI Select the best idea</h2>
      </div>
          <div className='items-center flex justify-center'>{loading && <Loader2Icon className='animate-spin text-primary w-10 h-10 mt-5'/>}</div>
      
    </div>
  )
}

export default LogoIdea