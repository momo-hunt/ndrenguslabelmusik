<script>
	import { Bars3, Bell, ChevronDown, Icon, UserCircle } from 'svelte-hero-icons';
	import logo from '$lib/assets/logo.png';

	export let data;
</script>

<header>
	<button type="button">
		<Icon src={Bars3} solid />
	</button>

	<button type="button">
		<Icon src={UserCircle} solid />
	</button>
</header>

<section><h3>Dashboard</h3></section>

<main>
	<article>
		<h4>Selamat datang</h4>
		<h5>{data?.user || 'null'}</h5>
		<button type="button">
			<span><Icon src={Bell} solid size="24" /></span>
			<span>Informasi Laporan & Pembayaran</span>
			<span><Icon src={ChevronDown} solid size="24" /></span>
		</button>
	</article>

	<section class="info">
		<article>
			<h4>Saldo</h4>
			<h2>$0.00</h2>
		</article>
		<article>
			<h4>April 2023</h4>
			<h2>$0.00</h2>
		</article>
		<article>
			<h4>Mei 2023</h4>
			<h2>$0.00</h2>
		</article>
		<article>
			<h4>Juli 2023</h4>
			<h2>$0.00</h2>
		</article>
		<article>
			<h4>Total Penarikan</h4>
			<h2>$0.00</h2>
		</article>
	</section>
</main>

<footer>
	<div>
		<h3>Ndrengus Label Musik</h3>
		<p>Supported by : MomoCreative</p>
	</div>
	<img src={logo} alt="Ndrengus Label Musik" />
</footer>

<!-- <a href="/login?logout">Logout</a> -->

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-2);
		color: var(--bg-1);
		height: 48px;
		border-bottom: 1px solid var(--bg-1);
	}

	header button {
		padding: 0;
	}

	main {
		margin-bottom: 24px;
	}

	section {
		background-color: var(--bg-2);
		padding: 0.5rem 1rem;
	}

	section h3 {
		color: var(--bg-3);
	}

	article {
		padding: 1rem;
		border-radius: 1rem;
		margin: 1rem 1rem 0 1rem;
		background-color: var(--bg-2);
		color: var(--bg-1);
	}

	article h5 {
		font-weight: 400;
	}

	article button {
		/* position: relative; */
		justify-content: space-between;
		margin-top: 1rem;
		padding: 2rem 1rem;
		width: 100%;
		background-color: var(--bg-4);
		gap: 0.5rem;
		border-radius: 1.6rem;
	}

	section.info {
		background-color: transparent;
		display: flex;
		flex-wrap: wrap;

		gap: 1rem;
	}

	section.info article {
		margin: 0;
		width: calc(50% - 0.5rem);
		text-align: center;
	}

	section.info article:last-child {
		width: 100%;
	}

	section.info article:first-child,
	section.info article:last-child {
		background-color: var(--bg-4);
	}

	section.info article h2 {
		color: var(--bg-3);
		margin-top: 1rem;
	}

	footer {
		/* position: fixed; */
		/* bottom: 0; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-2);
		color: var(--bg-1);
		padding: 0 1rem;
		height: 96px;
	}
	footer img {
		width: 12%;
		filter: brightness(0.1);
	}
</style>
