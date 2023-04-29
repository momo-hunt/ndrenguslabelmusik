<script>
	import { navigating } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { Bars3, Icon, UserCircle } from 'svelte-hero-icons';
	import logo from '$lib/assets/logo.png';
	import Sidebar from './Sidebar.svelte';

	let isShowSidebar = false;

	export let data;

	beforeNavigate(() => loading.hide());

	$: showLoader = $navigating == null ? false : true;
</script>

{#if isShowSidebar}
	<Sidebar
		user={data?.user}
		hal={data?.path || 'dashboard'}
		on:toggleSidebar={() => (isShowSidebar = !isShowSidebar)}
	/>
{/if}

<main>
	<header>
		<button type="button" on:click={() => (isShowSidebar = !isShowSidebar)}>
			<Icon src={Bars3} solid />
		</button>

		<a href="/profil">
			<Icon src={UserCircle} solid size="32" />
		</a>
	</header>

	<section><h3>{data?.path || 'Dashboard'}</h3></section>

	<div class="content">
		<slot />
	</div>

	<footer>
		<div>
			<h4>Ndrengus Label Musik</h4>
			<small>Supported by : MomoCreative</small>
		</div>
		<img src={logo} alt="Ndrengus Label Musik" />
	</footer>
</main>

<style>
	/* * {
		border: 0.1px solid red;
	} */

	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main > .content {
		margin-bottom: 2rem;
	}

	header {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-2);
		color: var(--bg-1);
		height: 48px;
		padding: 0 1rem;
		border-bottom: 1px solid var(--bg-1);
	}

	header button {
		padding: 0;
	}

	section {
		background-color: var(--bg-2);
		padding: 0.5rem 1rem;
	}

	section h3 {
		color: var(--bg-3);
		text-transform: uppercase;
	}

	footer {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-2);
		color: var(--bg-1);
		padding: 0 1rem;
		height: 72px;
	}
	footer img {
		height: 60%;
		filter: brightness(0.1);
	}
</style>
