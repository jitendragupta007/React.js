import React from 'react'

const SignUp = () => {
  return (
    <section className="login-page">
    <div className="inner-box">
        <div className="title">login</div>
        <div className="login-flex">

            <div className="form-content">
               <div className="input-box">
                 <label> First name</label>
                 <input type="text" placeholder=""/>
               </div>
               <div className="input-box">
                 <label> Last name</label>
                 <input type="text" placeholder=""/>
               </div>
               <div className="input-box">
                 <label> Email</label>
                 <input type="text" placeholder=""/>
               </div>
               <div className="input-box">
                 <label>Create Password</label>
                 <input type="text" placeholder=""/>
               </div>
               <div className="input-box">
                 <label>Confirm Password</label>
                 <input type="text" placeholder=""/>
               </div>
               <button className="login-btn">Register</button>
               <p>By clicking 'Register', I agree to the <a href="terms-condition.html">Terms of Use</a> and <a href="privacy-policy.html">Privacy Policy</a> </p>
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

export default SignUp
