import React from 'react'
import "../styles/Shimmer.css"
import { Hearts} from 'react-loader-spinner'

const ShimmerUi = () => {
  return (
    <>
    <div id="ShimmerTop">
    <div className="vortex">
    <Hearts 
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>
    
      <div>
      <h4>Searching for the best results nearby you...</h4>
      </div>
    </div>
     <div className='shimmerMain'>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     <div className ="shimmerUi">
     </div>
     
    </div>
    </>
  )
}

export default ShimmerUi
