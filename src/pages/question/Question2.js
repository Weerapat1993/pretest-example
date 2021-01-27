import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { useCategories } from '../../hooks/useCategories';

const Text = styled.span`
  color: ${props => props.color};
`

const Question2 = () => {
  const { data, loading, error } = useCategories()
  const [keyword, setKeyword] = useState('')

  const handleKeyword = (e) => {
    setKeyword(e.target.value)
  }
  const filterByKeyword = (item) => item.includes(keyword) 
  return (
    <Layout>
      <h1>Question 2</h1>
      <Link to="/">Go to Home</Link>
      <label for>Keyword</label>
      <input name="keyword" onChange={handleKeyword} value={keyword} />
      {loading ? <p>Loading ...</p> : (
        <ul>
          {data.filter(filterByKeyword).map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      )}
      {error ? <Text as="p" color="red">Error : {error}</Text> : null}
    </Layout>
  )
}

export default Question2;