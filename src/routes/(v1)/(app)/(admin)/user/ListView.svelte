<script>
	import { Icon, UserCircle } from 'svelte-hero-icons';

	export let users;
</script>

{#each users as u}
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
{/each}

<style>
	* {
		/* border: 0.1px solid red !important; */
	}

	article {
		margin: 0.5rem 1rem;
		background-color: var(--bg-2);
		color: var(--bg-1);
		border-radius: 1rem;
		display: flex;
		padding: 1rem;
		gap: 1rem;
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
