import React, { useEffect } from 'react'
import styled, { css }from 'styled-components'
import Link from './components/linkcomposition'
import { siteTitle } from './components/title'

const Home = () => {

  useEffect(() => {
    document.title = `ホーム | ${siteTitle}`
  })

  return (
    <>
      <Title>
        数値計算ライブラリ
      </Title>
      <Sub>
      「工学のための数値計算」に載っている基本的な数値計算を実行できます。
      </Sub>
      <Wrapper>
        <Link to="/linear_equation">
          <Category
            name="連立一次方程式"
            description="連立一次方程式を解きます。"
          />
        </Link>
        <Category
          name="固有値"
          description="行列の固有値を求めます。"
          unimplemented
        />
        <Link to="/other">
          <Category
            name="その他"
            description="その他有名なものです。"
          />
        </Link>
      </Wrapper>
    </>
  )
}

export default Home

const Category = ({ name, description, unimplemented }) => {

  return (
    <Body height={ window.innerHeight - 300 } unimplemented={ unimplemented }>
      <Name>
        { name }
      </Name>
      <Description>
        { description }
      </Description>
    </Body>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 15px;
  min-width: 700px;
`

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`

const Sub = styled.h2`
  font-size: 1.2em;
  color: rgb(4, 4, 4);
  text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${props => props.unimplemented && css`
    opacity: 0.4;
  `}

  ${props => !props.unimplemented && css`
    &:hover {
      background: black;
      color: white;
    }
  `}
`

const Name = styled.div`
  font-size: 2em;
`

const Description = styled.div`
  color: white;
  font-size: 1em;
`
