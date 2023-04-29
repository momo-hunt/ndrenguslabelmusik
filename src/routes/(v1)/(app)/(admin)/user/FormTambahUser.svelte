<script>
	import { loading } from '$lib/stores/store.js';
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { user } from '$lib/stores/userstore.js';
	import { Eye, EyeSlash, Icon, LockClosed, User, XMark } from 'svelte-hero-icons';

	const dispatch = createEventDispatcher();

	let typeInput = { password: 'password', confirmPassword: 'password' };
	function showPassword(name) {
		typeInput[name] = typeInput[name] == 'password' ? 'text' : 'password';
	}
</script>

<form
	action="?/add"
	method="post"
	use:enhance={() => {
		loading.show();
		return async ({ result }) => {
			loading.hide();
			if (result.status != 200) return alert(result.message);
			dispatch('close');

			user.add(result.data.data);
		};
	}}
>
	<div>
		<label for="username">Username</label>
		<input type="text" name="username" id="username" required />
	</div>
	<div>
		<label for="password">Password</label>
		<input type={typeInput.password} name="password" id="password" required />
		<button class="eye" type="button" on:click={() => showPassword('password')}>
			<Icon src={typeInput.password == 'password' ? EyeSlash : Eye} solid size="24" />
		</button>
	</div>
	<div>
		<label for="confirmPassword">Confirm Password</label>
		<input type={typeInput.confirmPassword} name="confirmPassword" id="confirmPassword" required />
		<button class="eye" type="button" on:click={() => showPassword('confirmPassword')}>
			<Icon src={typeInput.password == 'password' ? EyeSlash : Eye} solid size="24" />
		</button>
	</div>
	<button type="submit">Tambah</button>
</form>

<style>
	/* * {
		border: var(--border);
	} */

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	form > div {
		width: 100%;
		position: relative;
	}

	form input {
		background-color: var(--bg-4) !important;
		border-radius: 1rem;
	}

	form > div button {
		position: absolute;
		right: 1rem;
		bottom: 0;
		padding: 0;
		opacity: 0.6;
	}

	form > button {
		margin-top: 1rem;
		background-color: var(--bg-1);
		color: var(--bg-2);
		border-radius: 2rem;
		width: 60%;
	}
</style>
