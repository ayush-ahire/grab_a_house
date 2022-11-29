import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ReactComponent as ArrowrightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import VisibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth';
function Signin() {
    const [showPassword, setshowPassword] = useState(false)
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const navigate = useNavigate()
    const onChange = (e) => {
        setformData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value

        }))

    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential) {
                navigate('/profile')
            }
            toast.success('Signin Successful')
        }

        catch (error) {
            toast.error('Error Invalid Credentials')
        }
    }
    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Welcome Back</p>
                    <form onSubmit={onSubmit}>
                        <input
                            type="email"
                            name="email"
                            className='emailInput' value={email}
                            id="email"
                            placeholder='Email'
                            onChange={onChange}

                        />
                        <div className="passwordInputDiv">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="passwordInput" value={password}
                                id='password'
                                placeholder='Password'
                                onChange={onChange} />

                            <img src={VisibilityIcon}
                                alt="show password"
                                className="showPassword"
                                onClick={() => setshowPassword((prevState) => !prevState)} />
                        </div>
                        <Link to='/ForgotPassword' className="forgotPasswordLink">Forgot Password</Link>
                        <div className="signInBar">
                            <p className="sigInText">
                                Sign In
                            </p>
                            <button className="signInButton"><ArrowrightIcon height='36px' /></button>
                        </div>
                    </form>
                    <OAuth/>
                    <Link to='/Signup' className="registerLink">Sign Up Instead</Link>
                </header>
            </div>
        </>
    )
}

export default Signin