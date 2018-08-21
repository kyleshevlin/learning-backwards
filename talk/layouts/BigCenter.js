import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      fontSize: '4em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
)
