/** TS-Module w/ Declarations (Part 1/4)
  * http://TGRstack.com/#ts-module_articles_part-1
  * ./src/index.ts (Section 2. Figure 03.)
**/
import * as React from 'react'
import {default as HelloWorld} from './hello/HelloWorld'

function Content () {
  const FirstPart: string = "Hi"
  const LastPart: string = "Earth"
  const Message = HelloWorld(FirstPart, LastPart)

  return <div>{Message}</div>
}

export default Content