export const updateValues = size => {
  let newCoefficientMatrix = []
  let newRightHandSideVector = []
  for (let i = 0; i < size; ++i) {
    let row = []
    for (let j = 0; j < size; ++j) {
      if (i == j) row.push((Math.floor(Math.random() * 10) + 10) * 10);
      else if (Math.abs(i - j) <= 1) row.push((Math.floor(Math.random() * 10)) * 2);
      else row.push(0)
    }
    newCoefficientMatrix.push(row)
  }
  for (let i = 0; i < size; ++i) {
    newRightHandSideVector.push(Math.floor(Math.random() * 10) - 5);
  }

  return [ size, newCoefficientMatrix, newRightHandSideVector ]
}

export const validateSize = size => {
  let res = Number.parseInt(size)
  if (res >= 10) {
    res = 10
  } else if (res <= 2) {
    res = 2
  }

  return res
}

export const changeSize = (size, coefficientMatrix, rightHandSideVector) => {
  const oldSize = coefficientMatrix.length
  let newSize = validateSize(size)

  let newCoefficientMatrix = []
  let newRightHandSideVector = []
  if (oldSize < newSize) {
    for (let i = 0; i < newSize; ++i) {
      let newRow = []
      for (let j = 0; j < newSize; ++j) {
        if (i >= oldSize || j >= oldSize) {
          newRow.push(0)
        } else{
          newRow.push(coefficientMatrix[i][j])
        }
      }
      newCoefficientMatrix.push(newRow)
    }
    for (let i = 0; i < newSize; ++i) {
      if (i >= oldSize) {
        newRightHandSideVector.push(0)
      } else{
        newRightHandSideVector.push(rightHandSideVector[i])
      }
    }
  } else {
    for (let i = 0; i < newSize; ++i) {
      let newRow = []
      for (let j = 0; j < newSize; ++j) {
        newRow.push(coefficientMatrix[i][j])
      }
      newCoefficientMatrix.push(newRow)
    }
    for (let i = 0; i < newSize; ++i) {
      newRightHandSideVector.push(rightHandSideVector[i])
    }
  }
  return [newSize, newCoefficientMatrix, newRightHandSideVector]
}


export const changeMatrixValue = (x, y, values, val) => {
  let res = [].concat(values)
  res[x][y] = val
  return res
}

export const changeVectorValue = (i, j, values, val) => {
  let res = [].concat(values)
  res[i] = val
  return res
}
