import React from 'react'
import Help from './Help'
import ("./home.scss")
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
      <div className='mainBack'>
      </div>
      <div className='threeDivs'>
        <div className='threeDiv grayS'>
          <h3>RESCUE AN ORPHAN</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid commodi iusto alias adipisci veritatis quas at nihil eveniet illo?</p>
        </div>
        <div className='threeDiv orangeS'>
          <h3>RESCUE AN ORPHAN</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid commodi iusto alias adipisci veritatis quas at nihil eveniet illo?</p>
        </div>
        <div className='threeDiv redS'>
          <h3>RESCUE AN ORPHAN</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid commodi iusto alias adipisci veritatis quas at nihil eveniet illo?</p>
        </div>
      </div>
      <Help/>
    </div>
  )
}

export default Home