<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo.png';
	import { Eye, EyeSlash, Icon, LockClosed, User } from 'svelte-hero-icons';
	import CssLoader from '$lib/components/CssLoader.svelte';

	export let data;
	let submitted = false;

	let typeInputPassword = 'password';
	function showPassword() {
		typeInputPassword = typeInputPassword == 'password' ? 'text' : 'password';
	}
</script>

{#if submitted}
	<CssLoader />
{/if}
<main>
	<img src={logo} alt="Ndrengus Label Musik" />

	{#if data?.user}
		<h2>Anda sudah login !</h2>
		<a href="/"><h1>Ke dashboard</h1></a>
	{/if}
	{#if !data?.user}
		<h2>LOGIN</h2>

		<form
			method="post"
			use:enhance={({ form }) => {
				//
				submitted = true;
				form.password.value = '';
				return ({ result }) => {
					submitted = false;
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
			<a href="/forgot-password" class="link-forgot">Forgot password ?</a>
		</form>
	{/if}
</main>

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	main {
		margin-top: 56px;
		text-align: center;
	}

	.link-forgot {
		color: var(--bg-3);
	}

	.link-forgot:hover {
		text-decoration: underline;
	}

	main h2 {
		color: var(--bg-3);
	}

	img {
		width: 20%;
	}

	form {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	form > label,
	form > button {
		background-color: var(--bg-2);
		padding: 0 1rem;
		border-radius: 2rem;
	}

	form > button {
		background-color: var(--bg-4);
		font-weight: 600;
		width: 60%;
	}

	form input {
		text-align: center;
	}

	form input#username {
		margin-right: 32px;
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
