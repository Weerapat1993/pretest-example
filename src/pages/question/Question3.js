import { Link } from 'react-router-dom'
import Layout from '../../components/Layout';

const Question3 = () => {
  return (
    <Layout>
      <h1>Question 3</h1>
      <Link to="/">Go to Home</Link>
      <p>Go to file <b>./question-3/yourfile.js</b></p>
    </Layout>
  )
}

export default Question3;