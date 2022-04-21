import * as React from "react"
import '../styles/main.scss'
import Header from '../sections/Header/Header';
import Landing from '../sections/Landing/Landing';

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
