import React from 'react'
import './Home.css'
import Experince from '../Experince/Experince'
const Home = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Logologo</h1>           
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" ></input>
        <label for="nav-toggle" className = "nav-toggle-label"> 
          <span className="label-span"></span> 
        </label>
        <nav> 
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Experince">Experince</a></li>
            <li><a href="#Projects">Projects</a></li>  
            <li><a href="#Qualifications">Qualifications</a></li>  
            <li><a href="#Skills">Skills</a></li>  
          </ul>
        </nav>
      </header>
        <div class="content">
        <div id='Home' data-aos="fade-in" data-aos-duration="4000" style={{height:"500px"}}>
          <div className="title">aaa</div>
          <div className="card">
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          <div>aa</div>
          </div>
        </div>
        <div id='Experince' data-aos="fade-in" data-aos-duration="4000" style={{height:"500px"}}>
        <div className="title">aaa</div>

          <Experince className="card"/>
        </div>
        <div id='Projects' data-aos="fade-in" data-aos-duration="4000" style={{height:"500px"}}>
        Projects
        </div>

        <div id='Qualifications' data-aos="fade-in" data-aos-duration="4000" style={{height:"500px"}}>
        Qualifications
        </div>

        <div id='Skills' data-aos="fade-in" data-aos-duration="4000" style={{height:"500px"}}>
        Skills
        </div>

        <div id='Skidlls' data-aos="fade-in" data-aos-duration="4000" style={{height:"500px"}}>
        card8998798798798798798
        </div>

        </div>
      </div>
  )
}


// Animations
// Fade animations:

// fade
// fade-up
// fade-down
// fade-left
// fade-right
// fade-up-right
// fade-up-left
// fade-down-right
// fade-down-left
// Flip animations:

// flip-up
// flip-down
// flip-left
// flip-right
// Slide animations:

// slide-up
// slide-down
// slide-left
// slide-right
// Zoom animations:

// zoom-in
// zoom-in-up
// zoom-in-down
// zoom-in-left
// zoom-in-right
// zoom-out
// zoom-out-up
// zoom-out-down
// zoom-out-left
// zoom-out-right
// Anchor placements:
// top-bottom
// top-center
// top-top
// center-bottom
// center-center
// center-top
// bottom-bottom
// bottom-center
// bottom-top
// Easing functions:
// linear
// ease
// ease-in
// ease-out
// ease-in-out
// ease-in-back
// ease-out-back
// ease-in-out-back
// ease-in-sine
// ease-out-sine
// ease-in-out-sine
// ease-in-quad
// ease-out-quad
// ease-in-out-quad
// ease-in-cubic
// ease-out-cubic
// ease-in-out-cubic
// ease-in-quart
// ease-out-quart
// ease-in-out-quart



export default Home
