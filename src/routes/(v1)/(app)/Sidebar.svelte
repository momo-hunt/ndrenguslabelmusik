<script>
	import {
		ArrowRightOnRectangle,
		CircleStack,
		ComputerDesktop,
		CurrencyDollar,
		Icon,
		User
	} from 'svelte-hero-icons';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let hal;
	export let user;
</script>

<aside>
	<nav>
		<a href="/" class:active={hal == 'dashboard'}>
			<Icon src={ComputerDesktop} solid size="24" />
			<span>Dashboard</span>
		</a>
		<a href="/aset" class:active={hal == 'aset'}>
			<Icon src={CircleStack} solid size="24" />
			<span>Aset</span>
		</a>
		<a href="/penarikan" class:active={hal == 'penarikan'}>
			<Icon src={CurrencyDollar} solid size="24" />
			<span>Penarikan</span>
		</a>

		<hr />
		{#if user.role == 'admin'}
			<a href="/user" class:active={hal == 'user'}>
				<Icon src={User} solid size="24" />
				<span>User</span>
			</a>
		{/if}

		<a href="/login?logout">
			<Icon src={ArrowRightOnRectangle} solid size="24" />
			<span>Logout</span>
		</a>
	</nav>
	<button on:click={() => dispatch('toggleSidebar')}>&nbsp;</button>
</aside>

<style>
	* {
		border: var(--border);
	}

	aside {
		display: flex;
		width: 100%;
		min-height: 100vh;

		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
	}

	aside nav {
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		width: 60%;
		background-color: var(--bg-1);
		padding: 4rem 0 4rem 0;
	}

	aside nav hr {
		opacity: 0.2;
		margin: 1rem 0;
	}

	aside nav a {
		margin: 0 1rem;
		padding: 0 1rem;
		height: 48px;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		background-color: var(--bg-2);
		border-radius: 2rem;
		color: var(--bg-1);
	}

	aside nav a.active {
		background-color: var(--bg-4);
	}

	aside nav a:last-child {
		margin-top: auto;
		justify-content: center;
		color: var(--bg-3);
		background: none;
	}

	aside button {
		flex: 1;
		height: 100vh;
		/* background-color: red; */
	}
</style>
