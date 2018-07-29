import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Hello from '../../components/hello'
import * as S from './Home.css'

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <div>
          <Hello />
        </div>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
