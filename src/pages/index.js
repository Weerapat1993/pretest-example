import { Link } from 'react-router-dom'
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <Link to="/question-1">Go to Question 1</Link>
      <Link to="/question-2">Go to Question 2</Link>
      <Link to="/question-3">Go to Question 3</Link>
    </Layout>
  )
}

export default Home;