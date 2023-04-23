<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo.png';
	import { Eye, EyeSlash, Icon, LockClosed, User } from 'svelte-hero-icons';

	let typeInputPassword = 'password';
	function showPassword() {
		typeInputPassword = typeInputPassword == 'password' ? 'text' : 'password';
	}
</script>

<main>
	<img src={logo} alt="Ndrengus Label Musik" />

	<p>LOGIN</p>

	<form
		method="post"
		use:enhance={({ form }) => {
			//
			form.password.value = '';
			return ({ result }) => {
				console.log(result);
				if (result.type == 'success') return goto('/');
				alert(`Ada kesalahan masukkan username atau password!`);
			};
		}}
	>
		<label for="username">
			<Icon src={User} solid size="50" />
			<input type="text" name="username" id="username" placeholder="Username" />
		</label>
		<label for="password">
			<Icon src={LockClosed} solid size="50" />

			<input type={typeInputPassword} name="password" id="password" placeholder="Password" />
			<button type="button" on:click={showPassword}>
				<Icon src={typeInputPassword == 'password' ? EyeSlash : Eye} solid size="50" />
			</button>
		</label>
		<button type="submit">LOGIN</button>
		<a href="/forgot-password">Forgot password ?</a>
	</form>
</main>

<style>
	main {
		margin-top: 150px;
		color: #ff9000;
		font-size: 30px;
		text-align: center;
	}

	main > p {
		margin: 4rem 0;
		font-weight: 500;
	}

	img {
		width: 157px;
		aspect-ratio: 1/1;
	}

	form {
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	label {
		width: 100%;
		background-color: var(--bg-2);
		display: flex;
		align-items: center;
		border-radius: 4rem;
		padding: 3rem;
		gap: 1rem;
	}

	input {
		text-align: center;
	}

	input:focus::placeholder {
		color: transparent;
	}

	input#username {
		padding-right: 50px;
	}

	input,
	input::placeholder,
	form > button,
	label {
		color: var(--bg-1);
	}

	input,
	form > button {
		font-size: inherit;
	}

	form > button {
		width: 60%;
		font-size: 40px;
		font-weight: 600;
		padding: 2rem;
		border-radius: 4rem;
		background-color: var(--bg-3);
	}

	a {
		font-weight: 300;
	}
	a:hover {
		text-decoration: underline;
	}

	form label button {
		width: fit-content;
	}
</style>
