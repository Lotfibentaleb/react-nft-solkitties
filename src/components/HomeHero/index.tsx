import React from 'react'
import './styles.css'

export const HomeHero = () => {
  return (
    <div className='home-hero'>
      <div className='top-section'>
        <div className='welcome'>
          Welcome to
        </div>
        <div className='welcome-title'>
          SOL KITTIES
        </div>
        <div className='welcome-desc'>
          With some intro text or something, that will take some space 
        </div>
      </div>
      <div className='bottom-section'>
        <div className='sale'>
          <div className='sale-title'>NFT SALE</div>
          <div className='sale-collection'>The 1st drop of the Sol Kitties Collection</div>
          <div className='sale-time'>
            <div>
              01
              <div className='time-unit'>days</div>
            </div>
            <div> : </div>
            <div>
              07 
              <div className='time-unit'>hrs</div>
            </div>
            <div> : </div>
            <div>
              24
              <div className='time-unit'>min</div>
            </div>
            <div> : </div>
            <div>
              43 
              <div className='time-unit'>sec</div>
            </div>
          </div>
          <div className='sale-desc'>
            Sol Kitties is a revolutionary community-oriented
            NFT project on Solana with unique Sharikng Royalty
            Ecomony for Community.   &nbsp;&nbsp;
            <span className='sale-desc-link'>Check more details.</span>
          </div>
          <a href='https://discord.com/' className='join-discord'>
            <span className='join-discord-icon'></span>
            <span>Join our DISCORD SERVER</span>
          </a>
        </div>
        <div className='sale-image'>
          <div className='sale-image-wrapper'>
            <img src='assets/part1/SolKittie_0096.png' className='sale-image1' alt='image1' />
            <img src='assets/part1/SolKittie_0097.png' className='sale-image2' alt='image2' />
            <img src='assets/part1/SolKittie_0094.png' className='sale-image3' alt='image3'/>
          </div>
        </div>
      </div>
    </div>
  )
}
