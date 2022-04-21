import * as React from "react"
import '../styles/main.scss'
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';

// markup
const IndexPage = () => {
  return (
      <div className='container'>
        <Header/>
          <Landing/>
      </div>
  )
}

export default IndexPage
