import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import loginImg from "../../assets/loginPageImage.jpg"; // Aapki di hui image
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { loadingLogin, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials)).then((res) => {
      if (res.payload.status == 200 || res.payload.status == true) {
        toast.success("Welcome back to Shoply!");
        localStorage.setItem("token", res.payload.token);
        
        navigate("/User/UserDashboard");
      }else{
        const errorMessage = res.payload || "Some thing went wrong";
        toast.error(errorMessage || "Some thing went wrong");
      }
      console.log("userData", res.payload);
    });

    setCredentials({
        email : "",
        password : ""
    })
  };

  return (
    <div className={styles.loginPage} style={{ backgroundImage: `url(${loginImg})` }}>
      <div className={styles.overlay}>
        <div className={styles.loginCard}>
          <h2>Welcome Back</h2>
          <p>Login to continue your shopping journey</p>

        { error && <p className={styles.errorMessage}>{error}</p> }

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                value={credentials.email}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={handleChange}
                value={credentials.password}
              />
            </div>

            <button type="submit" className={styles.loginBtn} disabled={loadingLogin}>
              {loadingLogin ? "Verifying..." : "Login"}
            </button>
          </form>

          <p className={styles.switch}>
            New to Shoply? <Link to={"/authPages/SignUp"}>Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;