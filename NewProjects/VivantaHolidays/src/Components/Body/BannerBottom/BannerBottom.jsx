import React from 'react'

const BannerBottom = () => {
  return (
    <div>
       <ul className="banner-bottom container">
            <li>
                <figure><img src="/assets/images/home/more.svg" alt="More" /></figure>
                <span>More</span>
                <strong>destinations</strong>
                <p>than you can count</p>
            </li>
            <li>
                <figure><img src="/assets/images/home/best.svg" alt="Best" /></figure>
                <span>best</span>
                <strong>price guarantee</strong>
                <p>we guarantee you the best price</p>
            </li>
            <li>
                <figure><img src="/assets/images/home/great.svg" alt="Great" /></figure>
                <span>great</span>
                <strong>customer service</strong>
                <p>call our customer care for help</p>
            </li>
            <li>
                <figure><img src="/assets/images/home/super.svg" alt="Super" /></figure>
                <span>super</span>
                <strong>fast booking</strong>
                <p>easy booking of packages</p>
            </li>
        </ul>
    </div>
  )
}

export default BannerBottom
