import React from 'react'
import styled from 'styled-components'
import VectorCell from './vectorcell'

const Vector = ({ size, values, readOnly, id }) => {

  let tmp = []
  for (let i = 0; i < size; ++i) {
    tmp.push([values[i]])
  }
  values = [].concat(tmp)

  let vec = []
  for (let i = 0; i < size; ++i) {
    let row = []
    for (let j = 0; j < 1; ++j) {
      row.push(
        <td key={ `${id}${(i * size + j).toString()}` }>
          <VectorCell
            x={ i }
            y={ j }
            val={ values[i][j] }
            readOnly={ readOnly }
          />
        </td>)
    }
    vec.push(<tr key={ i }>{ row }</tr>)
  }

  return (
    <Table>
      <tbody>
        { vec }
      </tbody>
    </Table>
  )
}

export default Vector

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 2px rgba(0, 0, 0, 0.08);
`
