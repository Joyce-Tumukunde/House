import React from 'react'
import'./About.css'
import house from '../../assets/house.png'
import joy from '../../assets/joy.jpg'
const About = () => {
  return (
    <section className='about'>
      <div className='home'>
      <div className='secTitle'>
        <h2 className='title'>WHO WE ARE</h2>
        <hr className='horizontal' />
      </div>
      <div className='disc'>
        <p>Welcome to SPLITE SPACE Website, where finding the perfect roommate is more than just a search – 
          it's a shared journey towards creating memorable living spaces. Our story is one of collaboration, 
          connection, and a commitment to making shared living an enriching experience for everyone involved.
          <br /><br />

          SPLIT SPACE Website started as a passion project among a group of friends who understood 
          the challenges of finding compatible roommates. Fueled by personal experiences and a shared vision for 
          community living, we embarked on a mission to simplify the roommate search process <br /><br />
          
          Since our humble beginnings, we've evolved into a thriving platform that connects individuals seeking not 
          just a living space but also a community. We believe that the right roommate can turn a house into a home, 
          and we are dedicated to facilitating those connections that go beyond shared rent payments.</p>

      </div>
      <br /><br />
      <div className='secTitle'>
        <h2 className='title'>ABOUT US</h2>
        <hr className='horizontal' />
      </div>
      <div className='disc'>
        <p>Welcome to Split Space, 
        where we believe that sharing the cost of housing should be simple, transparent, and beneficial for everyone involved. 
        Our mission is to create a platform that brings individuals together to collaboratively share the expenses of comfortable 
        living spaces, fostering a sense of community and financial ease.</p>

      </div>
      <br /><br />
      <div className='secTitle'>
        <h2 className='title'>OUR MISSION</h2>
        <hr className='horizontal' />
        </div>
        <div className='disc'>
        <p>At Split Space, we envision a future where the burden of housing costs is lightened through shared responsibility. 
          We aim to create a network of like-minded individuals who recognize the value of cooperative living and the positive 
          impact it can have on both their wallets and overall well-being.</p>
          </div>
          </div>
          <div className='h'>
      <div className='imag'>
        <img src={house} alt='about' className='behindImg' />
        </div>
      </div>
      <br /><br />
      <div className='home-about'>
        <div className='heading'>
        <h1>MEET OUR TEAM</h1>
        </div>
      <div className='team'>
        <div className='image-team'>
          <div className='im'>
          <img src={joy} alt="joyce"height={200} width={220} />
          </div>
          <div className='content-about'>
          <h2>Tumukunde Joyce</h2>
          <h4>Platform manager</h4>
          <p>Overseeing the day-to-day operations <br /> of a platform focused on facilitating <br /> shared housing expenses. </p>
          </div>
        </div>
        <br /><br />

        <div className='image-team'>
        <div className='im'>
          <img src={joy} alt="joyce"height={200} width={220} />
          </div>
          <div className='content-about'>
          <h2>Uwizeyimana Henriette</h2>
          <h4>Financial Analyst</h4>
          <p className='p'>Analyzing financial data related <br />to shared housing expenses.</p>
          </div>
        </div>

        <div className='image-team'>
        <div className='im'>
          <img src={joy} alt="joyce"height={200} width={220} />
          </div>
          <div className='content-about'>
          <h2>Uwizeyimana Henriette</h2>
          <h4>Software Engineer</h4>
          <p>Developing and maintaining the <br />technical infrastructure of a platform <br />for shared housing expenses.</p>
          </div>
        </div>

        <div className='image-team'>
        <div className='im'>
          <img src={joy} alt="joyce"height={200} width={220} />
          </div>
          <div className='content-about'>
          <h2>Uwizeyimana Henriette</h2>
          <h4>Marketing Specialist</h4>
          <p>Developing and executing marketing <br />strategies to promote a platform <br />for shared housing expenses.</p>
          </div>
        </div>


      </div>
    </div>
   

    </section>
  )
}

export default About