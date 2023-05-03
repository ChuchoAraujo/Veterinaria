import React from 'react'

export const Error = ({children}) => {
  return (
    (
        <div className='bg-red-400 text-white uppercase text-center font-bold mb-4 rounded-lg p-2'>
          {children}
        </div>
      )
  )
}
