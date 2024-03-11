import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  console.log(props)
  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find the Job that
          <br />
          Fits your life
        </h1>
        <p className="home-para">
          Millions of People are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button className="home-btn" type="button" onClick={onClickFindJobs}>
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
