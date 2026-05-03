import React, { useState } from "react";
import image from "../../../src/assets/signUpBackImage.jpeg";
import styles from "./SignUp.module.css"; // CSS Module import

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleUserData = (e) => {
    setUserData({...userData, [e.target.name] : e.target.value });
    // console.log(userData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("userData",userData);
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

        <form className={styles["signup-form"]}>
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
              title="Password mein kam az kam ek Uppercase letter, ek number, aur ek special character hona chahiye."
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

          <button type="submit" className={styles["signup-btn"]} onClick={handleSubmit}>
            Create Account
          </button>

          <p className={styles["login-link"]}>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
