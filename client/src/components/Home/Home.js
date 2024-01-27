import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
      <h2 className='home-heading'>Simplify Learning with unique AI powered system</h2>
      <p className='home-subheading'>Explore filtered resources, personalised roadmaps, video explanation with timestamps AND interactive learning experience without the barriers of language and region! </p>
      <Link className="get-started-btn" to="#">Get Started</Link>
      <div className="home-quote-container">
        <p className="quote-left">Who said Learning has to be difficult?</p>
        <p className="quote-right">With our advanced curated AI called Genius, we are here to simplify your entire process of learning.  Genius takes care of everything to ensure you receive effortless guidance in your journey of seeking knowledge.</p>
      </div>
      <iframe className='home-video' src="https://www.youtube.com/embed/kj1-rR3udNs?si=Vl3WVI-XkK6ylZbp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <img src="images/home-whatsapp.svg" alt="" className='home-whatsapp-img' />
    </div>
  )
}

export default Home