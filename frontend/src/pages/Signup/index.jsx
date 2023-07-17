import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.LoginForm_background}>
        <div className={styles.LoginForm_shape}></div>
        <div className={styles.LoginForm_shape}></div>
      </div>
      <form className={styles.LoginForm_form}>
        <h3>SignUp</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email" />
        <label htmlFor="password">Password</label>
        <div className={styles.show_password_button}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="myInput"
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            id="togglePassword"
            onClick={togglePasswordVisibility}
          />
        </div>
        <button className={styles.signinButton}>Sign In</button>
        <div className={styles.LoginForm_social}>
          <div className={styles.go}>
            <FontAwesomeIcon icon={faUserPlus} />
            <span className={styles.signupText}>
              <Link to="/login"> Login</Link>
            </span>
          </div>
          {/* <div className="fb">
            <i className="fa fa-facebook-official"></i>
            Facebook
          </div> */}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
