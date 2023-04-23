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

	<h2>LOGIN</h2>

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
			<Icon src={User} solid size="24" />
			<input type="text" name="username" id="username" placeholder="Username" />
		</label>
		<label for="password">
			<Icon src={LockClosed} solid size="24" />

			<input type={typeInputPassword} name="password" id="password" placeholder="Password" />
			<button type="button" on:click={showPassword}>
				<Icon src={typeInputPassword == 'password' ? EyeSlash : Eye} solid size="24" />
			</button>
		</label>
		<button type="submit">LOGIN</button>
		<a href="/forgot-password">Forgot password ?</a>
	</form>
</main>

<style>
	main {
		margin-top: 56px;
		text-align: center;
	}

	img {
		width: 20%;
	}

	form {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	form > label,
	form > button {
		background-color: var(--bg-2);
		padding: 0 2rem;
		border-radius: 2rem;
	}

	form > button {
		background-color: var(--bg-4);
		font-weight: 600;
	}

	form > label,
	input,
	input::placeholder {
		color: var(--bg-1);
	}

	input::placeholder {
		opacity: 0.6;
	}

	input:focus::placeholder {
		color: transparent;
	}

	button[type='button'] {
		padding: 0;
	}
</style>
