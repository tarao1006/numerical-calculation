import React from 'react'
import styled from 'styled-components'

export const ExecuteButton = ({ execute }) => {

  return (
    <Button onClick={ execute }>
      実行
    </Button>
  )
}

export const Button = styled.button`
  width: 200px;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease 0s;
  background: white;
  cursor: pointer;
  outline: none;
  appearance: none;

   &:hover {
    transform: translateY(-3px);
  }
`

export default ExecuteButton
