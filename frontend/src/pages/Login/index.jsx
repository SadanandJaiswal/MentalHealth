import React, { useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const navigate = useNavigate();

  const handelLogin = (event) => {
    event.preventDefault();

	axios.post('/login',{email,password})
	.then(response=>{
		console.log('response is ');
		console.log(response);
		if(response.data)
		{
      axios.get("/me").then(res=>{
        Cookies.set('userData', JSON.stringify(res.data) ,  { expires: 10*86400*1000 });
        console.log('user data is')
        console.log(res.data)
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
	
  };

  const loginDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
		console.log(user.email);
		console.log(user.password);
	},[user])




  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.LoginForm_background}>
        <div className={styles.LoginForm_shape}></div>
        <div className={styles.LoginForm_shape}></div>
      </div>
      <form className={styles.LoginForm_form} encType="multipart/form-data" onSubmit={handelLogin}>
        <h3>Login Here</h3>
        <label htmlFor="username">Email</label>
        <input 
        type="text" 
        placeholder="Email" 
        onChange={loginDataChange}
				name="email"
        id="username" />
        <label htmlFor="password">Password</label>
        <div className={styles.show_password_button}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="myInput"
            placeholder="Enter your password"
            name="password"
			      onChange={loginDataChange}
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            id="togglePassword"
            onClick={togglePasswordVisibility}
          />
        </div>
        <button>Log In</button>
        <div className={styles.LoginForm_social}>
          <div className={styles.go}>
            <FontAwesomeIcon icon={faUserPlus} />
            <span className={styles.signupText}>
              <Link to="/signup">  Sign Up</Link>
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
