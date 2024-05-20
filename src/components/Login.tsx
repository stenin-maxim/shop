import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    const navigate = useNavigate();

    const onButtonClick = () => {
        // You'll update this function later...
    }

    return (
        <form className='mainContainer'>
            <div className='titleContainer'>
                <label htmlFor="">Email</label>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <div className='inputContainer'>
                <label>Password</label>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'}/>
            </div>
        </form>
    )
}

export default Login;