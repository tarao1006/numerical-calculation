import React from 'react'
import styled from 'styled-components'
import MatrixCell from './matrixcell'

const Matrix = ({ rowCount, columnCount, values }) => {

  let mat = []
  for (let i = 0; i < rowCount; ++i) {
    let row = []
    for (let j = 0; j < columnCount; ++j) {
      row.push(
        <td key={ (i * rowCount + j).toString() }>
          <MatrixCell
            x={ i }
            y={ j }
            val={ values[i][j] }
          />
        </td>)
    }
    mat.push(<tr key={ i }>{ row }</tr>)
  }

  return (
    <Table>
      <tbody>
        { mat }
      </tbody>
    </Table>
  )
}

export default Matrix

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 2px rgba(0, 0, 0, 0.08);
`
