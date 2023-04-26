<script>
	import { Icon, UserCircle } from 'svelte-hero-icons';
	import logo from '$lib/assets/logo.png';

	export let data;
</script>

<main>
	<header>
		<span class="profile"><Icon src={UserCircle} solid size="24" /></span>
	</header>

	<section class="title"><h2>{data?.title ?? 'Dashboard'}</h2></section>

	<section id="content">
		<slot />
	</section>

	<footer>
		<div>
			<h2>Ndrengus Label Musik</h2>
			<p>Supported by MomoCreative</p>
		</div>
		<img src={logo} alt="Logo Ndrengus Label Musik" />
	</footer>
</main>

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-light);
		color: var(--bg-dark);
		border-bottom: 0.5px solid var(--bg-dark);
	}

	header span.profile {
		margin-left: auto;
		padding: 0 0.5rem;
	}

	section.title {
		background-color: var(--bg-light);
		color: var(--bg-dark);
		padding: 0.5rem 1rem;
		color: var(--bg-orange);
	}

	section.title h2 {
		font-weight: 600;
	}

	footer {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-light);
		color: var(--bg-dark);
		padding: 1rem;
	}

	footer img {
		height: 56px;
		filter: brightness(0);
	}
</style>
