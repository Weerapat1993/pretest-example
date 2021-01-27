import { Link } from 'react-router-dom'
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </Layout>
  )
}

export default About;