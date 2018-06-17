import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Hello from '../../components/hello'

function HomeEntrancePage() {
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <div className="rtv-content--entrance">
          <h2>
            <Hello />
          </h2>
          <p>
            Set the info you care most about...
          </p>
        </div>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
