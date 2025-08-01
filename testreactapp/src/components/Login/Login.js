import { useState } from 'react';
import './Login.css';


function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    function submitLoginForm(e) {
        e.preventDefault();
        let offTime = 1500;
        if(userId === 'anurag' && password === 'anurag@123'){
            setStatus('welcome. you logged in successfully.');
            offTime = offTime * 2;
        }else{
            setStatus('failed to login.');
        }
        setTimeout(() => setStatus(''), offTime);
    }
    return (
        <>
            <form onSubmit={submitLoginForm}>
                {status && (<i>{status}</i>)}
                <h3>Login Now!</h3>
                <br />
                <input name='userid' placeholder='enter user id/ phone number/ email id' type='text'
                    onChange={(e) => setUserId(e.target.value)} value={userId} />
                    <br />
                <input name='password' placeholder='enter password' type='password'
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                    <br />
                <button type='submit'>Login</button>
            </form>
        </>
    );
}

export default Login;