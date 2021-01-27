
import { useEffect } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer'
import { Col, Row } from "./Grid";

const Input = styled.input`
  width: 90%;
`

const options = ['isPrime', 'isFibanacci'];
const fibanacciMax = 50;

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
const isFibanacci = (arr, num) => arr.filter(item => item === num).length > 0

const Layout = ({ children }) => {
  const [state, setState] = useImmer({
    num: 0,
    type: 'isPrime',
    fibanacciNums: [],
  })

  useEffect(() => {
    const fibanacciNums = []
    for(let i = 0; i < fibanacciMax; i++) {
      if(i === 0) {
        fibanacciNums.push(1)
      } else if(i === 1) {
        fibanacciNums.push(2)
      } else {
        fibanacciNums.push(fibanacciNums[i - 2] + fibanacciNums[i - 1])
      }
    }
    setState(draft => {
      draft.fibanacciNums = fibanacciNums
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNumber = (e) => {
    setState((draft) => {
      draft.num = e.target.value
    })
  }
  const handleSubmitColOne = (e) => {
    e.preventDefault()
    setState((draft) => {
      if(draft.num < 0) {
        draft.num = 1
      } else {
        draft.num = Math.round(draft.num)
      }
    })
  }

  const handleSelectType = (e) => {
    setState((draft) => {
      draft.type = e.target.value
    })
  }
  const isCorrect = state.type === 'isPrime' 
    ? isPrime(state.num) 
    : isFibanacci(state.fibanacciNums, state.num);
  return (
    <Row>
      <Col xs="100px" sm="200px">
        <form onSubmit={handleSubmitColOne}>
          <Input type="number" name="num" onChange={handleNumber} value={state.num} />
        </form>
      </Col>
      <Col xs="auto">
        <select onChange={handleSelectType}>
          {options.map(item => (
             <option key={item} value={item} >{item}</option>
          ))}
        </select>
        {children}
      </Col>
      <Col align="center" xs="300px">
        {state.type} = {isCorrect.toString()}
      </Col>
    </Row>
  )
}

export default Layout;
