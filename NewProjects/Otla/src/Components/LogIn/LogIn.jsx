import React from 'react'

const LogIn = () => {
  return (
    <section className="login-page hh">
            <div className="inner-box">
                <div className="title">login</div>
                <div className="login-flex">

                    <div className="form-content">
                       <div className="input-box">
                         <label> Email</label>
                         <input type="text" placeholder=""/>
                       </div>
                       <div className="input-box">
                         <label>Password</label>
                         <input type="text" placeholder=""/>
                       </div>
                       <button className="login-btn">Login</button>
                       <a href="" className="forget-password">Forget Password ?</a>
                    </div>

                    <ul className="login-buttons">
                        <li><a href=""><img src="assets/images/home/binance.svg" alt=""/> <span>Continue with Binance</span></a></li>
                        <li><a href="" className="fb"><i className="fa-brands fa-facebook"></i> <span>Continue with Facebook</span></a></li>
                        <li><a href="" className="google"><i className="fa-brands fa-google"></i><span>Continue with Google</span></a></li>
                        <li><a href="" className="wechat"><i className="fa-brands fa-weixin"></i><span>Continue with Wechat</span></a></li> 
                    </ul>
                </div>
            </div>
         </section>
  )
}

export default LogIn
