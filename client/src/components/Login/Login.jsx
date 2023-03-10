import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api'

const Login = ({ setUser, setSecret }) => {
	const [isRegister, setIsRegister] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [triggerLogin, resultLogin] = usePostLoginMutation()
	const [triggerSignUp] = usePostSignUpMutation()

	const handleLogin = () => {
		triggerLogin({ username, password })
	}

	const navigate = useNavigate()

	const handleRegister = () => {
		triggerSignUp({ username, password })

		navigate('/chat')
	}

	useEffect(() => {
		if (resultLogin.data?.response) {
			setUser(username)
			setSecret(password)
		}
	}, [resultLogin.data]) //eslint-disable-line

	return (
		<div className="login-page">
			<div className="login-container">
				<h2 className="title">Chat App</h2>
				<p
					className="register-change"
					onClick={() => setIsRegister(!isRegister)}
				>
					{isRegister ? 'Already a user?' : 'Are you a new user?'}
				</p>
				<form>
					<input
						type="text"
						className="login-input"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<input
						type="password"
						className="login-input"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="on"
					/>
					<button
						className="login-button"
						type="button"
						onClick={isRegister ? handleRegister : handleLogin}
					>
						{isRegister ? 'Register' : 'Login'}
					</button>
				</form>
				<div className="login-actions"></div>
			</div>
		</div>
	)
}

export default Login
