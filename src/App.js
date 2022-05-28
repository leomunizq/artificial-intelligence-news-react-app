import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = ''

export const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey
    })
  }, [])

  return (
    <div>
      <h1>Alan AI News App</h1>
    </div>
  )
}
export default App
