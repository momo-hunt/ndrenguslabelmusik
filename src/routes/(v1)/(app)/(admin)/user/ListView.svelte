<script>
	import { createEventDispatcher } from 'svelte';
	import { Icon, UserCircle } from 'svelte-hero-icons';

	export let users;
	export let data;
	const dispatch = createEventDispatcher();

	export let selectedId = '';
</script>

{#each users as u}
	{#if u.role != 'superadmin' || data?.user?.role == 5}
		<button
			class:active={u.id == selectedId}
			on:click={() => {
				selectedId = u.id;
				dispatch('selectedId', u.id);
			}}
		>
			<article>
				<div class="left">
					<Icon src={UserCircle} size="56" />
				</div>
				<div class="right">
					<h4>{u.username}</h4>
					<p>{u.role == '' ? 'Role kosong' : u.role}</p>
					<small>Login terakhir : {u.login_at}</small>
				</div>
			</article>
		</button>
	{/if}
{/each}

<style>
	* {
		/* border: var(--border); */
	}

	button {
		margin: 0;
		padding: 0;
		height: max-content;
		width: 100%;
		display: block;
		text-align: start;
	}

	article {
		cursor: pointer;
		margin: 0.5rem 1rem;
		background-color: var(--bg-2);
		color: var(--bg-1);
		border-radius: 1rem;
		display: flex;
		padding: 1rem;
		gap: 1rem;
	}

	article h4 {
		font-weight: 600;
	}

	button.active {
		background-color: var(--bg-3);
	}

	article .left {
		width: 25%;
		text-align: center;
		align-self: self-start;
		/* border: 2px solid var(--bg-1); */
		border-radius: 0.5rem;
		background-color: var(--bg-4);
	}

	article .right {
		flex: 1;
	}
</style>
