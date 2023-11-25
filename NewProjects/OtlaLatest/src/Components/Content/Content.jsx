import React, { Children } from 'react'

const Content = ({header, footer}) => {
  return (
    <div>
          <Header /> 
    {Children}      
    {footer && <Footer/>  }
    </div>
  )
}

export default Content
