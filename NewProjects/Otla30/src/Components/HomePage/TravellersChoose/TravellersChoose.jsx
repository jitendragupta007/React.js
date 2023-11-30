import React from 'react'

const TravellersChoose = () => {
  return (
    <section className="otla-travel container">
    <div className="heading">Here's Why Travelers Choose OtlaTravel</div>
    <ul>
        <li>
            <figure><img src="/assets/images/home/get.png" alt="" /></figure>
            <div className="title">Get Great Deals!</div>
            <p>Choose from 500+ airlines for low airfares!</p>
        </li>
        <li>
            <figure><img src="/assets/images/home/prlce.png" alt="" /></figure>
            <div className="title">Price Match Promise</div>
            <p>Price Match Promise</p>
        </li>
        <li>
            <figure><img src="/assets/images/home/easy.png" alt="" /></figure>
            <div className="title">Easy Cancellation</div>
            <p>Convenient self-service options available online</p>
        </li>
        <li>
            <figure><img src="/assets/images/home/expert.png" alt="" /></figure>
            <div className="title">Expert Guidance</div>
            <p>Get personalized assistance from our travel experts</p>
        </li>
    </ul>
</section>
  )
}

export default TravellersChoose
