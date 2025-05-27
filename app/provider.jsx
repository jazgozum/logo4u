import React from 'react'
import Header from './_components/Header'

function Provider({children}) {
  return (
    <div>
        <Header/>
        <div className='px-2 md:px-10 lg:px-20 xl:px-22 2xl:px-22'>
            {children}
        </div>
        
    </div>
  )
}

export default Provider
