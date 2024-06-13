import React, { useContext } from 'react'
import { Data } from '../../context/DataProvider'

export const About = () => {

const context = useContext(Data)

  return (
    <h1>Count: {context.count}</h1>
  )
}
