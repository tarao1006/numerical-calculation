import React from 'react'
import styled, { css } from 'styled-components'
import Link from '../linkcomposition'

const Card = ({ children, unimplemented, to }) => {

  return (
    <Body unimplemented={ unimplemented }>
        <Link to={ to }>
          <Method>
            { children }
          </Method>
        </Link>
    </Body>
  )
}

export default Card

const Body = styled.div`
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease 0s;
  background: white;

  ${props => props.unimplemented && css`
    opacity: 0.4;
  `}

  ${props => !props.unimplemented && css`
    &:hover {
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08), 0px 3px 16px 0px rgba(0, 0, 0, 0.06);
      transform: translateY(-3px);
    }
  `}
`

const Method = styled.span`
  margin: 0 auto;
  width: 100%;
  display: block;
  text-decoration: none;
  padding: 6em 0;

  cursor: ${props => props.unimplemented ? "default" : "pointer"};
  ${props => props.unimplemented && css`
    pointer-events: none;
  `}
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 15px;
`