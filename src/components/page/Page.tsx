import * as React from 'react'

import Header from '../header'
import Body from './Body'
import Content from './Content'

export default function Page({children}: {children: React.ReactChild |  React.ReactChild[]}) {
  return <Body>
    <Header />
    <Content>
      {children}
    </Content>
  </Body>
}
