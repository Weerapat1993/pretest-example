import { Link } from 'react-router-dom'
import Layout from '../../components/Layout';

const Question1 = () => {
  return (
    <Layout>
      <h1>Question 1</h1>
      <Link to="/">Go to Home</Link>
    </Layout>
  )
}

export default Question1;