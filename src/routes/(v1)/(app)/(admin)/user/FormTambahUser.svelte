<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let formData = { username: '', password: '', confirmPassword: '' };

	const onSubmit = (e) => {
		dispatch('submitTambah', formData);
	};
</script>

<form method="post" on:submit|preventDefault={onSubmit}>
	<div>
		<label for="username">Username</label>
		<input type="text" name="username" id="username" bind:value={formData.username} required />
	</div>
	<div>
		<label for="password">Password</label>
		<input type="password" name="password" id="password" bind:value={formData.password} required />
	</div>
	<div>
		<label for="confirmPassword">Confirm Password</label>
		<input
			type="password"
			name="confirmPassword"
			id="confirmPassword"
			bind:value={formData.confirmPassword}
			required
		/>
	</div>
	<button type="submit">Tambah</button>
</form>

<style>
	/* * {
		border: 0.1px solid red !important;
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
	}

	form input {
		background-color: var(--bg-4) !important;
		border-radius: 1rem;
	}

	form button {
		margin-top: 1rem;
		background-color: var(--bg-1);
		color: var(--bg-2);
		border-radius: 2rem;
		width: 60%;
	}
</style>
