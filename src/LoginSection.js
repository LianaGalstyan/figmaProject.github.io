import { useEffect, useState } from 'react';
import './css/LoginSection.css';
import Img1 from './Images/Group 1686550876.png';
import LogGoogle from './LogGoogle';

function LoginSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cannot be empty !');
    const [passwordError, setPasswordError] = useState('Password cannot be empty !');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('Incorrect !')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length < 8) {
            setPasswordError('Minimum number of passwords must be 8')
            if (!e.target.value) {
                setPasswordError('Password cannot be empty !')
            } if ((String(e.target.value).toLocaleLowerCase())) {
                setPasswordError('uppercase and lowercase letters are required in the password')
            }
        } else {
            setPasswordError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break

            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className="login-section">
            <div><img src={Img1} /></div>
            <LogGoogle />
            <div className='login-form'>
                <form className='form-section'>

                    <label> Email<br />
                        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                        <input
                            onChange={e => emailHandler(e)}
                            onBlur={e => blurHandler(e)}
                            value={email}
                            name='email'
                            type='text'
                            className='input'
                            placeholder='mail@abc.com'
                        />
                    </label>

                    <label className='pass-lab'>Password<br />
                        {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <input
                            onChange={e => passwordHandler(e)}
                            onBlur={e => blurHandler(e)}
                            value={password}
                            name='password'
                            type='password'
                            placeholder='Enter your password . . .'
                            className='input'
                        />
                        <div className='block'>
                            <div>
                                <label class="container">
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmark"></span>Remember Me
                                </label>
                            </div>
                            <span className='forgot'>Forgot Password?</span></div>
                    </label>

                    <button disabled={!formValid} className='log-btn' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginSection;