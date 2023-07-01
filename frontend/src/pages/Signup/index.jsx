import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import {useState,useEffect} from 'react';
import Cookies from 'js-cookie';

function Signup() {

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	  });

	const { name, email, password } = user;

	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};

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
				Cookies.set('userData', {"email":response.data.user.email}, { expires: 10*86400*1000 }); // Expires in 7 days
			}
		})
		.catch((e)=>{
			console.log('eroor is ',e);
		})
	}

	// const submitForm = async (event)=>{
	// 	event.preventDefault(); // Prevent the default form submission
  	// 	const form = event.target;
	// 	const formData = new FormData(form);

	// 	formData.set("name", name);
	// 	formData.set("email", email);
	// 	formData.set("password", password);

	// 	try{
	// 		const config = { headers: { "Content-Type": "multipart/form-data" } };
	// 		await axios.post(`/register`, formData);
	// 		// console.log(result.response.data);
	// 	}
	// 	catch(e){
	// 		console.log('error is ',e);
	// 	}
	// }

	const registerDataChange = (e) =>{
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	useEffect(()=>{
		console.log(user.name);
		console.log(user.email);
		console.log(user.password);
	},[user])


	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<form encType="multipart/form-data" onSubmit={submitForm}>
				<div className={styles.form_container}>
					<div className={styles.left}>
						<img className={styles.img} src="./images/signup.jpg" alt="signup" />
					</div>
					<div className={styles.right}>
						<h2 className={styles.from_heading}>Create Account</h2>
						<input type="text" 
						// value="saddy92" 
							onChange={registerDataChange}
							className={styles.input} placeholder="Username" name="name"/>
						<input type="text" 
						// value="saddy92@gmail.com" 
						className={styles.input} placeholder="Email" name="email"
						onChange={registerDataChange}/>
						<input
							type="password"
							className={styles.input}
							placeholder="Password"
							name="password"
							// value="saddy92"
							onChange={registerDataChange}
						/>
						<button className={styles.btn}>Sign Up</button>
						<p className={styles.text}>or</p>
						<button className={styles.google_btn} onClick={googleAuth}>
							<img src="./images/google.png" alt="google icon" />
							<span>Sing up with Google</span>
						</button>
						<p className={styles.text}>
							Already Have Account ? <Link to="/login">Log In</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Signup;
