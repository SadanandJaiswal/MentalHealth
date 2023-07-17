import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [user, setUser] = useState({
		name:"",
		email:"",
		password:""
	});

  const [passwordVisible, setPasswordVisible] = useState(false);

	const navigate = useNavigate();

  const submitForm = (event)=>{
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		axios.post("/register",{name,email,password})
		.then(response=>{
			console.log('response is ');
			console.log(response);
			if(response.data)
			{
				axios.get("/me").then(res=>{
					Cookies.set('userData', JSON.stringify(res.data) ,  { expires: 10*86400*1000 });
					if(Cookies.get('userData'))
					{
					  navigate('/');
					}
				})
				.catch((err)=>{
					console.log('unable to fetch user having error ',err);
				})
			}
		})
		.catch((e)=>{
			console.log('eroor is ',e);
		})
	}


  const registerDataChange = (e) =>{
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	useEffect(()=>{
		console.log(user.name);
		console.log(user.email);
		console.log(user.password);
	},[user]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.LoginForm_background}>
        <div className={styles.LoginForm_shape}></div>
        <div className={styles.LoginForm_shape}></div>
      </div>
      <form className={styles.LoginForm_form} encType="multipart/form-data" onSubmit={submitForm}>
        <h3>SignUp</h3>
        <label htmlFor="username">Username</label>
        <input
        onChange={registerDataChange} name="name" type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="email">Email</label>
        <input
        onChange={registerDataChange} name="email" type="text" placeholder="Email" id="email" />
        <label htmlFor="password">Password</label>
        <div className={styles.show_password_button}>
          <input
          onChange={registerDataChange}
            type={passwordVisible ? 'text' : 'password'}
            id="myInput"
            name="password"
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
