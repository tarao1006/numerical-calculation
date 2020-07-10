import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from './components/linkcomposition'
import Title, { siteTitle } from './components/title'

const Home = () => {
  console.log(window.innerHeight)

  useEffect(() => {
    document.title = `ホーム | ${siteTitle}`
    console.log(window.innerHeight)
  })

  return (
    <Wrapper　height={ `${window.innerHeight}px` }>
      <Link to="/linear_equation">
        <Category
          name="連立一次方程式"
          description="連立一次方程式を解きます。"
        />
      </Link>
      <Link to="/linear_equation">
        <Category
          name="固有値"
          description="行列の固有値を求めます。"
        />
      </Link>
      <Link to="/linear_equation">
        <Category
          name="その他"
          description="その他有名なものです。"
        />
      </Link>
    </Wrapper>
  )
}

export default Home

const Category = ({ name, description, children }) => {

  return (
    <Body height={ window.innerHeight - 30 }>
      <Method>
      <Name>
        { name }
      </Name>
      <Description>
        { description }
      </Description>
      </Method>
    </Body>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 15px;
  min-width: 700px;
`

const Body = styled.div`
  font-size: 15px;
  text-align: center;
  border-radius: 10px;
  border: solid 4px;
  border-color: black;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease 0s;
  color: black;
  height: ${({ height }) => `${height}px`};

  &:hover {
    background: black;
    color: white;
  }
`

const Method = styled.div`
  padding: 20em 0;
`

const Name = styled.div`
  font-size: 2em;
`

const Description = styled.div`
  color: white;
  font-size: 1em;
`
