import * as React from 'react'
import Apollo from './apollo'
import Router from './router'

function Middlwares({children}: {children: React.ReactChild}) {
  return (
    <Apollo>
      <Router>
        {children}
      </Router>
    </Apollo>
  )
}

export default Middlwares
