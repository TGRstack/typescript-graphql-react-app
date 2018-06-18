import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import NetworkStatus from '../../components/network'
import './Entrance.css'

function EntrancePage() {
  return (
    <div className="body--container">
      <Helmet>
        <title>Entrancepage</title>
      </Helmet>

      <Gx col={12}>
        <div>
          <NetworkStatus />
        </div>
      </Gx>
    </div>
  )
}

export default EntrancePage
