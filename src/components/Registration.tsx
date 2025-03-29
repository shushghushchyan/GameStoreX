import React from "react";
import telegram from "../assets/Logos/telegram.svg";
import facebook from "../assets/Logos/facebook.svg";
import google from "../assets/Logos/google.svg";
import discord from "../assets/Logos/discord.svg";
import apple from "../assets/Logos/apple.svg";
import checkbox from "../assets/Logos/checkbox.svg";
import { useNavigate } from "react-router-dom";
interface Logo {
  src: string;
  alt: string;
  path: string;
}

const Registration: React.FC = () => {
  const navigate = useNavigate()
  const logoArray: Logo[] = [
    { src: google, alt: 'google', path: 'https://www.google.com' },
    { src: apple, alt: 'apple', path: 'https://www.apple.com' },
    { src: facebook, alt: 'facebook', path: 'https://www.facebook.com' },
    { src: discord, alt: 'discord', path: 'https://www.discord.com' },
    { src: telegram, alt: 'telegram', path: 'https://www.telegram.org' },
  ];

  return (
    <div className="reg">
      <div className="registrationDiv">
        <div className="loginregcheck" > 
            <div className="logreg">
                <button className="loginReg" onClick={()=> navigate("/Login")}>Login</button>
                <button className="registrationReg">Registration</button>
            </div>
            <button style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer"
            }}><img className="checkbox" src={checkbox} alt="" /></button>
        </div>
     
        <form className="registration" action="registration">
          <input type="text" placeholder="Email or Mobile" />
          <input type="text" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="checkboxAndText">
            <input className="checkboxSoc" type="checkbox" />
            <a  className='useSoc'href="">Use social network</a>
          </div>
          <button className="registrationAction" type="submit">Registration</button>

        </form>
        <div style={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'0.75rem',
        }}>
             <a  className='useSoc'href="">Use social network</a>
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
