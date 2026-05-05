import React, { useState } from "react";
import image from "../../../src/assets/signUpBackImage.jpeg";
import styles from "./SignUp.module.css"; // CSS Module import
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { signUpUser } from "../../features/auth/authSlice";


const SignUp = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const navigate  = useNavigate()

  const dispatch = useDispatch();

  const { loadingSignUp, error } = useSelector((state) => state.auth);

  const handleUserData = (e) => {
    setUserData({...userData, [e.target.name] : e.target.value });
    // console.log(userData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("userData",userData);

    if(userData.password != userData.confirmPassword){
        toast.error("Password and Confirm password are not match");
    }

    dispatch(signUpUser(userData)).then((res) => {
        if (res.payload.status) {
          toast.success("Welcome back to Shoply!");
          
            navigate("/authPages/Login");
        
            
        }else{
          const errorMessage = res.payload || "Some thing went wrong";
          toast.error(errorMessage || "Some thing went wrong");
        }
        console.log("userData", res.payload);

    });


    setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
    });

    

  }

  return (
    /* Background image inline style mein hi rahegi, lekin container class styles se aayegi */
    <div
      className={styles["signup-container"]}
      style={{ backgroundImage: `url(${image})` }}
    >
      <section className={styles["form-box"]}>
        <h2>Create Your Shoply Account</h2>
        <p>Join us and start shopping for millions of products!</p>

        {error && <span className={styles["errorPara"]}>{error}</span>}

        <form className={styles["signup-form"]} onSubmit={handleSubmit}>
          <div className={styles["input-group"]}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="e.g., Sarah Khan"
              required
              value={userData.name}
              onChange={handleUserData}
              name="name"
            />
          </div>

          <div className={styles["input-group"]}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="sarah.k@example.com"
              required
              value={userData.email}
              onChange={handleUserData}
              name="email"
            />
          </div>

          <div className={styles["input-group"]}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password should hava a Upper case letter a special charcter and a number the length of password 8 char"
              value={userData.password}
              onChange={handleUserData}
              name="password"
            />
          </div>

          <div className={styles["input-group"]}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              required
              value={userData.confirmPassword}
              onChange={handleUserData}
              name="confirmPassword"
            />
          </div>

          <div className={styles["input-group"]}>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="+92 3XX XXXXXXX"
              required
              value={userData.phoneNumber}
              onChange={handleUserData}
              name="phoneNumber"
            />
          </div>

          <button type="submit" className={styles["signup-btn"]} disabled={loadingSignUp}>
          {loadingSignUp ? "Loading..." : "Register"}
          </button>

          <p className={styles["login-link"]}>
            Already have an account? <Link to={"/authPages/Login"}>Login</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
