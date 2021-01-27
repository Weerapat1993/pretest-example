import styled from 'styled-components';

const columnCalculate = (grid) => {
  const columnTotal = 12;
  if(typeof grid === 'number') {
    const width = 100 / (columnTotal / grid);
    return `width: ${width}%; flex: 0 0 ${width}%;`
  }
  if(typeof grid === 'string' && grid === 'auto') {
    return `flex: 1;`;
  }
  if(typeof grid === 'string' && grid.includes('px')) {
    return `flex: 0 0 ${grid}; width: ${grid};`;
  }
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${props => columnCalculate(props.xs)}
`