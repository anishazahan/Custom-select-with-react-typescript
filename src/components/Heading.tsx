import React, { ReactElement } from 'react'

type headingprops = {title : String}

const Heading = ({title}:headingprops):ReactElement=> {
  return (
    <div>Heading{title}</div>
  )
}

export default Heading