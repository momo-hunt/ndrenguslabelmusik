<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo.png';
	import { Eye, EyeSlash, Icon, LockClosed, User } from 'svelte-hero-icons';

	let passwordType = 'password';

	function changePasswordType() {
		passwordType = passwordType == 'password' ? 'text' : 'password';
	}
</script>

<main>
	<img src={logo} alt="Logo Ndrengus Label Musik" />

	<h2>LOGIN</h2>

	<form
		method="post"
		use:enhance={({ form }) => {
			form.password.value = '';
			//
			return ({ result }) => {
				console.log(result);
				if (result.type == 'success') return goto('/v2/dashboard');
				alert(`Ada kesalahan masukkan username atau password!`);
			};
		}}
	>
		<section>
			<span><Icon src={User} solid size="24" /></span>
			<input type="text" name="username" id="username" placeholder="Username" />
		</section>
		<section>
			<span><Icon src={LockClosed} solid size="24" /></span>
			<input type={passwordType} name="password" id="password" placeholder="Password" />
			<button type="button" on:click={changePasswordType}
				><Icon src={passwordType == 'password' ? EyeSlash : Eye} solid size="24" /></button
			>
		</section>
		<button type="submit">LOGIN</button>
	</form>

	<a href="/v2/forgot-password" class="forgot-password">Forgot password ?</a>
</main>

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	main {
		text-align: center;
		margin-top: 56px;
	}

	main img {
		height: 100px;
	}

	main h2,
	main a.forgot-password {
		color: var(--bg-orange);
	}

	main a.forgot-password:hover {
		text-decoration: underline;
	}

	main form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		margin: 2rem 2rem 1rem 2rem;
	}

	main form section {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background-color: var(--bg-light);
		color: var(--bg-dark);
		padding: 0 1rem;
		height: 48px;
		border-radius: 2rem;
	}

	main form section input {
		width: 100%;
		background: transparent;
		border: none;
		outline: none;
		font-size: 18px;
		text-align: center;
	}

	main form section input:focus::placeholder {
		opacity: 0;
	}

	main form section input::placeholder {
		opacity: 0.6;
		color: var(--bg-dark);
	}

	main form section input#username {
		margin-right: 32px;
	}

	main form section button {
		background: transparent;
		border: none;
		outline: none;
		opacity: 0.4;
	}

	main form section button:hover {
		transition: opacity 0.3s ease;
		opacity: 1;
	}

	main form button[type='submit'] {
		width: 60%;
		font-size: 18px;
		font-weight: 500;
		height: 48px;
		border-radius: 2rem;
		background-color: var(--bg-semi-light);
		border: none;
		outline: none;
	}
</style>
