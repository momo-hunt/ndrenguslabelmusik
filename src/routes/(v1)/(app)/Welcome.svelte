<script>
	import { Bell, ChevronDown, Icon } from 'svelte-hero-icons';

	export let username;
</script>

<article>
	<h4>Selamat datang</h4>
	<h5>{username}</h5>
	<button type="button">
		<span><Icon src={Bell} solid size="24" /></span>
		<span>Informasi Laporan & Pembayaran</span>
		<span><Icon src={ChevronDown} solid size="24" /></span>
	</button>
</article>

<style>
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
</style>
