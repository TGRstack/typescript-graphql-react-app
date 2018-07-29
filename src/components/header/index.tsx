import * as React from 'react'
import { Link } from 'react-router-dom/'

import Header from './Header'
import * as S from './Header.scss'

class LoggedOutHeader extends React.Component<{}, {}> {
  render() {
    const items = [
      <span className={S.text}>Header</span>,  // tslint:disable-line jsx-key
      <Link to="/">Home</Link>,                               // tslint:disable-line jsx-key
      <Link to="/foo">Foo</Link>,                             // tslint:disable-line jsx-key
    ]

    return <Header items={items} />
  }
}

export default LoggedOutHeader
