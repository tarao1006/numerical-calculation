import React from 'react'
import styled from 'styled-components'

export const siteTitle = "数値計算ライブラリ"

const Title = ({ title }) => {

  return (
    <H1>
      { title }
    </H1>
  )
}

export default Title

const H1 = styled.h1`
  text-align: center;
`
