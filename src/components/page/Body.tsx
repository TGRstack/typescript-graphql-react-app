import * as React from 'react'

import * as T from '../theme.scss'
import * as S from './page.scss'

export default function Body({children}: {children: React.ReactChild |  React.ReactChild[]}) {
  return <div id="body" className={[S.body, T.bg_primary].join(' ')}>
      {children}
  </div>
}
