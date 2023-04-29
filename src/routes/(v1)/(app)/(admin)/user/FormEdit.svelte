<script>
	import { enhance } from '$app/forms';
	import { user } from '$lib/stores/userstore.js';
	import { Eye, EyeSlash, Icon, LockClosed, User, XMark } from 'svelte-hero-icons';
	import { createEventDispatcher } from 'svelte';
	import CssLoader from '$lib/components/CssLoader.svelte';
	const dispatch = createEventDispatcher();

	let typeInput = { password: 'password', confirmPassword: 'password' };
	function showPassword(name) {
		typeInput[name] = typeInput[name] == 'password' ? 'text' : 'password';
	}

	export let id = '';
	let isSubmitted = false;
	let userSelect = $user.filter((a) => a.id == id)[0];
</script>

{#if isSubmitted}
	<CssLoader />
{/if}

<section>
	<article>
		<button class="close" on:click={() => dispatch('close')}>
			<Icon src={XMark} size="24" solid />
		</button>
		<header>
			<h3>Edit User</h3>
		</header>

		<form
			action="?/edit"
			method="post"
			use:enhance={() => {
				isSubmitted = true;
				return async ({ result }) => {
					isSubmitted = false;
					if (result.status != 200) {
						alert('Gagal ubah.');
						dispatch('close', 'error');
					}
					const { id, data } = result.data;
					dispatch('close', { id, data });
				};
			}}
		>
			<input type="hidden" name="id" value={userSelect.id} />
			<div>
				<label for="username">Username</label>
				<input type="text" name="username" id="username" value={userSelect.username} />
			</div>
			<div>
				<label for="role">Role</label>
				<select name="role" id="role">
					<option value={undefined} disabled selected>Silakan pilih!</option>
					<option value="artis" selected={userSelect.role == 'artis'}>Artis</option>
					<option value="admin" selected={userSelect.role == 'admin'}>Admin</option>
				</select>
			</div>
			<div>
				<label for="password">Password</label>
				<input type={typeInput.password} name="password" id="password" />
				<button class="eye" type="button" on:click={() => showPassword('password')}>
					<Icon src={typeInput.password == 'password' ? EyeSlash : Eye} solid size="24" />
				</button>
			</div>
			<div>
				<label for="password">Confirm Password</label>
				<input type={typeInput.confirmPassword} name="confirmPassword" id="confirmPassword" />
				<button class="eye" type="button" on:click={() => showPassword('confirmPassword')}>
					<Icon src={typeInput.confirmPassword == 'password' ? EyeSlash : Eye} solid size="24" />
				</button>
			</div>

			<footer>
				<button on:click={() => dispatch('close')} type="button">Batal</button>
				<button type="submit">Simpan</button>
			</footer>
		</form>
	</article>
</section>

<style>
	/* * {
		border: var(--border);
	} */

	section {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 4rem 1rem;
	}

	article {
		position: relative;
		border-radius: 1rem;
		color: var(--bg-1);
		background-color: var(--bg-2);
	}

	article header {
		padding: 0 1rem;
	}

	article header h3 {
		text-align: center;
		padding-top: 1rem;
	}

	article button.close {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		height: min-content;
		color: red;
	}

	form {
		padding: 1rem;
	}

	form > div {
		position: relative;
	}

	form > div > button.eye {
		padding: 0;
		height: min-content;
		position: absolute;
		bottom: 0.5rem;
		right: 1rem;
		opacity: 0.5;
	}

	form label {
		margin: 0 1rem;
		padding-top: 0.5rem;
		opacity: 0.8;
	}

	form input,
	form select {
		background-color: var(--bg-4) !important;
		border-radius: 1rem;
	}

	form footer {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	form footer button[type='submit'] {
		background-color: var(--bg-1);
		color: var(--bg-2);
		border-radius: 2rem;
	}
</style>
