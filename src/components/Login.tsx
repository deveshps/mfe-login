import React, { useState } from "react";
import TcgLogo from "../images/logo.a0185b04.svg";
import { useNavigate } from "react-router-dom";
import {useStateStore} from "src/store/state-store";
import styles from "../styles/login.module.css";
import { fetchAPIData } from '../common/apiRequest';

const Login = ({ pageData }: HomeProps) => {
  const navigate = useNavigate();
  const [emailOrPhonNumber, setEmailOrPhonNumber] = useState("");
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(true);
  const [isSendOtp, setSendOtp] = useState(false);
  const [otpNumber, setOtpNumber] = useState("");
  const [information,setInformation] = useStateStore('Info', {});
  const [isLoggedIn,setIsLoggedIn] = useStateStore('LoggedIn', false);


  // const validatePhoneNumber=(target)=>{
  //     let phoneNumberReg = new RegExp(/^[0-9\b\+\-\(\)]+$/)
  //     if(target.length <=10){
  //         console.log(phoneNumberReg.test(target))
  //         setPhonNumber(target)
  //         setPhoneNumberValid(true)
  //     } else{
  //         setPhoneNumberValid(false);
  //     }
  // }
  const sendOtp = async () => {
    let apiUrl = "/auth/api/v1/otp/send";
    if (emailOrPhonNumber.length > 5) {
      try {
        const apiData = await fetchAPIData(apiUrl,'POST', {"emailOrPhoneNumber" : emailOrPhonNumber}, null,true)
        setSendOtp(true);
      } catch (error) {
        setSendOtp(false);
        console.error("Error fetching data:", error);
        setInformation({type:"error",value: "Something went wrong, Please Check"})
      }
    } else {
      setInformation({type:"error",value: "Please enter the phone number or email"})
    }
  };
  const validateOtpNumber = (otpNumber: any) => {
    setOtpNumber(otpNumber);
  };
  const verifyOtp = async () => {
    // fetchAPIData(,'POST',).then((response)=>{
    //     if (response.code==200){
    //         console.log("response",response)
    //         console.log('sendOtp')
    //         let result = response.data;
    //         let accessTokenExpiry = Date.now() + result['expires_in'] * 1000;
    //         localStorage.setItem('access_token',result['access_token']);
    //         localStorage.setItem("refresh_token", result['refresh_token']);
    //         localStorage.setItem("access_token_expiry", accessTokenExpiry);
    //         navigate('/dashboard');
    //     }
    // })
    let apiUrl = "/api/v1/otp/verify";
    if (otpNumber.length > 1) {
      try {
            const apiData = await fetchAPIData(apiUrl,'POST',{"emailOrPhoneNumber":emailOrPhonNumber,"otpCode":otpNumber}, null,true)
            let result = apiData?.data;
            let accessTokenExpiry = Date.now() + result['expires_in'] * 1000;
            localStorage.setItem('access_token', result['access_token']);
            localStorage.setItem("refresh_token", result['refresh_token']);
            localStorage.setItem("access_token_expiry", accessTokenExpiry.toString());
            // navigate('/dashboard'); 
            setIsLoggedIn(true) // we can set a stateStorvariable like isloggedin:true and then redirect from host mfe if possible
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setInformation({type:"error",value: "Something went wrong, Please Check"})
      }
    } else {
      setInformation({type:"error",value: "Please enter the phone number or email"})
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <p className={styles.loginHeading}> TCG Login</p>
        <img src={TcgLogo} alt="File does not exist" />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.mainContainer}>
          {isSendOtp ? (
            //otp Part
            <>
              <div>
                <div className={styles.inputTitle}> Enter The OTP</div>
                <input
                  type="text"
                  value={otpNumber}
                  placeholder="Enter Otp"
                  className={styles.otpInputBox}
                  onChange={(e) => validateOtpNumber(e.target.value)}
                />
                {/* {!isPhoneNumberValid?<div style={{fontSize: '15px',fontFamily: 'serif',color:'red',marginBottom: '15px',marginLeft: '15px'}}>Phone Number must be atleast 10 numbers</div>:''} */}
              </div>
              <div className={styles.submitBtMr}>
                <button
                  // className={`send_otp_disable send_otp_enable `}
                  className={otpNumber.length > 0 ? styles.sendOtpEnable : styles.sendOtpDisable}
                  onClick={verifyOtp}
                >
                  submit
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className={styles.inputTitle}>
                  {" "}
                  Please Enter The Phone Number or Email
                </div>
                <input
                  type="text"
                  value={emailOrPhonNumber}
                  placeholder="Phone Number"
                  className={styles.phoneInputBox}
                  onChange={(e) => setEmailOrPhonNumber(e.target.value)}
                />
                {!isPhoneNumberValid ? (
                  <div className={styles.phoneErrorMsg}>
                    Phone Number must be atleast 10 numbers
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.sendOtpMr}>
                <button
                  className = {emailOrPhonNumber.length > 9 ? styles.sendOtpEnable : styles.sendOtpDisable}
                  // className={`send_otp_disable ${
                  //   emailOrPhonNumber.length > 9 ? "send_otp_enable" : ""
                  // }`}
                  onClick={sendOtp}
                >
                  Send Otp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';
// import { useStateStore } from 'src/store/state-store';
// import styles from '../styles/login.module.css';

// function Login({ pageData }: HomeProps) {
//   const [count] = useStateStore('CART', 0);
//   const title = pageData?.title || '...';

//   return (
//     <>
//       <h1 className={styles.headingText}>React App 1</h1>
//       <div>Title: {title}</div>
//       <div>Cart: {count}</div>
//       <div>log in page is this</div>
//     </>
//   );
// }

// export default Login;

interface HomeProps {
  pageData?: any;
}
