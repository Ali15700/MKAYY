import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import spongydoodle from '../../img/sppa.jpg';

export const Home = () => {
  return (
    <div className='home'>
       
        <div className='container'>
                <div className='doodle'>
                     <img src={spongydoodle} alt='' />
                 </div>
                 
                
        <Link to='/message'>
          <button className='btn-exp'>Message For Patrick</button>
        </Link>
               
    </div>
    
    </div>
  )
}

export default Home;