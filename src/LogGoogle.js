import './css/LoginSection.css';
import icon from './Images/image 2.png';
import { Routes, Route, Link } from "react-router-dom";

function LogGoogle() {

    const title = "Login to your Account";
    const text = "See what is going on with your business";

    const link = 'https://www.google.com/';
    return (
        <div className="section">
            <div className="title">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <button className='btn'>
                <img
                    className='icon'
                    src={icon} />
                <a target='_blank' href={link}><span>Continue with Google</span></a>
            </button>
            <div className='signIn'>
                <span>---------- or Sign in with Email ----------</span>
            </div>

        </div >
    )
}

export default LogGoogle;