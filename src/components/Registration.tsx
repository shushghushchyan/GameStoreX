import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import telegram from "../assets/Logos/telegram.svg";
import facebook from "../assets/Logos/facebook.svg";
import google from "../assets/Logos/google.svg";
import discord from "../assets/Logos/discord.svg";
import apple from "../assets/Logos/apple.svg";
import checkbox from "../assets/Logos/checkbox.svg";
import { registerUser } from "../api"; 

interface Logo {
  src: string;
  alt: string;
  path: string;
}

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});

  const logoArray: Logo[] = [
    { src: google, alt: "google", path: "https://www.google.com" },
    { src: apple, alt: "apple", path: "https://www.apple.com" },
    { src: facebook, alt: "facebook", path: "https://www.facebook.com" },
    { src: discord, alt: "discord", path: "https://www.discord.com" },
    { src: telegram, alt: "telegram", path: "https://www.telegram.org" },
  ];

  const validateEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || /^[0-9]{9,12}$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { email?: string; password?: string; confirmPassword?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email or phone number";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const user = await registerUser(email, password);
        console.log("User registered:", user);
        alert("Registration successful!");
        navigate("/login");
        
      } catch (error: any) {
        console.error("Error during registration:", error);
        setErrors({ email: "Registration failed. Please try again." });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="reg">
      <div className="registrationDiv">
        {/* Login/Register buttons */}
        <div className="loginregcheck">
          <div className="logreg">
            <button
              className={location.pathname === "/registration" ? "LoginPassive" : "loginRegist"}
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className={location.pathname === "/registration" ? "registrationReg" : "registrationRegPassive"}
              onClick={() => navigate("/registration")}
            >
              Registration
            </button>
          </div>
          <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
            <img className="checkbox" src={checkbox} alt="" />
          </button>
        </div>

        <form className="registrationREG" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Mobile"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.password}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.confirmPassword}</p>
          )}

          <div className="checkboxAndText">
            <input className="checkboxSoc" type="checkbox" />
            <a className="useSoc" href="#">
              Use social network
            </a>
          </div>
          <div>
            <button className="registrationAction" type="submit">
              Registration
            </button>
          </div>
        </form>

        {/* Social media buttons */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <a className="useSoc" href="#">
            Use social network
          </a>
          <div className="logos">
            {logoArray.map((logo, index) => (
              <a href={logo.path} key={index} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
