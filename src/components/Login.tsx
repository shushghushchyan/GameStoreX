import React, { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import telegram from "../assets/Logos/telegram.svg";
import facebook from "../assets/Logos/facebook.svg";
import google from "../assets/Logos/google.svg";
import discord from "../assets/Logos/discord.svg";
import apple from "../assets/Logos/apple.svg";
import checkbox from "../assets/Logos/checkbox.svg";
import { loginUser } from "../api";

interface Logo {
  src: string;
  alt: string;
  path: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  const logoArray: Logo[] = [
    { src: google, alt: "google", path: "https://www.google.com" },
    { src: apple, alt: "apple", path: "https://www.apple.com" },
    { src: facebook, alt: "facebook", path: "https://www.facebook.com" },
    { src: discord, alt: "discord", path: "https://www.discord.com" },
    { src: telegram, alt: "telegram", path: "https://www.telegram.org" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Please enter your email or phone number.";
    } else if (!isValidEmail(email) && !isValidPhoneNumber(email)) {
      newErrors.email = "Please enter a valid email or phone number.";
    }
    

    if (!password) {
      newErrors.password = "Please enter your password.";
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters.";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const user = await loginUser(email, password);
        console.log("User logged in:", user);
        alert("Login successful!");
        navigate("/orders"); 
      } catch (error: any) {
        console.error("Error during login:", error);

        
        if (error.response) {
          console.error("Error response from API:", error.response);
          setErrors({
            general: error.response.data?.message || "Login failed. Please try again.",
          });
        } else if (error.request) {
          console.error("No response from server:", error.request);
          setErrors({
            general: "No response from the server. Please check your network.",
          });
        } else {
          console.error("Unknown error:", error);
          setErrors({
            general: "An error occurred while processing your login. Please try again.",
          });
        }
      }
    } else {
      setErrors(newErrors); 
    }
  };
  const isValidPhoneNumber = (phone: string) => {
    const phoneRegex = /^\+?\d{8,15}$/;
    return phoneRegex.test(phone);
  };
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="reg">
      <div  className="registrationDiv  ">
        <div className="loginregcheck">
          <div className="logreg">
         
<button
  className={location.pathname === "/login" ? "loginRegist" : "LoginPassive"}
  onClick={() => navigate("/login")}
>
Login
</button>

<button
  className={location.pathname === "/login" ? "registrationRegPassive" : "registrationReg"}
  onClick={() => navigate("/registration")}
>
  Registration
</button>


          </div>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
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
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.password}</p>
          )}

          {errors.general && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.general}</p>
          )}

          <div>
            <button className="registrationAction" type="submit">
              Login
            </button>
          </div>
        </form>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <a className="useSoc" href="">
            Use social network
          </a>
          <div className="logos">
            {logoArray.map((logo, index) => (
              <a href={logo.path} key={index} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
          <div className="forgotepasswordDiv">
            <a className="forgotepassword" href="">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
