import { useDispatch, useSelector } from 'react-redux'
import useMatrix from './matrix'

export const CHANGE_RELAXATION_PARAMETER_VALUE = 'CHANGE_RELAXATION_PARAMETER_VALUE'

const useSorMethodLinearEquation = () => {

  const relaxationParameter = useSelector(state => state.sorMethodLinearEquation.relaxationParameter)
  const dispatch = useDispatch()

  const changeRelaxationParameterValue = value => {
    dispatch({
      type: CHANGE_RELAXATION_PARAMETER_VALUE,
      value
    })
  }

  return {
    ...useMatrix({kind: "sorMethodLinearEquation"}),
    relaxationParameter,
    changeRelaxationParameterValue
  }
}

export default useSorMethodLinearEquation
