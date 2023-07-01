import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Inside your component
// const navigate = useNavigate();

// Example usage
// navigate('/home');



function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const [userName,setUserName] = useState("");

  const { email, password } = user;

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  // const history = useHistory();
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
        Cookies.set('userName', res.data.user.name, { expires: 10*86400*1000 }); // Expires in 7 days
        Cookies.set('userEmail',res.data.user.email, { expires: 10*86400*1000 });
        Cookies.set('userData', res.data ,  { expires: 10*86400*1000 });
        if(Cookies.get('userName'))
        {
          navigate('/');
        }

        // setUser(res.data);
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

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
      <form encType="multipart/form-data" onSubmit={handelLogin}>
        <div className={styles.form_container}>
          <div className={styles.left}>
            <img className={styles.img} src="./images/login.jpg" alt="login" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.from_heading}>Members Log in</h2>
            <input type="text" 
				className={styles.input} 
				onChange={loginDataChange}
				name="email"
				placeholder="Email" />
            <input
              type="text"
              className={styles.input}
              placeholder="Password"
			  name="password"
			  onChange={loginDataChange}
            />
            <button className={styles.btn}>Log In</button>
            <p className={styles.text}>or</p>
            <button className={styles.google_btn} onClick={googleAuth}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sing in with Google</span>
            </button>
            <p className={styles.text}>
              New Here ? <Link to="/signup">Sing Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
