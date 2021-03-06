import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuthentication } from '../AuthProvider';

export default function Login() {

	// State
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Hooks
	const { login } = useAuthentication();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	// Input Handlers
	const handleInputChange = e => {
		if (e.target.name === 'email-input') {
			setEmail(e.target.value);
		}

		if (e.target.name === 'password-input') {
			setPassword(e.target.value);
		}
	};

	// Click Handler
	async function handleLoginClick(event) {
		event.preventDefault();

		const data = {
			email: email,
			password: password,
		};

		const response = await fetch(`/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.status === 200) {
			login({ email: data.email });
			navigate(from, { replace: true });
		}
	}


	return (
	<main>
		<div class='container-form'>
			<form class='form'>
				<input
					type='email'
					placeholder='email'
					className='email-input'
					name='email-input'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='password'
					name='password-input'
					className='password-input'
					value={password}
					onChange={handleInputChange}
				/>
					<button type="button" onClick={handleLoginClick}>login</button>
				<p class='input-message'>
					Not registered?
					<Link to='/register'> Register</Link>
				</p>
			</form>
		</div>
	</main>
	);
}