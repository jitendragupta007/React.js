import React from 'react'
import { Link } from 'react-router-dom'

const LiveAuctionTable = () => {
  return (
    <div>
     <div className="container">
    
       <div className="table-responsive">
           <table className="table ">
              <thead>
                  <tr>
                      <th>  Pair</th>
                      <th>  Last Price</th>
                      <th>  24H Change</th>
                      <th>  24H High</th>
                      <th>  24H Low</th>
                      <th>  24H Vol</th>
                      <th>  24H Turnover</th>
                      <th>  Operation</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="">  <div className="td_div">  <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-danger ">-1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="#" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
                  <tr>
                      <td className="">  <div className="td_div"> <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-success ">1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="xyz" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
                  <tr>
                      <td className="">  <div className="td_div">  <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-danger ">-1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="xyz" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
                  <tr>
                      <td className="">  <div className="td_div">  <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-success ">1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="xyz" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
                  <tr>
                      <td className="">  <div className="td_div">  <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-danger ">-1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="xyz" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
                  <tr>
                      <td className="">  <div className="td_div">  <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-success ">1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="xyz" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
                  <tr>
                      <td className="">  <div className="td_div">  <img src="images/coins/binance.png" className="coinimg" alt=""/> Bitcoin <span className="color-grey">binance</span></div></td>
                      <td>$56,623.54</td>
                      <td><span className="color-green text-danger ">-1.74</span> </td>
                      <td>  39045.83 </td>
                      <td>  39045.83 </td>
                      <td>  40105.92 </td>
                      <td>  binance </td>
                      <td><Link to="xyz" className="btn btn-theme btn-sm">Trade</Link></td>
                  </tr>
              </tbody>
          </table>
        </div>

    </div>
   
      
    </div>
  )
}

export default LiveAuctionTable
